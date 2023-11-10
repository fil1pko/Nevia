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
            <div class="certificate-wraper-mobile">
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
            <div class="certificate-wraper-mobile">
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
            <div class="certificate-wraper-mobile">
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
            <div class="certificate-wraper-mobile">
                <div class="overlay">
                    <div class="overlay-wraper">
                        <h3> {{ $t('certificate4Title') }} </h3>
                        <img src="../assets/pictures/certificates/uploadDownload.svg" alt="package icon">
                    </div>
                </div>
                <img src="../assets/pictures/certificates/certificate4.webp" alt="certificate">
            </div>  
        </swiper-slide>
      
        <!-- fifth slide -->
        <swiper-slide> 
            <div class="certificate-wraper-mobile">
                <div class="overlay">
                    <div class="overlay-wraper">
                        <h3> {{ $t('certificate5Title') }} </h3>
                        <img src="../assets/pictures/certificates/websiteHistory.svg" alt="installation icon">
                    </div>
                </div>
                <img src="../assets/pictures/certificates/certificate5.webp" alt="certificate">
            </div>  
        </swiper-slide>

        <!-- sixth slide -->
        <swiper-slide> 
            <div class="certificate-wraper-mobile">
                <div class="overlay">
                    <div class="overlay-wraper">
                        <h3> {{ $t('certificate6Title') }} </h3>
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
    padding-top: 40px;
    .swiper-slide-next,
    .swiper-slide-prev{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }   
    .swiper-slide-active{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    }
}

.certificate-wraper-mobile{
    cursor: -webkit-grab;
    cursor: grab;
    position: relative;
    top: 30%;
    width: 80%;
    text-align: center;
    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: $overlay;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-transition: .8s;
        -o-transition: .8s;
        transition: .8s;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        .overlay-wraper{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            gap: 1.771vw;  
            h3{
                @include h3;
                font-size: 3vw;
                max-width: 70%;
            }
            img{
                width: 18%; 
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