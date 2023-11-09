<script>
    import emailjs from '@emailjs/browser';

    export default {
        methods: {
            sendEmail() {
                emailjs.sendForm('service_8qgs90w', 'template_wjfoyod', this.$refs.form, '6pCZ6PPCkCUoDt45Q')
                    .then((result) => {
                        console.log('SUCCESS!', result.text);
                    }, (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
            }
        }
    }
</script>

<template>
    <section id="contact">
        <div class="contact-wraper">
            <h1> {{ $t('contactTitle') }} </h1>
            <p> {{ $t('contactText') }} </p>
            <div class="form-wraper">
                <form ref="form" @submit.prevent="sendEmail">
                    <input type="text" name="subject" :placeholder="$t('contactSubjectPlaceholder')" required>
                    <input type="email" name="user_email" :placeholder="$t('contactEmailPlaceholder')" required>
                    <textarea name="message" :placeholder="$t('contactMessagePlaceholder')" required></textarea>

                    <button class="button" type="submit"> {{ $t('contactButtonText') }} </button>
                </form>

                <div>
                    <ul>
                        <li>Nevia, SE</li>
                        <li>IČO: 52710050</li>
                        <li>IČ DPH: SK2121131089</li>
                        <li><img src="../../assets/pictures/linkedin.svg" alt="Linkedin icon"><a class="no-underline" href="#">Nevia, SE</a></li>
                    </ul>

                    <ul>
                        <li><img src="../../assets/pictures/location.svg" alt="Location icon"><a class="no-underline" href="https://www.google.sk/maps/place/Moj%C5%A1+139,+010+01+Moj%C5%A1/@49.202115,18.8183674,17z/data=!3m1!4b1!4m6!3m5!1s0x4714598ffb527e2f:0x295e3de0924439bb!8m2!3d49.2021115!4d18.8209423!16s%2Fg%2F11c4gm_99_?entry=ttu" target="_blank">Mojš 139, 010 01 Mojš</a></li>
                        <li><img src="../../assets/pictures/phone.svg" alt="Phone icon"> <a class="no-underline" href="tel:+421 940 395 009">+421 940 395 009</a></li>
                        <li><img src="../../assets/pictures/mail.svg" alt="Email icon"> <a href="mailto:info@nevia.eu? subject=subject text">info@nevia.eu</a></li>
                        <li><img src="../../assets/pictures/instagram.svg" alt="Instagram icon"><a class="no-underline" href="#">Nevia, SE</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #contact{
        min-height: 100vh;  
        display: -webkit-box;  
        display: -ms-flexbox;  
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
                align-items: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        background-image: url('../../assets/pictures/bg11.svg');
        // portrait 
        @media only screen and (max-width: 1024px){
            background-image: url('../../assets/pictures/bg11mobile.svg');
            background-size: cover;
            .contact-wraper{
                max-width: 70% !important;
                .form-wraper{
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                            flex-direction: column;
                    form{
                        input{
                            width: 100% !important;
                        }
                        textarea{
                            width: 100%;
                        }
                    }
                    div{
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        gap: 30% !important;
                    }
                    li{
                        margin-bottom: 20% !important;
                    }
                }
            }
        }
        @media only screen and (max-width: 700px){
            .contact-wraper{
                p{
                    display: none;
                }
                .form-wraper{
                    form{
                        input{
                            height: 8vw !important;
                            font-size: 3vw !important;
                        }
                        textarea{
                            height: 15vw !important;
                            font-size: 3vw !important;
                        }
                        button{
                            font-size: 2vw !important;
                        }
                    }
                    div{
                        padding-top: 20px;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                            -ms-flex-direction: column;
                                flex-direction: column;
                    }
                    li{
                        padding-bottom: 2vw;
                    }
                }
            }
        }
        .contact-wraper{
            text-align: center;
            width: 51.563vw;
            max-width: 123.75rem;
            h1{
                @include topics;
            }
            p{
                @include text-light;
                text-align: center;
                margin-top: 1.563vw;
            }
            .form-wraper{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                gap: 3.125vw;
                margin-top: 4.167vw;
                -ms-flex-pack: distribute;
                    justify-content: space-around;
                div{
                    gap: 3.125vw;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                }
                form{
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                            flex-direction: column;
                    gap: 0.521vw;
                    input{
                        background: $inputBlack;
                        border: none;
                        outline: none;
                        font-family: $barlowR;
                        font-size: 0.885vw;
                        height: 2.604vw;
                        width: 20.833vw;
                        padding: 0.521vw;
                        color: $white;
                        &::-webkit-input-placeholder{
                            color: $white;
                        }
                        &::-moz-placeholder{
                            color: $white;
                        }
                        &:-ms-input-placeholder{
                            color: $white;
                        }
                        &::-ms-input-placeholder{
                            color: $white;
                        }
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
                        font-size: 0.885vw;
                        height: 5.208vw;
                        padding: 0.521vw;
                        color: $white;
                        &::-webkit-input-placeholder{
                            color: $white;
                        }
                        &::-moz-placeholder{
                            color: $white;
                        }
                        &:-ms-input-placeholder{
                            color: $white;
                        }
                        &::-ms-input-placeholder{
                            color: $white;
                        }
                        &::placeholder{
                            color: $white;
                        }
                    }                    
                    button{
                        @include buttons;
                        width: 9.896vw;
                        min-width: 7rem;
                        height: 2.083vw;
                        min-height: 1.3rem;
                        font-size: 0.885vw;
                        margin: 0.521vw auto;
                        cursor: pointer;
                    }
                }
                ul{
                    margin-top: 0.521vw;
                    text-align: start;
                    list-style: none;
                    li{
                        height: 2.083vw; 
                        @include text-regular;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        gap: 1.042vw;
                        margin-bottom: 1.823vw;
                        -webkit-box-align: center;
                            -ms-flex-align: center;
                                align-items: center;
                        img{
                            width: 1.823vw; 
                            min-width: 1rem;
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