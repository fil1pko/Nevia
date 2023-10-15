<template>
  <swiper-container
    :slides-per-view="1"
    :space-between="spaceBetween"
    :centered-slides="true"
    :pagination="{
      hideOnClick: true
    }"
    :breakpoints="{
      768: {
        slidesPerView: 1,
      },
    }"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >
    <swiper-slide> <img src="../assets/pictures/certificate1.png" alt=""> </swiper-slide>
    <swiper-slide> <img src="../assets/pictures/certificate2.png" alt=""> </swiper-slide>
    <swiper-slide> <img src="../assets/pictures/certificate3.png" alt=""> </swiper-slide>
  </swiper-container>
</template>

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


<style lang="scss">
  swiper-slide{
    img{
      max-width: 400px;
    }
  }
</style>

