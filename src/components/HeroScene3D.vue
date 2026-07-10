<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { createTimeline } from 'animejs'

const emit = defineEmits<{
  ready: []
  failed: []
}>()

const container = ref<HTMLDivElement | null>(null)

// Palette — tuned for the paper (#FAF6F0) page background the scene now floats on
const C = {
  chair: 0x2f635d,
  chairCushion: 0x3a7069,
  rug: 0xefe0cb,
  figureA: 0xe9dcc6, // warm sand outfit — client
  figureB: 0xd9764a, // terracotta outfit — psychologist
  skin: 0xdca487,
  hairA: 0x3b322d,
  hairB: 0x54382c,
  shoeA: 0x9c8266,
  shoeB: 0x314f4a,
  wood: 0xb98a5f,
  plant: 0x5f9a8f,
  pot: 0xe58f5f,
  paper: 0xfffdf8,
}

function mat(color: number, roughness = 0.72) {
  return new THREE.MeshStandardMaterial({ color, roughness })
}

/** Fabric: soft sheen highlight like woven textile (chairs, clothing) */
function matFabric(color: number, roughness = 0.9) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness,
    sheen: 0.7,
    sheenRoughness: 0.55,
    sheenColor: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.35),
  })
}

/** Skin: soft near-surface sheen, less matte than fabric */
function matSkin() {
  return new THREE.MeshPhysicalMaterial({
    color: C.skin,
    roughness: 0.48,
    clearcoat: 0.12,
    clearcoatRoughness: 0.7,
  })
}

/** Polished wood */
function matWood() {
  return new THREE.MeshPhysicalMaterial({
    color: C.wood,
    roughness: 0.45,
    clearcoat: 0.35,
    clearcoatRoughness: 0.4,
  })
}

const UP = new THREE.Vector3(0, 1, 0)
const v3 = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z)

/** Capsule stretched between two joints — limbs always connect, rounded caps overlap at the joints */
function limb(m: THREE.Material, a: THREE.Vector3, b: THREE.Vector3, r: number): THREE.Mesh {
  const dir = new THREE.Vector3().subVectors(b, a)
  const len = dir.length()
  const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 8, 16), m)
  mesh.position.copy(a).addScaledVector(dir, 0.5)
  mesh.quaternion.setFromUnitVectors(UP, dir.normalize())
  return mesh
}

type Cleanup = () => void
let cleanup: Cleanup | null = null

function buildChair(): THREE.Group {
  const g = new THREE.Group()
  const body = matFabric(C.chair, 0.95)
  const cushion = matFabric(C.chairCushion, 0.9)

  const base = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.52, 1.05), body)
  base.position.y = 0.26
  const seat = new THREE.Mesh(new THREE.BoxGeometry(1.06, 0.16, 0.92), cushion)
  seat.position.set(0, 0.58, 0.03)
  const back = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.25, 0.3), body)
  back.position.set(0, 1.05, -0.5)
  back.rotation.x = -0.1
  const backCushion = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 0.14), cushion)
  backCushion.position.set(0, 1.08, -0.32)
  backCushion.rotation.x = -0.1
  const armL = new THREE.Group()
  const armBlock = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.5, 0.95), body)
  armBlock.position.set(0, 0.66, 0)
  const armTop = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.72, 6, 14), body)
  armTop.rotation.x = Math.PI / 2
  armTop.position.set(0, 0.94, 0)
  armL.add(armBlock, armTop)
  armL.position.x = -0.68
  const armR = armL.clone()
  armR.position.x = 0.68

  g.add(base, seat, back, backCushion, armL, armR)
  return g
}

interface Figure {
  group: THREE.Group
  breathe: THREE.Group
  head: THREE.Mesh
  gestureArm: THREE.Group
}

interface FigureOpts {
  cloth: number
  hair: number
  shoe: number
  gesture: 'open' | 'notes'
  bun?: boolean
}

function buildFigure({ cloth, hair, shoe, gesture, bun }: FigureOpts): Figure {
  const g = new THREE.Group()
  const mCloth = matFabric(cloth, 0.85)
  const mClothDark = matFabric(new THREE.Color(cloth).multiplyScalar(0.82).getHex(), 0.85)
  const mSkin = matSkin()
  const mHair = mat(hair, 0.68)
  const mShoe = mat(shoe, 0.55)

  // ----- lower body: hips, trousers, shoes -----
  const hips = limb(mCloth, v3(-0.09, 0.8, 0.08), v3(0.09, 0.8, 0.08), 0.21)
  g.add(hips)
  for (const s of [-1, 1]) {
    const knee = v3(0.18 * s, 0.76, 0.48)
    const thigh = limb(mCloth, v3(0.15 * s, 0.8, 0.1), knee, 0.135)
    const shin = limb(mCloth, knee, v3(0.18 * s, 0.16, 0.55), 0.095)
    // rounded kneecap smooths the thigh→shin transition
    const kneeCap = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), mCloth)
    kneeCap.position.copy(knee)
    // rounded shoe instead of a hard box
    const foot = limb(mShoe, v3(0.18 * s, 0.075, 0.52), v3(0.18 * s, 0.075, 0.74), 0.075)
    g.add(thigh, shin, kneeCap, foot)
  }

  // ----- upper body (breathes as one unit) -----
  const breathe = new THREE.Group()

  // tapered torso: narrower waist, fuller chest, slight engaged forward lean
  const torso = limb(mCloth, v3(0, 0.88, 0.04), v3(0, 1.34, 0.06), 0.245)
  const chest = limb(mCloth, v3(0, 1.12, 0.05), v3(0, 1.3, 0.06), 0.265)
  // deltoid shoulders instead of a straight bar
  const deltL = new THREE.Mesh(new THREE.SphereGeometry(0.125, 18, 14), mCloth)
  deltL.position.set(-0.27, 1.3, 0.04)
  const deltR = deltL.clone()
  deltR.position.x = 0.27
  breathe.add(torso, chest, deltL, deltR)

  // neck + collar + slightly oval head in skin tone
  const neck = limb(mSkin, v3(0, 1.38, 0.05), v3(0, 1.52, 0.06), 0.07)
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.03, 12, 24), mClothDark)
  collar.rotation.x = Math.PI / 2
  collar.position.set(0, 1.395, 0.05)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.215, 28, 22), mSkin)
  head.scale.y = 1.07
  head.position.set(0, 1.68, 0.07)
  // ears (children of the head so nods carry them)
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10), mSkin)
    ear.scale.set(0.55, 0.9, 0.8)
    ear.position.set(0.205 * s, -0.01, 0.01)
    head.add(ear)
  }
  // hair cap hugs the top-back of the skull (child of head so nods carry it)
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.225, 28, 18, 0, Math.PI * 2, 0, Math.PI * 0.55), mHair)
  hairCap.rotation.x = -0.38
  head.add(hairCap)
  if (bun) {
    const hairBun = new THREE.Mesh(new THREE.SphereGeometry(0.085, 16, 12), mHair)
    hairBun.position.set(0, 0.1, -0.19)
    head.add(hairBun)
  }
  breathe.add(neck, collar, head)

  // resting arm (far side): sleeve limbs + skin hand on the armrest
  const rShoulder = v3(-0.29, 1.28, 0.03)
  const rElbow = v3(-0.44, 1.0, 0.14)
  const rHand = v3(-0.46, 0.88, 0.42)
  const restHand = new THREE.Mesh(new THREE.SphereGeometry(0.088, 16, 12), mSkin)
  restHand.scale.set(1, 0.85, 1.2)
  restHand.position.copy(rHand)
  const rElbowCap = new THREE.Mesh(new THREE.SphereGeometry(0.082, 14, 10), mCloth)
  rElbowCap.position.copy(rElbow)
  breathe.add(limb(mCloth, rShoulder, rElbow, 0.085), limb(mCloth, rElbow, rHand, 0.075), rElbowCap, restHand)

  // gesturing arm: upper sleeve fixed, forearm + skin hand pivot at the elbow
  const gShoulder = v3(0.29, 1.28, 0.03)
  const gElbow = gesture === 'open' ? v3(0.44, 1.02, 0.22) : v3(0.42, 0.98, 0.2)
  const gHand = gesture === 'open' ? v3(0.5, 1.12, 0.54) : v3(0.18, 0.94, 0.44)
  breathe.add(limb(mCloth, gShoulder, gElbow, 0.085))

  const gestureArm = new THREE.Group()
  gestureArm.position.copy(gElbow)
  const handLocal = new THREE.Vector3().subVectors(gHand, gElbow)
  const hand = new THREE.Mesh(new THREE.SphereGeometry(0.088, 16, 12), mSkin)
  hand.scale.set(1, 0.85, 1.2)
  hand.position.copy(handLocal)
  const gElbowCap = new THREE.Mesh(new THREE.SphereGeometry(0.082, 14, 10), mCloth)
  gestureArm.add(gElbowCap, limb(mCloth, v3(0, 0, 0), handLocal, 0.075), hand)
  breathe.add(gestureArm)

  if (gesture === 'notes') {
    const notebook = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.05, 0.3), mat(C.paper, 0.9))
    notebook.position.set(0.1, 0.86, 0.42)
    notebook.rotation.z = -0.1
    g.add(notebook)
  }

  g.add(breathe)
  return { group: g, breathe, head, gestureArm }
}

function buildTable(): { group: THREE.Group; plant: THREE.Group } {
  const g = new THREE.Group()
  const wood = matWood()
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.07, 24), wood)
  top.position.y = 0.78
  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.72, 12), wood)
  leg.position.y = 0.4
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.06, 24), wood)
  foot.position.y = 0.04

  // plant in its own group so it can pop in and sway
  const plant = new THREE.Group()
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.08, 0.16, 16), mat(C.pot, 0.8))
  pot.position.y = 0.9
  plant.add(pot)
  const leafMat = mat(C.plant, 0.8)
  for (let i = 0; i < 5; i++) {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), leafMat)
    leaf.scale.set(0.7, 1.7, 0.7)
    const a = (i / 5) * Math.PI * 2
    leaf.position.set(Math.cos(a) * 0.08, 1.12, Math.sin(a) * 0.08)
    leaf.rotation.set(Math.sin(a) * 0.5, 0, Math.cos(a) * 0.5)
    plant.add(leaf)
  }

  g.add(top, leg, foot, plant)
  return { group: g, plant }
}

onMounted(() => {
  const el = container.value
  if (!el) return

  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  } catch {
    emit('failed')
    return
  }
  renderer.setClearColor(0x000000, 0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.VSMShadowMap // blurred, realistically soft shadows
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1
  el.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50)

  // ----- image-based environment lighting: soft studio reflections on every material -----
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envTexture = pmrem.fromScene(new RoomEnvironment()).texture
  scene.environment = envTexture
  scene.environmentIntensity = 0.45
  pmrem.dispose()

  // ----- light rig on top of the environment: warm key + teal fill + rim + bounce -----
  scene.add(new THREE.HemisphereLight(0xfff6ea, 0xcbb9a4, 0.35))
  // warm key with soft area-like shadows
  const key = new THREE.DirectionalLight(0xffe8cf, 2.2)
  key.position.set(3.5, 6, 4)
  key.castShadow = true
  key.shadow.mapSize.set(1024, 1024)
  key.shadow.camera.left = -4.5
  key.shadow.camera.right = 4.5
  key.shadow.camera.top = 5
  key.shadow.camera.bottom = -3
  key.shadow.camera.near = 1
  key.shadow.camera.far = 20
  key.shadow.bias = -0.0002
  key.shadow.radius = 7
  key.shadow.blurSamples = 16
  scene.add(key)
  // cool teal fill from the left
  const fill = new THREE.PointLight(0x9fd8cd, 4.5, 0, 1.9)
  fill.position.set(-4.5, 2.5, 2)
  scene.add(fill)
  // back/rim light for edge separation against the light page
  const rim = new THREE.DirectionalLight(0xffffff, 0.7)
  rim.position.set(-1, 4, -5)
  scene.add(rim)
  // low terracotta bounce
  const bounce = new THREE.PointLight(0xe58f5f, 2.5, 0, 2)
  bounce.position.set(3, 0.8, -2.5)
  scene.add(bounce)

  const world = new THREE.Group()
  scene.add(world)

  // shadow catcher — invisible plane that only renders the soft contact shadow
  const shadowCatcher = new THREE.Mesh(
    new THREE.CircleGeometry(4.2, 48),
    new THREE.ShadowMaterial({ opacity: 0.22 })
  )
  shadowCatcher.rotation.x = -Math.PI / 2
  shadowCatcher.position.y = 0.001
  shadowCatcher.receiveShadow = true
  world.add(shadowCatcher)

  const rug = new THREE.Mesh(new THREE.CylinderGeometry(2.75, 2.75, 0.05, 48), mat(C.rug, 0.95))
  rug.position.y = 0.02
  rug.scale.z = 0.72
  rug.receiveShadow = true
  world.add(rug)

  const table = buildTable()
  world.add(table.group)

  const figA = buildFigure({ cloth: C.figureA, hair: C.hairA, shoe: C.shoeA, gesture: 'open' })
  const groupA = new THREE.Group()
  groupA.add(buildChair(), figA.group)
  groupA.position.set(-1.62, 0, 0.1)
  groupA.rotation.y = 0.66
  world.add(groupA)

  const figB = buildFigure({ cloth: C.figureB, hair: C.hairB, shoe: C.shoeB, gesture: 'notes', bun: true })
  const groupB = new THREE.Group()
  groupB.add(buildChair(), figB.group)
  groupB.position.set(1.62, 0, 0.1)
  groupB.rotation.y = -0.66
  world.add(groupB)

  // every solid mesh casts AND receives shadows (VSM handles self-shadowing cleanly),
  // so arms shade the torso, figures shade the chairs, chairs shade the rug
  world.traverse((obj) => {
    if (obj instanceof THREE.Mesh && obj !== shadowCatcher && obj !== rug) {
      obj.castShadow = true
      obj.receiveShadow = true
    }
  })

  const FIT_WIDTH = 5.7
  let baseDist = 8
  function layout() {
    const w = el!.clientWidth
    const h = el!.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    const halfV = THREE.MathUtils.degToRad(camera.fov / 2)
    baseDist = Math.max((FIT_WIDTH / 2) / (Math.tan(halfV) * camera.aspect), 6.8)
    camera.updateProjectionMatrix()
  }
  layout()
  const resizeObserver = new ResizeObserver(layout)
  resizeObserver.observe(el)

  let mouseX = 0
  let mouseY = 0
  let px = 0
  let py = 0
  const onPointer = (e: PointerEvent) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1
    mouseY = (e.clientY / window.innerHeight) * 2 - 1
  }
  let scrollT = 0
  let ps = 0
  const onScroll = () => {
    scrollT = Math.min(window.scrollY / window.innerHeight, 1)
  }
  window.addEventListener('pointermove', onPointer, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })

  // ----- entrance: pieces rise from below and settle with an elastic spring -----
  const enterState = { rotY: -0.16 }
  groupA.position.y = -1.6
  groupB.position.y = -1.6
  table.group.position.y = -1.4
  table.plant.scale.setScalar(0.01)
  const enter = createTimeline()
  enter.add(groupA.position, { y: 0, duration: 1400, ease: 'outElastic(1, .75)' }, 100)
  enter.add(groupB.position, { y: 0, duration: 1400, ease: 'outElastic(1, .75)' }, 260)
  enter.add(table.group.position, { y: 0, duration: 1300, ease: 'outElastic(1, .7)' }, 420)
  enter.add(table.plant.scale, { x: 1, y: 1, z: 1, duration: 900, ease: 'outBack(2.2)' }, 1100)
  enter.add(enterState, { rotY: 0, duration: 1800, ease: 'outQuad' }, 0)

  // ----- idle: looping anime.js timeline drives the living-scene state -----
  const idle = {
    breatheA: 0,
    breatheB: 0,
    nodB: 0,
    headTurnA: 0,
    gestureA: 0,
    gestureB: 0,
  }
  const idleTl = createTimeline({ loop: true })
  idleTl.add(idle, { breatheA: Math.PI * 2, duration: 4800, ease: 'inOutSine' }, 0)
  idleTl.add(idle, { breatheB: Math.PI * 2, duration: 4800, ease: 'inOutSine' }, 1200)
  idleTl.add(idle, { headTurnA: [-0.05, 0.06, -0.05], duration: 5200, ease: 'inOutSine' }, 0)
  idleTl.add(idle, { nodB: [0, 1, 0], duration: 3800, ease: 'inOutQuad' }, 900)
  idleTl.add(idle, { gestureA: [0, 1, 0], duration: 3400, ease: 'inOutSine' }, 200)
  idleTl.add(idle, { gestureB: [0, 1, 0], duration: 2600, ease: 'inOutSine' }, 500)

  const clock = new THREE.Clock()
  let visible = true
  let rafId = 0
  let firstFrame = true

  function frame() {
    rafId = requestAnimationFrame(frame)
    const t = clock.getElapsedTime()

    // breathing: vertical bob + subtle ribcage expansion
    const bA = Math.sin(idle.breatheA)
    const bB = Math.sin(idle.breatheB)
    figA.breathe.position.y = bA * 0.016
    figB.breathe.position.y = bB * 0.016
    figA.breathe.scale.set(1 + bA * 0.008, 1 + bA * 0.01, 1 + bA * 0.008)
    figB.breathe.scale.set(1 + bB * 0.008, 1 + bB * 0.01, 1 + bB * 0.008)

    // heads: client slowly looks around, psychologist nods in bursts while "listening"
    const nod = Math.sin(idle.nodB * Math.PI)
    figB.head.rotation.x = 0.09 * Math.sin(idle.nodB * Math.PI * 3) * nod * nod
    figA.head.rotation.y = idle.headTurnA
    figA.head.rotation.x = 0.03 * bA

    // gesture arms: open-hand sway (client) / pen strokes (psychologist)
    figA.gestureArm.rotation.x = 0.18 * Math.sin(idle.gestureA * Math.PI)
    figA.gestureArm.rotation.z = 0.07 * Math.sin(idle.gestureA * Math.PI * 2)
    figB.gestureArm.rotation.y = 0.12 * Math.sin(idle.gestureB * Math.PI * 4) * Math.sin(idle.gestureB * Math.PI)

    // camera: slow drift + mouse/scroll follow (lerped); entrance rotation settles on top
    px += (mouseX - px) * 0.05
    py += (mouseY - py) * 0.05
    ps += (scrollT - ps) * 0.08
    const driftX = Math.sin(t * 0.1) * 0.3
    camera.position.set(driftX + px * 1.1, 2.0 - py * 0.55 + ps * 1.1, baseDist)
    camera.lookAt(px * 0.2, 1.05 - py * 0.08, 0)
    world.rotation.y = px * 0.07 + enterState.rotY
    world.rotation.x = ps * 0.06

    renderer.render(scene, camera)
    if (firstFrame) {
      firstFrame = false
      emit('ready')
    }
  }

  function setRunning(run: boolean) {
    if (run && !rafId) {
      clock.start()
      frame()
    } else if (!run && rafId) {
      cancelAnimationFrame(rafId)
      rafId = 0
      clock.stop()
    }
  }

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    setRunning(visible && !document.hidden)
  })
  io.observe(el)
  const onVisibility = () => setRunning(visible && !document.hidden)
  document.addEventListener('visibilitychange', onVisibility)

  setRunning(true)

  cleanup = () => {
    setRunning(false)
    idleTl.pause()
    enter.pause()
    io.disconnect()
    resizeObserver.disconnect()
    document.removeEventListener('visibilitychange', onVisibility)
    window.removeEventListener('pointermove', onPointer)
    window.removeEventListener('scroll', onScroll)
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose()
        const m = obj.material
        Array.isArray(m) ? m.forEach((x) => x.dispose()) : m.dispose()
      }
    })
    envTexture.dispose()
    renderer.dispose()
    renderer.domElement.remove()
  }
})

onBeforeUnmount(() => {
  cleanup?.()
  cleanup = null
})
</script>

<template>
  <div ref="container" class="hero-3d" aria-hidden="true"></div>
</template>

<style scoped>
.hero-3d,
.hero-3d :deep(canvas) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
