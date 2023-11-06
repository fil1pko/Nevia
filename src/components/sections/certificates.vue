<script>
    import swiper from '../swiperCertificate.vue'
    export default{
        components:{
            swiper
        },
    };
</script>

<template>
    <section id="certificates">
        <swiper />
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