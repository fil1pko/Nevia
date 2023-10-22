<script>
    import swiperr from '../swiperr.vue'
    export default{
        components:{
            swiperr
        },
    };
</script>

<template>
    <section id="references">
        <swiperr />
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';
    
    #references{
        max-width: 100vw;
        min-height: 100vh;
        background: linear-gradient(181deg, #85E1E1 -264.06%, #000 89.67%);
    }
</style>