<template>
    <div class="mark-wraper">
        <small>© 2023 made by <a href="https://github.com/fil1pko">RU3Y</a> All Rights Reserved</small>
    </div>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';
    .mark-wraper{
        position: relative;
        top: 5.25vw;
        height: auto;
        small{
            font-family: $barlowL;
            color: $white;
            font-size: 0.8vw;
            a{
                font-weight: bold;
                color: $white;
                text-decoration: none;
            }
        }
        @media only screen and (max-width: 1024px){
            top: 28vw;
            small{
                font-size: 1.3vw !important;
            }
        }
        @media only screen and (max-width: 700px){
            top: 0;
            small{
                font-size: 2.8vw !important;
            }
        }
    }
</style>