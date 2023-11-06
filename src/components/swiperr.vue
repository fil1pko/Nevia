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
  <swiper-container class="my-swiper swiper-container"
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
  .my-swiper{
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
        top: 25px;
        width: 80%;
      }
      .swiper-wraper{
        @include swiper-wraper;
        .swiper-icon{
          width: 40px;
          display: flex;
          gap: 12px;
          h4{
            @include text-regular;
            font-size: 16px;
          }
        }
        p{
          @include text-light;
          font-size: 21px;
          text-shadow: 1px 1px 1px #000;
        }
      }
    }
    .swiper-slide-active{
    @include swiper-slide;
    h1{
      @include topics;
      position: relative;
      top: 25px;
      width: 80%;
    }
    .swiper-wraper{
      @include swiper-wraper;
      .swiper-icon{
        width: 40px;
        display: flex;
        gap: 12px;
        h4{
          @include text-regular;
          font-size: 16px;
        }
      }
      p{
        @include text-light;
        font-size: 21px;
        text-shadow: 1px 1px 1px #000;
      }
    }
  }
  .swiper-container{
    position: relative;
    top: 50px;
  }
  .ico{
    max-width: 40px;
  }
  .swiper-button-prev{
    widows: 40px;
    height: 40px;
    background-color: #000;
  }
}






</style>

