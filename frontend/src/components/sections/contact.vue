<script>
    import emailjs from '@emailjs/browser';
    import markk from './mark.vue';

    export default {
        components: {
            markk
        },

        data() {
            return {
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10),
            userAnswer: '',
            resultMessage: '',
            };
        },
            
        methods: {
            checkAnswerAndSendEmail() {
                const correctAnswer = this.num1 + this.num2;
                if (parseInt(this.userAnswer, 10) === correctAnswer) {
                    this.resultMessage = 'correct';
                    this.sendEmail();
                } else {
                    this.resultMessage = 'failed';
                }
            },

            sendEmail() {
                emailjs.sendForm('service_8qgs90w', 'template_wjfoyod', this.$refs.form, '6pCZ6PPCkCUoDt45Q')
                .then((result) => {
                    document.getElementById('form').reset();
                })
                .catch((error) => {
                    // console.error('Error sending email:', error);
                });
            },
        },
    };
</script>

<template>
    <section id="contact">
        <div class="contact-wraper">
            <h1> {{ $t('contactTitle') }} </h1>
            <p class="head-text"> {{ $t('contactText') }} </p>
            <div class="form-wraper">
                <form id="form" ref="form" @submit.prevent="checkAnswerAndSendEmail">
                    <input type="text" name="subject" :placeholder="$t('contactSubjectPlaceholder')" required>
                    <input type="email" name="user_email" :placeholder="$t('contactEmailPlaceholder')" required>
                    <textarea name="message" :placeholder="$t('contactMessagePlaceholder')" required></textarea>

                    <p class="auth">
                        {{ $t('auth') }}
                        <input :placeholder="`${num1} + ${num2} `" v-model="userAnswer" type="text" />
                    </p>


                    <small v-if="resultMessage">{{ $t(resultMessage) }}</small>

                    <button class="button">
                        {{ $t('contactButtonText') }}
                    </button>
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

        <footer>
            <markk />   
        </footer>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #contact{
        height: 100vh;  
        display: -webkit-box;  
        display: -ms-flexbox;  
        display: flex;
        flex-direction: column;
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
            background-image: url('../../assets/pictures/bgFooterMobile.svg');
            background-size: cover;
            .contact-wraper{
                max-width: 70% !important;
                width: 71.563vw !important;
                .form-wraper{
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                            flex-direction: column;
                    form{
                        input{
                            font-size: 1.6vw !important;
                            width: 100% !important;
                            height: 25% !important;
                        }
                        textarea{
                            font-size: 1.6vw !important;
                            width: 100%;
                            height: 10vw !important;
                        }
                        button{
                            width: 10rem !important;
                            height: 2rem !important;
                            font-size: 1.6vw !important;
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
                .auth{
                        @include text-light; 
                        scale: 1 !important;
                        width: 50vw !important;
                        text-align: center;
                        input{
                            background: rgba(51, 51, 51, 0.2);
                        }
                    }
            }
        }

        @media only screen and (max-width: 700px){
            .contact-wraper{
                p{
                    display: none;
                }
                .auth{
                    display: block;
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
                            font-size: 2.5vw !important;
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
                        margin-bottom: 2rem !important;
                    }
                }
                .auth{
                    scale: 0.8 !important;
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
            .head-text{
                @include text-light;
                text-align: center;
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
                        transition: 1s;
                        &:hover{
                            opacity: 0.5;
                        }
                    }
                    .auth{
                        @include text-light; 
                        scale: 0.8;
                        width: 20.833vw;
                        text-align: center;
                        input{
                            background: rgba(51, 51, 51, 0.2);
                            width: 6.771vw !important;
                            height: 3vw !important;
                        }
                    }
                    small{
                        color: $white;
                        font-family: $barlowL;
                        text-transform: capitalize;
                        text-align: center;
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