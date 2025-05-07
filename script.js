// Scene, Camera, Renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Lighting
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

// Load GLB model
const loader = new THREE.GLTFLoader();
loader.load('assets/models/charan-avatar.glb', (gltf) => {
  const model = gltf.scene;
  model.scale.set(2, 2, 2);
  model.position.set(0, -1.2, 0); // Adjust as needed
  scene.add(model);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    model.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();
}, undefined, (error) => {
  console.error('Error loading model:', error);
});

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
