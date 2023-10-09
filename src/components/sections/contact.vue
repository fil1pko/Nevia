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

                    <button>Kontaktujte nás</button>
                </div>
                <ul>
                    <li>Mojš 139, 010 01 Mojš</li>
                    <li><a href="tel:+421 940 395 009">+421 940 395 009</a></li>
                    <li><a href="mailto:info@nevia.eu? subject=subject text">info@nevia.eu</a></li>
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
            }
            .form-wraper{
                display: flex;
                .left-side{
                    display: flex;
                    flex-direction: column;
                    input{
                        background-color: $greyBG;
                        border: none;
                        outline: none;
                    }
                    textarea{
                        background-color: $greyBG;
                        border: none;
                        outline: none;
                        resize: none;
                    }
                }
                ul{
                    text-align: start;
                    list-style: none;
                }
            }
        }
    }
</style>