<script></script>

<template>
    <section id="contact">
        <div class="contact-wraper">
            <h1>kontakt</h1>
            <p>Máš záujem stať sa súčasťou nášho tímu? Ak áno, neváhaj nás kontaktovať! Môžeš nás kontaktovať pomocou formulára. Tešíme sa na našu spoluprácu!</p>
            <div class="form-wraper">
                <div class="left-side">
                    <input type="text" name="Predmet" placeholder="Predmet správy" required>
                    <input type="email" name="Email" placeholder="Váš e-mail" required>
                    <textarea name="Text" placeholder="Text správy" required></textarea>

                    <button>Kontaktujte nás !</button>
                </div>
                <ul>
                    <li><img src="../../assets/pictures/location.svg" alt="Location icon"> Mojš 139, 010 01 Mojš</li>
                    <li><img src="../../assets/pictures/phone.svg" alt="Phone icon"> <a class="no-underline" href="tel:+421 940 395 009">+421 940 395 009</a></li>
                    <li><img src="../../assets/pictures/mail.svg" alt="Email icon"> <a href="mailto:info@nevia.eu? subject=subject text">info@nevia.eu</a></li>
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
        .contact-wraper{
            text-align: center;
            max-width: 790px;
            h1{
                @include topics;
            }
            p{
                @include text-light;
                text-align: start;
                margin-top: 30px;
            }
            .form-wraper{
                display: flex;
                gap: 90px;
                margin-top: 80px;
                // align-items: center;
                .left-side{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    input{
                        background-color: $greyBG;
                        border: none;
                        outline: none;
                        font-family: $barlowR;
                        font-size: 17px;
                        height: 50px;
                        width: 300px;
                        padding: 10px;
                        color: $lighter;
                        &::placeholder{
                            color: $inputGrey;
                        }
                    }
                    textarea{
                        background-color: $greyBG;
                        border: none;
                        outline: none;
                        resize: none;
                        font-family: $barlowR;
                        font-size: 17px;
                        height: 100px;
                        padding: 10px;
                        color: $lighter;
                        &::placeholder{
                            color: $inputGrey;
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
                        @include text-regular;
                        display: flex;
                        gap: 40px;
                        margin-bottom: 45px;
                        img{
                            width: 35px;
                        }
                        .no-underline{
                            text-decoration: none;
                        }
                        a{
                            color: $lighter;
                        }   
                    }
                }
            }
        }
    }
</style>