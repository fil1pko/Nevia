<script>
import Swiper from '../swiperCertificate.vue    '; // Import your Swiper component

export default {
  components: {
    Swiper,
    SwiperMobile: () => import('../swiperCertificatesMobile.vue'), // Import your mobile version of Swiper
  },
  data() {
    return {
      isScreenLarge: window.innerWidth > 1024, // Check if the screen is larger than 1024px
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize(); // Initial call
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isScreenLarge = window.innerWidth > 1024;
    },
  },
};
</script>

<template>
    <section id="certificates">
        <swiper v-if="isScreenLarge" />
        <swiperMobile />
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #certificates{
        min-height: 100vh;
        // width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('../../assets/pictures/bg10.svg');
        @media only screen and (max-width: 1024px){
            background-image: url('../../assets/pictures/bg10mobile.svg');
        }
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        .certificates-wraper1{
            text-align: center;
            .certificates-wraper{
                display: flex;
                gap: 1.458vw; //3.499rem 4k
                // max-width: 99%;
                overflow: scroll;
            }
        }
    }
</style>