<script> 
    // import blob from '../blob.vue'
    // export default{
    //     components:{
    //         blob
    //     }
    // }
</script>

<template>
    <section id="home">
        <div class="home-wraper">
            <!-- <blob /> -->
        </div>
    </section>    
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #home{
        min-height: 100vh;
        background-color: $bg;
        .home-wraper{
            min-height: 100vh;
            position: relative;
            .handHome{
                position: absolute;
                right: 0;
                bottom: 0;
                width: 1215px;
            }
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