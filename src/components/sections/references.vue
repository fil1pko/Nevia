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
    }
</style>