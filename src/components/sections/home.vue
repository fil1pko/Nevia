<script></script>

<template>
    <section id="home">
        <div class="home-wraper">
            <img class="symbol" src="../../assets/pictures/symbolHome.svg" alt="" width="200">
            <img class="handHome" src="../../assets/pictures/kys.jpeg" alt="">
        </div>
    </section>    
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #home{
        min-height: 100vh;
        background-color: #000000;
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