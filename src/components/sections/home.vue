<script> 
    import blob from '../blob.vue'
    export default{
        components:{
            blob
        }
    }
</script>

<template>
    <section id="home">
       
        <div class="home-wraper">
            
            
            <blob />
        </div>
    </section>    
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #home{
        background-image: url('../../assets/pictures/bg12.svg');
        background-repeat: no-repeat;
        background-position: center;
        min-height: 100vh;
        max-width: 100vw;
        background-color: $bg; 
        z-index: 999;
        .home-wraper{
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        // .symbol{
        //     z-index: 1;
        // }
        // .handHome{
        //     // z-index: 2;
        //     // position: absolute;
        //     // right: 0;
        //     // bottom: 0;
        // }
    }
</style>