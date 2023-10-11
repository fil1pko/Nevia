<script></script>

<template>
    <section id="portfolio">
        <div class="portfolio-wraper first">
            <article>
                <h1>flexi</h1>
                <h1>media</h1>
                <p>Náš tím odborníkov s nadšením  pomáha firmám firmám, ako je tá vaša, prispôsobovať ich posolstvo a rozširovať svoju značku prostrednictvom rôznych digitálnych a tradičných médií. viac</p>
                <p>Fleximedia verí v účinnosť reklamy a jej schopnosť zvýšiť viditeľnosť a ziskovosť značky. Preto sa vždy snažíme ponúknuť najlepšie reklamné riešenia, ktoré zaručujú maximálny úspech pre našich klientov. Ak hľadáte spoločnosť, ktorá vám pomôže dosiahnuť vaše ciele a zvýšiť viditeľnosť vašej značky, neváhajte kontaktovať Fleximedia. Sme pripravení pomôcť vám dosiahnuť vaše ciele a úspechy v oblasti reklamy.</p>
            </article>
            <img class="hand" src="../../assets/pictures/ruka.svg" alt="Hand">
        </div>

        <div class="portfolio-wraper second">
            <img src="../../assets/pictures/hologram.png" alt="Hologram">
            <article>
                <h1>flexi</h1>
                <h1>hospital</h1>
                <p>Naša značka prináša revolučné riešenia a služby, ktoré transformujú starostlivosťv o pacientov.</p>
                <p>Pod našou značkou FlexiHospital sa nachádza množstvo produktov a služieb, ktoré pomáhajú nemocniciam zlepšiť komunikáciu s pacientmi, zvýšiť efektivitu a zlepšiť celkovú skúsenosť pacientov. Našou hlavnou prioritou je vytvárať riešenia, ktoré sa dokážu prispôsobiť individuálnym potrebám každej nemocnice a jej pacientov.</p>
            </article>
        </div>

        <a href="">
            <h2>máte podozrenie</h2>
            <h2>z korupcie?</h2>
        </a>
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
        .portfolio-wraper{
            display: flex;
            align-items: center;
            padding-top: 120px;
            article{
                h1{
                    @include topics;
                    color: $white;
                    line-height: 100px;
                }
                p{
                    @include text-light;
                    color: $white;
                    max-width: 650px;
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

        a{
            color: $white;
            text-decoration: none;
            h2{
                text-transform: uppercase;
            }
        }
    }
</style>