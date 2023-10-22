<template>
    <section id="certificates">
        <div class="certificates-wraper1">
            <!-- <h1>certifikáty</h1> -->
            <div class="certificates-wraper">
                <div class="certificate-wraper">
                    <div class="overlay">
                        <h3>CERTIFIKAČNÝ ORGÁN PRE SYSTÉMY <br>
                        MANAŽÉRSTVA CEMS, S.R.O.</h3>
                        <img src="../../assets/pictures/managmentIcon.svg" alt="managment icon">
                    </div>
                    <img src="../../assets/pictures/certificate1.png" alt="certificate">
                </div>
                <div class="certificate-wraper">
                    <div class="overlay">
                        <h3>cems, s.r.o., the certifying authority for managment system</h3>
                        <img src="../../assets/pictures/analytics.svg" alt="analytics">
                    </div>
                    <img src="../../assets/pictures/certificate2.png" alt="certificate">
                </div>
                <div class="certificate-wraper">
                    <div class="overlay">
                        <h3>certifikačný orgán pre systémy manažérstva cems, s.r.o.</h3>
                        <img src="../../assets/pictures/sites.svg" alt="sites">
                    </div>
                    <img src="../../assets/pictures/certificate3.png" alt="certificate">
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
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('../../assets/pictures/bg9.svg');
        background-repeat: no-repeat;
        background-position: center;
        .certificates-wraper1{
            text-align: center;
            .certificates-wraper{
                display: flex;
                gap: 28px;
                .certificate-wraper{
                    position: relative;
                    top: 50px;
                    max-width: 553px;
                    .overlay{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background-image: $overlay;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        gap: 34px;
                        transition: .8s;
                        h3{
                            @include h3;
                            max-width: 416px;
                        }
                        img{
                            width: 180px;
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