<template>
  <swiper-container
    :slides-per-view="3"
    :pagination="false"
    :centered-slides="true"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >
    <swiper-slide> 
      <h1>2020</h1>  
      <div class="swiper-wraper">
        <div class="swiper-icon">
          <img src="" alt="" class="ico">
          <h4></h4>
        </div>
        <p>Vstúp do sveta neobmedzených možností s naším inovatívnym podnikaním. Pomáhame budovať úspešnú budúcnosť.</p>
      </div>
    </swiper-slide>
    <swiper-slide> <h1>2021</h1>  </swiper-slide>
    <swiper-slide> <h1>2022</h1>  </swiper-slide>
    <swiper-slide> <h1>2023</h1>  </swiper-slide>
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
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      max-width: 400px;
    }
  }
  .swiper-slide-active{
   background-color: green;
    
  }
</style>

