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
        background-image: url('../../assets/pictures/bg7.svg');
        background-repeat: no-repeat;
        background-position: center;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .about-wraper{
            text-align: center;
            h1{
                @include topics;
                padding-top: 20px;
            }
            img{
                width: 80px;
            }
            p{
                @include text-light;
                max-width: 700px;
                padding-top: 25px;
            }
        }
    }
</style>