<template>
    <section id="certificates">
        <div class="certificates-wraper1">
            <!-- <h1>certifikáty</h1> -->
            <div class="certificates-wraper">
                <div class="certificate-wraper">
                    <div class="overlay">
                        <h3> {{ $t('certificate1Title') }} </h3>
                        <img src="../../assets/pictures/certificates/managmentIcon.svg" alt="managment icon">
                    </div>
                    <img src="../../assets/pictures/certificates/certificate1.webp" alt="certificate">
                </div>
                <div class="certificate-wraper">
                    <div class="overlay">
                        <h3>{{ $t('certificate2Title') }}</h3>
                        <img src="../../assets/pictures/certificates/analytics.svg" alt="analytics">
                    </div>
                    <img src="../../assets/pictures/certificates/certificate2.webp" alt="certificate">
                </div>
                <div class="certificate-wraper">
                    <div class="overlay">
                        <h3>{{ $t('certificate3Title') }}</h3>
                        <img src="../../assets/pictures/certificates/sites.svg" alt="sites">
                    </div>
                    <img src="../../assets/pictures/certificates/certificate3.webp" alt="certificate">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #certificates{
        min-height: 100vh;
        // width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('../../assets/pictures/bg10.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        .certificates-wraper1{
            text-align: center;
            .certificates-wraper{
                display: flex;
                gap: 1.458vw; //3.499rem 4k
                .certificate-wraper{
                    position: relative;
                    top: 2.604vw; // 6.25rem 4k
                    max-width: 28.802vw;  //69.063rem 4k
                    .overlay{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background-image: $overlay;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        gap: 1.771vw;  //4.25rem 4k
                        transition: .8s;
                        h3{
                            @include h3;
                            max-width: 21.667vw; //52.001rem 4k 
                        }
                        img{
                            width: 9.375vw; //22.5rem 4k
                            height: auto;
                            color: $white;
                        }
                        &:hover{
                            opacity: 0;
                        }
                    } 
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>