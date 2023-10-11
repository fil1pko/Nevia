<script></script>

<template>
    <section id="portfolio">
        <div class="portfolio-wraper first">
            <article>
                <div class="heading">
                    <h1><img src="../../assets/pictures/line.svg" alt="line"> flexi</h1>
                    <h1 style="position: relative; right: 110px;">media</h1>
                </div>
                <p>Náš tím odborníkov s nadšením  pomáha firmám firmám, ako je tá vaša, prispôsobovať ich posolstvo a rozširovať svoju značku prostrednictvom rôznych digitálnych a tradičných médií. viac</p>
                <p>Fleximedia verí v účinnosť reklamy a jej schopnosť zvýšiť viditeľnosť a ziskovosť značky. Preto sa vždy snažíme ponúknuť najlepšie reklamné riešenia, ktoré zaručujú maximálny úspech pre našich klientov. Ak hľadáte spoločnosť, ktorá vám pomôže dosiahnuť vaše ciele a zvýšiť viditeľnosť vašej značky, neváhajte kontaktovať Fleximedia. Sme pripravení pomôcť vám dosiahnuť vaše ciele a úspechy v oblasti reklamy.</p>
            </article>
            <img class="hand" src="../../assets/pictures/ruka.svg" alt="Hand">
        </div>

        <div class="portfolio-wraper second">
            <img src="../../assets/pictures/hologram.png" alt="Hologram">
            <article>
                <div class="heading">
                    <h1><img src="../../assets/pictures/line.svg" alt="line"> flexi</h1>
                    <h1>hospital</h1>
                </div>
                <p>Naša značka prináša revolučné riešenia a služby, ktoré transformujú starostlivosťv o pacientov.</p>
                <p>Pod našou značkou FlexiHospital sa nachádza množstvo produktov a služieb, ktoré pomáhajú nemocniciam zlepšiť komunikáciu s pacientmi, zvýšiť efektivitu a zlepšiť celkovú skúsenosť pacientov. Našou hlavnou prioritou je vytvárať riešenia, ktoré sa dokážu prispôsobiť individuálnym potrebám každej nemocnice a jej pacientov.</p>
            </article>
        </div>

        <div class="button-wraper">
            <a href="">
                <h2>máte podozrenie</h2>
                <h2> z korupcie?</h2>
            </a>
        </div>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #portfolio{
        background-image: url('../../assets/pictures/bg.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw 3067px;
        background-color: $bg;
        padding-bottom: 340px;
        .portfolio-wraper{
            display: flex;
            align-items: center;
            padding-top: 100px;
            article{
                .heading{
                    h1{
                        @include topics;
                        color: $white;
                        line-height: 90px;
                        img{
                            height: 70px;
                            width: 17px;
                        }
                    }
                    :nth-child(even){
                        text-align: end;
                        position: relative; 
                        right: 20px;
                    }
    
                }
                p{
                    @include text-light;
                    color: $white;
                    max-width: 600px;
                    padding-top: 20px;
                }
            }
            img{
                max-width: 400px;
            }
            .hand{
                max-width: 1200px;
            }
        }
        .first{
            width: 100%;
            justify-content: flex-end;
        }
        .second{
            width: 100%;
            justify-content: center;
            gap: 150px;
            padding-top: 100px;
        }
        .button-wraper{
            width: 450px;
            height: 130px;
            border: 3px solid $white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 170px auto 0 auto;
            a{
            color: $white;
            text-decoration: none;
            width: 100%;
            h2{
                text-transform: uppercase;
                font-family: $brandonB;
                text-align: center;
                font-size: 35px;
            }
        }
        }
    }
</style>