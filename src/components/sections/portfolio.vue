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
            <img src="../../assets/pictures/hologram4.svg" alt="">
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
        background-size: 100vw;
        background-color: $bg;
        padding-bottom: 17.708vw;
        min-height: 220vh; 
        scroll-snap-align: start; 
        .portfolio-wraper{
            display: flex;
            align-items: center;
            padding-top: 4.167vw;
            article{
                .heading{
                    h1{
                        @include topics;
                        color: $white;
                        line-height: 4.688vw;
                        img{
                            height: 3.646vw;
                            width: 0.885vw;
                        }
                    }
                    :nth-child(even){
                        text-align: end;
                        position: relative; 
                        right: 1.042vw;
                    }
                }
                p{
                    @include text-light;
                    color: $white;
                    width: 31.25vw;
                    padding-top: 1.042vw;
                }
            }
            img{
                max-width: 28.646vw;
            }
            .hand{
                max-width: 62.5vw;
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
            gap: 7.813vw;
            padding-top: 5.208vw;
        }
        .button-wraper{
            width: 23.438vw;
            height: 6.771vw;
            border: 0.156vw solid $white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 8.854vw auto 0 auto;
            a{
            color: $white;
            text-decoration: none;
            width: 100%;
            h2{
                text-transform: uppercase;
                font-family: $brandonB;
                text-align: center;
                font-size: 1.823vw;
            }
        }
        }
    }

    @media only screen and (max-width: 1024px){
        #portfolio{
            padding-bottom: 0;
            min-height: auto !important;
        }
    }
    @media only screen and (max-width: 700px){
        #portfolio{
            .portfolio-wraper{
                flex-direction: column;
                article{
                    p{
                        width: 75vw !important;
                    }
                    .heading{
                        :nth-child(even){
                            text-align: center;
                        }
                    }
                }
                .second{
                    flex-direction: column-reverse;
                }
            }
        }
    }
</style>