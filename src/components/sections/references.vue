<script>
    import swiper from '../swiper.vue'
    import { register } from 'swiper/element/bundle'
    register()
    export default{
        components:{
            swiper
        },
    };
</script>

<template>
    <section id="references">
        <swiper />
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';
    
    #references{
        max-width: 100vw;
    }
</style>