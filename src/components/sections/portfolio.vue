<template>
    <section id="portfolio">
        <div class="portfolio-wraper first">
            <article>
                <div class="heading">
                    <h1><img src="../../assets/pictures/line.svg" alt="line"> {{ $t('portfolioHeading1') }} </h1>
                    <h1>{{ $t('portfolioHeading2') }}</h1>
                </div>
                <p>{{ $t('portfolioText1') }} </p>
                <p class="delete">{{ $t('portfolioText2') }}</p>
            </article>
            <img class="hand" src="../../assets/pictures/ruka.svg" alt="Hand">
        </div>

        <div class="portfolio-wraper second">
            <img class="hologram" src="../../assets/pictures/hologram4.svg" alt="">
            <article>
                <div class="heading">
                    <h1><img src="../../assets/pictures/line.svg" alt="line"> {{ $t('portfolioHeading1-1') }}</h1>
                    <h1>{{ $t('portfolioHeading2-2') }}</h1>
                </div>
                <p>{{ $t('portfolioText1-1') }} <a href="https://flexihospital.eu/" target="_blank">{{ $t('portfolioLink') }}</a></p>
                <p class="delete">{{ $t('portfolioText2-2') }}</p>
            </article>
        </div>

        <div class="button-wraper">
            <a href="#">
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
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
                    a{
                        color: $white;
                    }
                }
            }
            img{
                width: 28.646vw;
            }
            .hand{
                width: 52.5vw;
                position: relative;
                z-index: 10;
            }
        }
        .first{
            width: 100%;
            -webkit-box-pack: end;
                -ms-flex-pack: end;
                    justify-content: flex-end;
            position: relative;
            z-index: 20;
        }
        .second{
            width: 100%;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            gap: 7.813vw;
            padding-top: 5.208vw;
        }
        .button-wraper{
            width: 23.438vw;
            height: 6.771vw;
            border: 0.156vw solid $white;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
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
            padding-top: 20%;
            min-height: auto !important;
            // background-image: none;
            background-image: url('../../assets/pictures/bg10mobile.svg');
            background-size: cover;
        }
    }
    @media only screen and (max-width: 700px){
        #portfolio{
            .delete{
                display: none;
            }
            .portfolio-wraper{
                margin: 10.667vw 0px 10.667vw 0px;
                article{
                    p{
                        width: 75vw !important;
                    }
                    .heading{
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        gap: 5vw;
                        h1{
                            padding-bottom: 1rem;
                            img{ 
                                display: none;
                            }
                        }
                    }
                }
                .hand{
                    position: relative;
                    left: 12%;
                    width: 75vw !important;
                }
            }
        }
        .second{
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
                -ms-flex-direction: column-reverse;
                    flex-direction: column-reverse;
        }
        .first{
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
        }
        .hologram{
            width: 52.5vw !important;
            margin-bottom: 7vw;
        }
        .button-wraper{
            display: none !important;
        }
    }
</style>