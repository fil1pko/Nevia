<script>
  import { register } from 'swiper/element/bundle';

  register();

  export default {
    setup() { 
      const spaceBetween = 10;
      const onProgress = (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress)
      };

      const onSlideChange = (e) => {
        console.log('slide changed')
      }

      return {
        spaceBetween,
        onProgress,
        onSlideChange,
      };
    }
  }
</script>

<template>
  <swiper-container class="my-swiper2"
    :slides-per-view="1.5"
    :pagination="false"
    :centered-slides="true"
    :space-between="200"
    :loop="true"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >

    <!-- first slide -->
      <swiper-slide> 
      </swiper-slide>
    <!-- second slide -->
      <swiper-slide>
      </swiper-slide>
    <!-- third slide -->
      <swiper-slide>
      </swiper-slide>
    <!-- fourth slide -->
      <swiper-slide> 
      </swiper-slide>
      
  </swiper-container>
</template>

<style lang="scss">
  @import '../assets/style/base.scss';
  @import '../assets/style/colors.scss';