<script>
    import emailjs from '@emailjs/browser';

    export default {
        methods: {
            sendEmail() {
                emailjs.sendForm('service_8qgs90w', 'template_2d151yr', this.$refs.form2, '6pCZ6PPCkCUoDt45Q')
                //     .then((result) => {
                //         // console.log('SUCCESS!', result.text);
                //     }, (error) => {
                //         // console.log('FAILED...', error.text);
                //     }
                // );
            }
        }
    }
</script>
<template>
    <section id="servis">
        <div class="servis-wraper">
            <!-- right side -->
            <article>
                <h1>Servis</h1>
                <p>Ak sa vyskytne nejaký problém alebo máte otázky, kontaktujte nás pomocou e-mailu. Radi vám pomôžeme a snažíme sa čo najlepšie riešiť všetky vaše požiadavky a otázky. Ďakujeme vám za spoluprácu a tešíme sa na to, že vám môžeme poskytnúť potrebnú pomoc.</p>
            </article>

            <!-- left side -->
            <form ref="form2" @submit.prevent="sendEmail">
                <input type="text" name="name" :placeholder="$t('servisName')" required>
                <input type="text" name="location" :placeholder="$t('servisLocation')" required>
                <input type="email" name="user_mail2" :placeholder="$t('contactEmailPlaceholder')" required>
                <textarea name="message2" :placeholder="$t('contactMessagePlaceholder')" required></textarea>

                <button class="button" type="submit" value="Send">Odoslať</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #servis{
        min-height: 100vh;
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
        background-image: url('../../assets/pictures/bg10.svg');


        @media only screen and (max-width: 1024px){
            background-image: url('../../assets/pictures/bg10mobile.svg');
            background-size: cover;
            .servis-wraper{
                max-width: 70% !important;
                width: 71.563vw !important;
                p{
                    @include text-light;
                    padding-top: clamp(1rem, 1.302vw, 4.375rem); 
                    padding-bottom: 3%;
                    margin: 0 auto;
                }
                form{
                    input{
                        font-size: 1.6vw !important;
                        width: 100% !important;
                        height: 25% !important;
                    }
                    textarea{
                        font-size: 1.6vw !important;
                        width: 100% !important;
                        height: 10vw !important;
                    }
                    button{
                        width: 10rem !important;
                        height: 2rem !important;
                        font-size: 1.6vw !important;
                    }
                }
            }
        }
        @media only screen and (max-width: 700px){
            .servis-wraper{
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
            }
        }
        .servis-wraper{
            width: 51.563vw;
            max-width: 123.75rem;
            text-align: center;
            article{
                h1{
                    @include topics;
                }
                p{
                    text-align: center !important;
                    @include text-light;
                }
            }
            form{
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
                gap: 0.521vw;
                margin: 0 auto;
                padding-top: 3vw;
                input{
                    background: $inputBlack2;
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
                    background-color: $inputBlack2;
                    border: none;
                    outline: none;
                    resize: none;
                    font-family: $barlowR;
                    font-size: 0.885vw;
                    width: 20.833vw;
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
                    width: 9.096vw;
                    min-width: 7rem;
                    height: 1.8vw;
                    min-height: 1.3rem;
                    font-size: 0.885vw;
                    margin: 0.521vw auto;
                    cursor: pointer;
                    -webkit-transition: 1s;
                    -o-transition: 1s;
                    transition: 1s;
                    &:hover{
                        opacity: 0.5;
                    }
                }
            }
        }
    
    }
</style>