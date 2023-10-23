<template>
  <canvas class="webgl"></canvas>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    const canvas = document.querySelector('.webgl');
    const scene = new THREE.Scene();

    const sizes = {
      widt: window.innerWidth,
      height: window.innerHeight
    }

    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: '#00ff83',
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(45, 800 / 600);
    camera.position.z = 10;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(800, 600);
    renderer.render(scene, camera);
  },
};
</script>

<style lang="scss">
  canvas{
    width: 100%;
    height: 100%;
  }
</style>