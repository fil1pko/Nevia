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
  <swiper-container class="my-swiper4 swiper-container"
    :slides-per-view="1.1"
    :pagination="false"
    :centered-slides="true"
    :space-between="180"
    :loop="true"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >


    <!-- third slide -->
      <swiper-slide>
        <h1>2022</h1>  
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/wifi4eu.svg" alt="people" class="ico">
            <h4> {{ $t('2022H1') }} <br> {{ $t('2022H2') }} </h4>
          </div>
          <p>{{ $t('2022T') }}</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/wifi4eu.svg" alt="people" class="ico">
            <h4> {{ $t('2022H1-2') }} <br> {{ $t('2022H2-2') }} </h4>
          </div>
          <p>{{ $t('2022T-2') }}</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/dpdapp.svg" alt="pc icon" class="ico">
            <h4>{{ $t('2022H1-3') }}<br> {{ $t('2022H2-3') }} </h4>
          </div>
          <p>{{ $t('2022T-3') }}</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/smartCity.svg" alt="eye icon" class="ico">
            <h4>{{ $t('2022H1-4') }}<br>{{ $t('2022H2-4') }}</h4>
          </div>
          <p>{{ $t('2022T-4') }}</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/dpdapp.svg" alt="pc icon" class="ico">
            <h4> {{ $t('2022H1-5') }} <br> {{ $t('2022H2-5') }} </h4>
          </div>
          <p>{{ $t('2022T-5') }}</p>
        </div>
      </swiper-slide>
    <!-- first slide -->
      <swiper-slide> 
        <h1 class="heading">2020</h1>
        <div class="swiper-wraper">  
          <div class="swiper-icon">
            <img src="../assets/pictures/vznik.svg" alt="done" class="ico">
            <h4> {{ $t('2020H1') }} <br> {{ $t('2020H2') }} </h4>
          </div>
          <p> {{ $t('2020T') }} </p>
        </div>
      </swiper-slide>
    <!-- second slide -->
      <swiper-slide> 
        <h1>2021</h1>
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/wifi4eu.svg" alt="people" class="ico">
            <h4>{{ $t('2021H1') }}<br> {{ $t('2021H2') }} </h4>
          </div>
          <p>{{ $t('2021T') }}</p>
        </div>  
      </swiper-slide>
    <!-- fourth slide -->
      <swiper-slide> 
        <h1>2023</h1>  
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/dpdapp.svg" alt="pc icon" class="ico">
            <h4> {{ $t('2023H1') }} <br> {{ $t('2023H2') }}</h4>
          </div>
          <p>{{ $t('2023T') }}</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/smartCity.svg" alt="eye" class="ico">
            <h4> {{ $t('2023H1-2') }} <br> {{ $t('2023H2-2') }} </h4>
          </div>
          <p>{{ $t('2023T-2') }}</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/dpdapp.svg" alt="pc icon" class="ico">
            <h4> {{ $t('2023H1-3') }} <br> {{ $t('2023H2-2') }} </h4>
          </div>
          <p>{{ $t('2023T-3') }}</p>
        </div>
      </swiper-slide>
      
  </swiper-container>
</template>

<style lang="scss">
  @import '../assets/style/base.scss';
  @import '../assets/style/colors.scss';

  // min-height: 100vh;
  .my-swiper4{
    position: relative;
    top: 190px;
    height: 80vh;
    cursor: grab;
    .swiper-slide-next,
    .swiper-slide-prev{
      @include swiper-slide;
      h1{
        @include topics;
        position: relative;
        top: 2.998vw;
        width: 80%;
      }
      .swiper-wraper{
        padding-top: 4.796vw;
        @include swiper-wraper;
        .swiper-icon{
          width: 4.796vw;
          display: flex;
          gap: 12px;
          h4{
            @include text-regular;
            font-size: 0.833vw;
          }
        }
        p{
          @include text-light;
          font-size: 1.094vw;
          text-shadow: 1px 1px 1px #000;
        }
      }
    }


    .swiper-slide-active{
    @include swiper-slide;
    h1{
      @include topics;
      position: relative;
      top: 2.998vw;
      width: 80%;
    }
    .swiper-wraper{
        width: 80%;
        margin: 0 auto;
        display: flex;
        gap: 11vw;
        padding-top: 4.796vw;
      .swiper-icon{
        width: 40px;
        display: flex;
        gap: 0.625vw;
        h4{
          @include text-regular;
          font-size: 1.9vw;
        }
      }
      p{
        @include text-light;
        font-size: 2vw;
        text-shadow: 1px 1px 1px #000;
      }
    }
  }
  .swiper-container{
    position: relative;
    top: 50px;
  }
  .ico{
    max-width: 4.083vw;
  }
}






</style>

