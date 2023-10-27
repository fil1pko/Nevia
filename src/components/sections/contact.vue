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
                    <li>Nevia, SE</li>
                    <li>IČO: 52710050</li>
                    <li>IČ DPH: SK2121131089</li>
                    <li><img src="../../assets/pictures/linkedin.svg" alt="Linkedin icon"><a class="no-underline" href="">Nevia, SE</a></li>
                </ul>

                <ul>
                    <li><img src="../../assets/pictures/location.svg" alt="Location icon"> Mojš 139, 010 01 Mojš</li>
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