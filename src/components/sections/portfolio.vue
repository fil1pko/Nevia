<template>
    <section id="portfolio">
        <div class="portfolio-wraper first">
            <article>
                <div class="heading">
                    <h1><img src="../../assets/pictures/line.svg" alt="line"> {{ $t('portfolioHeading1') }} </h1>
                    <h1>{{ $t('portfolioHeading2') }}</h1>
                </div>
                <p>{{ $t('portfolioText1') }}</p>
                <p>{{ $t('portfolioText2') }}</p>
            </article>
            <img class="hand" src="../../assets/pictures/ruka.svg" alt="Hand">
        </div>

        <div class="portfolio-wraper second">
            <!-- <img src="../../assets/pictures/hologram.png" alt="Hologram"> -->
            <img src="../../assets/pictures/hologram2.svg" alt="">
            <article>
                <div class="heading">
                    <h1><img src="../../assets/pictures/line.svg" alt="line"> {{ $t('portfolioHeading1-1') }}</h1>
                    <h1>{{ $t('portfolioHeading2-2') }}</h1>
                </div>
                <p>{{ $t('portfolioText1-1') }}</p>
                <p>{{ $t('portfolioText2-2') }}</p>
            </article>
        </div>

        <div class="button-wraper">
            <a href="">
                <h2>{{ $t('portfolioButton1') }}</h2>
                <h2>{{ $t('portfolioButton2') }}</h2>
            </a>
        </div>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #portfolio{
        background-image: url('../../assets/pictures/bg.svg');
        background-repeat: no-repeat;
        background-position: center;
        // background-size: 100vw 3067px;
        background-size: 100vw;
        background-color: $bg;
        padding-bottom: 340px;
        min-height: 220vh; 
        scroll-snap-align: start; 
        .portfolio-wraper{
            display: flex;
            align-items: center;
            padding-top: 80px;
            article{
                .heading{
                    h1{
                        @include topics;
                        color: $white;
                        line-height: 90px;
                        img{
                            height: 70px;
                            width: 17px;
                        }
                    }
                    :nth-child(even){
                        text-align: end;
                        position: relative; 
                        right: 20px;
                    }
                    // :nth-child(1){
                    //     position: relative;
                    //     // right: 27px;
                    // }
                }
                p{
                    @include text-light;
                    color: $white;
                    max-width: 600px;
                    padding-top: 20px;
                }
            }
            img{
                max-width: 400px;
            }
            .hand{
                max-width: 1200px;
                position: relative;
                z-index: 10;
            }
        }
        .first{
            width: 100%;
            justify-content: flex-end;
            position: relative;
            z-index: 20;
        }
        .second{
            width: 100%;
            justify-content: center;
            gap: 150px;
            padding-top: 100px;
        }
        .button-wraper{
            width: 450px;
            height: 130px;
            border: 3px solid $white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 170px auto 0 auto;
            a{
            color: $white;
            text-decoration: none;
            width: 100%;
            h2{
                text-transform: uppercase;
                font-family: $brandonB;
                text-align: center;
                font-size: 35px;
            }
        }
        }
    }
</style>