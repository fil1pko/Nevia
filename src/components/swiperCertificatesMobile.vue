<script>
    import { register } from 'swiper/element/bundle';

    register();

    export default {
    setup() { 
        const spaceBetween = 10;
        const onProgress = (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress)
        };

        const onSlideChange = (e) => {
        console.log('slide changed')
        }

        return {
            spaceBetween,
            onProgress,
            onSlideChange,
        };
    },
    }
</script>
<template>
    <swiper-container class="my-swiper3"
        :slides-per-view="1"
        :centered-slides="true"
        :space-between=" 10"
        :loop="true"
        @progress="onProgress"
        @slidechange="onSlideChange"
    >

        <!-- first slide -->
        <swiper-slide> 
            <div class="certificate-wraper">
                <div class="overlay">
                    <div class="overlay-wraper">
                        <h3> {{ $t('certificate1Title') }} </h3>
                        <img src="../assets/pictures/certificates/managmentIcon.svg" alt="managment icon">
                    </div>
                </div>
                <img src="../assets/pictures/certificates/certificate1.webp" alt="certificate">
            </div>
        </swiper-slide>

        <!-- second slide -->
        <swiper-slide>
            <div class="certificate-wraper">
                <div class="overlay">
                    <div class="overlay-wraper">
                        <h3>{{ $t('certificate2Title') }}</h3>
                        <img src="../assets/pictures/certificates/analytics.svg" alt="analytics">
                    </div>
                </div>
                <img src="../assets/pictures/certificates/certificate2.webp" alt="certificate">
            </div>
        </swiper-slide>

        <!-- third slide -->
        <swiper-slide>
            <div class="certificate-wraper">
                <div class="overlay">
                    <div class="overlay-wraper">
                        <h3>{{ $t('certificate3Title') }}</h3>
                        <img src="../assets/pictures/certificates/sites.svg" alt="sites">
                    </div>
                </div>
                <img src="../assets/pictures/certificates/certificate3.webp" alt="certificate">
            </div>
        </swiper-slide>
        
        <!-- fourth slide -->
        <swiper-slide> 
            <div class="certificate-wraper">
                <div class="overlay">
                    <div class="overlay-wraper">
                        <h3>{{ $t('certificate3Title') }}</h3>
                        <img src="../assets/pictures/certificates/uploadDownload.svg" alt="package icon">
                    </div>
                </div>
                <img src="../assets/pictures/certificates/certificate4.webp" alt="certificate">
            </div>  
        </swiper-slide>
      
        <!-- fifth slide -->
        <swiper-slide> 
            <div class="certificate-wraper">
                <div class="overlay">
                    <div class="overlay-wraper">
                        <h3>{{ $t('certificate3Title') }}</h3>
                        <img src="../assets/pictures/certificates/websiteHistory.svg" alt="installation icon">
                    </div>
                </div>
                <img src="../assets/pictures/certificates/certificate5.webp" alt="certificate">
            </div>  
        </swiper-slide>

        <!-- sixth slide -->
        <swiper-slide> 
            <div class="certificate-wraper">
                <div class="overlay">
                    <div class="overlay-wraper">
                        <h3>{{ $t('certificate3Title') }}</h3>
                        <img src="../assets/pictures/certificates/SEO.svg" alt="settings icon">
                    </div>
                </div>
                <img src="../assets/pictures/certificates/certificate6.webp" alt="certificate">
            </div>  
        </swiper-slide>

  </swiper-container>
</template>

<style lang="scss">
      @import '../assets/style/base.scss';
  @import '../assets/style/colors.scss';


.my-swiper3 {
    width: 100%;
    height: 100%;
    .swiper-slide-next,
    .swiper-slide-prev{
        display: flex;
        justify-content: center;
        align-items: center;
    }   
    .swiper-slide-active{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.certificate-wraper{
    cursor: grab;
    position: relative;
    top: 30%; //2.604vw 6.25rem 4k
    width: 70%;  //69.063rem 4k
    text-align: center;
    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: $overlay;
        flex-direction: column;
        transition: .8s;
        .overlay-wraper{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.771vw;  //4.25rem 4k
            padding-top: 19vh;
            h3{
                @include h3;
                font-size: 19px;
                max-width: 70%; //52.001rem 4k 21.667vw 
            }
            img{
                width: 18%; //22.5rem 4k 9.375vw
                height: auto;
                color: $white;
            }
        }
        &:hover{
            opacity: 0;
        }
        &:active{
            opacity: 0;
        }
    } 
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>