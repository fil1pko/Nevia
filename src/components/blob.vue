<template>
  <canvas class="webgl"></canvas>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default {
  data() {
    return {
      mixer: null,
    };
  },
  mounted() {
    const canvas = document.querySelector('.webgl');
    const scene = new THREE.Scene();
    const self = this; 

    let object;

    // Instantiate a loader
    const loader = new GLTFLoader();
    loader.load(
      '/models/Hologram.glb',
      (gltf) => {
        object = gltf.scene;
        scene.add(object);

        self.mixer = new THREE.AnimationMixer(gltf.scene);

        gltf.animations.forEach((clip) => {
          self.mixer.clipAction(clip).play();
        });
      },
      (xhr) => {
        // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        // console.error(error);
      }
    );

    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, 900 / 900, 0.1, 1000);
    camera.position.z = 12;
    scene.add(camera);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(900, 900);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = false;
    controls.enableZoom = false;
    controls.enableRotate = false;

    // Add lighting
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      if (self.mixer) {
        self.mixer.update(0.01);
      }

      renderer.render(scene, camera);
    };

    animate();
  },
};
</script>

<style lang="scss">
// canvas{
//   position: absolute;
// }
canvas{
  width: 46.875vw !important;
  height: 46.875vw !important;
  max-width: 112.5rem;
  height: 112.5rem;
  z-index: 30;
  touch-action: manipulation !important;
  @media only screen and (max-width: 1024px){
    width: 60.875vw !important;
    height: 60.875vw !important;
  }
  @media only screen and (max-width: 700px){
    width: 80.875vw !important;
    height: 80.875vw !important;
  }
}
</style>
