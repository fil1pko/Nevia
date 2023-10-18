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
  <swiper-container class="my-swiper"
    :slides-per-view="1.5"
    :pagination="false"
    :centered-slides="true"
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
            <h4>Vznik <br> značky</h4>
          </div>
          <p>Vstúp do sveta neobmedzených možností s naším inovatívnym podnikaním. Pomáhame budovať úspešnú budúcnosť.</p>
        </div>
      </swiper-slide>
    <!-- second slide -->
      <swiper-slide> 
        <h1>2021</h1>
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/wifi4eu.svg" alt="people" class="ico">
            <h4>Wifi4EU <br> projekty</h4>
          </div>
          <p>Spolupráca na eurofondovom projekte pre vtrvorenie free wifi pre obce a mestá</p>
        </div>  
      </swiper-slide>
    <!-- third slide -->
      <swiper-slide>
        <h1>2022</h1>  
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/wifi4eu.svg" alt="people" class="ico">
            <h4>Agel <br> spolupráca</h4>
          </div>
          <p>Spolupráca so spoločnosťou agel vybudovanie reklamnej site (Slovensko)</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/wifi4eu.svg" alt="people" class="ico">
            <h4>Antik Košice <br> Spolupráca</h4>
          </div>
          <p>Spolupráca s domom sociálnych služieb Antik košice</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/dpdapp.svg" alt="pc icon" class="ico">
            <h4>DPD <br> Projekt</h4>
          </div>
          <p>Projekt DPD Trnava</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/smartCity.svg" alt="eye icon" class="ico">
            <h4>Dunajska <br> Streda</h4>
          </div>
          <p>Inteligentné hospodárstvo pre mesto Dunajská Streda</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/dpdapp.svg" alt="pc icon" class="ico">
            <h4>DPD <br> Aplikácia</h4>
          </div>
          <p>Rozšírenie Aplikácie pre spoločnosť DPD</p>
        </div>
      </swiper-slide>
    <!-- fourth slide -->
      <swiper-slide> 
        <h1>2023</h1>  
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/dpdapp.svg" alt="pc icon" class="ico">
            <h4>Agel <br> spolupráca</h4>
          </div>
          <p>Rozšírenie spolupráce reklamnej site agel do Čiech</p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/smartCity.svg" alt="eye" class="ico">
            <h4>SMART CITY <br> Holič</h4>
          </div>
          <p>Budovanie projektu Smart City Holič </p>
        </div>
        <!--  -->
        <div class="swiper-wraper">
          <div class="swiper-icon">
            <img src="../assets/pictures/dpdapp.svg" alt="pc icon" class="ico">
            <h4>Dunajska <br> streda</h4>
          </div>
          <p>Rozšírenie aplikácie pre Inteligentné odpadové hospodárstvo pre mesto Dunajská Streda</p>
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
    top: 90px;
    height: 80vh;
  }

  .swiper-slide-next,
  .swiper-slide-prev{
      h1{
        @include topics;
        position: relative;
        top: 25px;
      }
      p{
        @include text-light;
        opacity: 0;
      }
      .swiper-wraper{
        opacity: 0;
      }
  }
  .swiper-slide-prev{
    display: flex;
    flex-direction: column;
    align-items: end;
  }


  .swiper-slide-active{
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      color: $lightBlueHome;
      font-family: $brandonBlack;
      font-size: 120px;
    }
    .swiper-wraper{
      position: relative;
      top: 80px;
      display: flex;
      width: 1000px;
      gap: 100px;
      // height: 100%;
      align-items: center;
      p{
        @include text-light;
        font-size: 21px;
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

</style>

