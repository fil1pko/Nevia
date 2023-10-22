<template>
    <section id="about">
        <div class="about-wraper">
            <img src="../../assets/pictures/symbolAbout.svg" alt="Turn on">
            <h1>spoločnosti</h1>
            <p>Spoločnosť Nevia sa zaoberá spojením sveta reklám a inteligentných riešení pre nemocnice s cieľom zlepšiť kvalitu zdravotnej starostlivosti a zvýšiť povedomie o zdraví. Tento cieľ je dosahovaný pomocou najnovších technológií a kreatívnych riešení, ktoré pomáhajú zlepšiť a zefektívniť komunikáciu medzi pacientmi, nemocnicami a lekármi.  </p>

            <p>Jedným z hlavných aspektov, na ktorom sa spoločnosť Nevia zameriava, je využitie reklamných kampaní na zvýšenie povedomia o dôležitosti zdravia a prevencie chorôb. Tento prístup môže pomôcť ľuďom získať lepšie informácie o zdravotných témach a uvedomiť si, ako sa môžu postarať o svoje zdravie.</p>

            <p>Okrem toho spoločnosť Nevia poskytuje aj inteligentné riešenia pre nemocnice, ktoré pomáhajú zlepšiť <br>
            komunikáciu a koordináciu medzi zdravotníckymi pracovníkmi, zefektívniť procesy v nemocniciach a zlepšiť kvalitu zdravotnej starostlivosti pre pacientov. Tieto riešenia môžu zahŕňať napríklad inteligentné informačné systémy pre pacientov, ktoré im umožňujú sledovať ich zdravotný stav a komunikovať s lekármi online, alebo riešenia pre zlepšenie logistiky a plánovania v nemocniciach.</p>
            <!-- <p color="white"> {{ $t('test') }} </p> -->
        </div>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #about{
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(0deg, #85E1E1 -264.06%, #000 89.67%);
        .about-wraper{
            text-align: center;
            h1{
                @include topics;
                padding-top: 20px;
                // margin-bottom: 20px;
            }
            img{
                width: 80px;
            }
            p{
                @include text-light;
                max-width: 700px;
                padding-top: 25px;
            }
        }
    }
</style>