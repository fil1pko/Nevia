<script>
    import swiperr from '../swiperr.vue'; 
    import swiperrMobile from '../swiperrMobile.vue';

    export default {
    components: {
        swiperr,
        swiperrMobile, 
    },
    data() {
        return {
        isScreenLarge: window.innerWidth > 1024,
        isScreenSmall: window.innerWidth < 1025
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreenSize);
        this.checkScreenSize(); 
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        checkScreenSize() {
        this.isScreenLarge = window.innerWidth > 1024;
        this.isScreenSmall = window.innerWidth < 1025;
        },
    },
};
</script>

<template>
    <section id="references">
        <swiperr v-if="isScreenLarge"/>
        <swiperrMobile v-if="isScreenSmall"/>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';
    
    #references{
        background-image: url('../../assets/pictures/bg82.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        max-width: 100vw;
        min-height: 100vh;
    }
</style>