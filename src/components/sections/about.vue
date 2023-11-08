<template>
    <section id="about">
        <div class="about-wraper">
            <img src="../../assets/pictures/symbolAbout.svg" alt="Turn on">
            <h1>{{ $t('companies') }} </h1>
            <p>
                {{ $t('companyNevia') }}
            </p>
            <p>
                {{ $t('oneOfTheKeyAspects') }}
            </p>
            <p>
                {{ $t('inAddition') }}
            </p>
        </div>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #about{
        background-image: url('../../assets/pictures/bg72.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        min-height: 100vh;
        max-width: 100vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        z-index: 999;
        @media only screen and (max-width: 1024px){
            .about-wraper{
                h1{
                    margin: 0 auto;
                }
                p{
                    width: 60% !important;
                    padding-top: 3% !important;
                }
            }
        }
        .about-wraper{
            text-align: center;
            h1{
                @include topics;
                padding-top: clamp(0.625rem,1.042vw,4.125rem); //4.125rem 4k
            }
            img{
                width: clamp(2.5rem,4.167vw,10rem); //10rem 4k
            }
            p{
                @include text-light;
                width: clamp(10rem ,36.458vw, 87.5rem); //87.5rem
                padding-top: clamp(1rem, 1.302vw, 4.375rem); //4.375rem 4k
                margin: 0 auto;
            }
        }
    }
</style>