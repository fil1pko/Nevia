<template>
    <section id="contact">
        <div class="contact-wraper">
            <h1> {{ $t('contactTitle') }} </h1>
            <p> {{ $t('contactText') }} </p>
            <div class="form-wraper">
                <div class="left-side">
                    <input type="text" name="Predmet" :placeholder="$t('contactSubjectPlaceholder')" required>
                    <input type="email" name="Email" :placeholder="$t('contactEmailPlaceholder')" required>
                    <textarea name="Text" :placeholder="$t('contactMessagePlaceholder')" required></textarea>

                    <button>{{ $t('contactButtonText') }}</button>
                </div>

                <ul>
                    <li>Nevia, SE</li>
                    <li>IČO: 52710050</li>
                    <li>IČ DPH: SK2121131089</li>
                    <li><img src="../../assets/pictures/linkedin.svg" alt="Linkedin icon"><a class="no-underline" href="">Nevia, SE</a></li>
                </ul>

                <ul>
                    <li><img src="../../assets/pictures/location.svg" alt="Location icon"><a class="no-underline" href="https://www.google.sk/maps/place/Moj%C5%A1+139,+010+01+Moj%C5%A1/@49.202115,18.8183674,17z/data=!3m1!4b1!4m6!3m5!1s0x4714598ffb527e2f:0x295e3de0924439bb!8m2!3d49.2021115!4d18.8209423!16s%2Fg%2F11c4gm_99_?entry=ttu" target="_blank">Mojš 139, 010 01 Mojš</a></li>
                    <li><img src="../../assets/pictures/phone.svg" alt="Phone icon"> <a class="no-underline" href="tel:+421 940 395 009">+421 940 395 009</a></li>
                    <li><img src="../../assets/pictures/mail.svg" alt="Email icon"> <a href="mailto:info@nevia.eu? subject=subject text">info@nevia.eu</a></li>
                    <li><img src="../../assets/pictures/instagram.svg" alt="Instagram icon"><a class="no-underline" href="">Nevia, SE</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #contact{
        min-height: 100vh;  
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('../../assets/pictures/bg11.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        .contact-wraper{
            text-align: center;
            max-width: 990px;
            h1{
                @include topics;
            }
            p{
                @include text-light;
                text-align: center;
                margin-top: 30px;
            }
            .form-wraper{
                display: flex;
                gap: 60px;
                margin-top: 80px;
                justify-content: space-around;
                // align-items: center;
                .left-side{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    input{
                        background: $inputBlack;
                        border: none;
                        outline: none;
                        font-family: $barlowR;
                        font-size: 17px;
                        height: 50px;
                        width: 400px;
                        padding: 10px;
                        color: $white;
                        &::placeholder{
                            color: $white;
                        }
                    }
                    textarea{
                        background-color: $inputBlack;
                        border: none;
                        outline: none;
                        resize: none;
                        font-family: $barlowR;
                        font-size: 17px;
                        height: 100px;
                        padding: 10px;
                        color: $white;
                        &::placeholder{
                            color: $white;
                        }
                    }                    
                    button{
                        @include buttons;
                        width: 190px;
                        height: 40px;
                        font-size: 17px;
                        margin: 10px auto;
                        cursor: pointer;
                    }
                }
                ul{
                    margin-top: 10px;
                    text-align: start;
                    list-style: none;
                    li{
                        height: 40px; 
                        @include text-regular;
                        display: flex;
                        gap: 20px;
                        margin-bottom: 35px;
                        align-items: center;
                        img{
                            width: 35px;
                            color: $icons;
                        }
                        .no-underline{
                            text-decoration: none;
                        }
                        a{
                            color: $white;
                        }   
                    }
                }
            }
        }
    }
</style>