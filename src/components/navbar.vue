<script>
    export default{
        methods: {
            switchLanguage(locale) {
                this.$i18n.locale = locale;
            }
        }
    };
</script>

<template>
    <!-- {{  $t('test')  }} -->
    <nav>
        <!-- logo / left side -->
        <a href="#home"><img src="../assets/pictures/logo.svg" alt="logo"></a>

        <!-- site navigation -->
        <ul>
            <li><a href="#about">O nás</a></li>
            <li><a href="#carousel">Referencie</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#contact">Anonymný formulár</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul> 

        <!-- wraper for language buttons -->
        <div class="language-wraper">
            <img @click="switchLanguage('sk')" src="../assets/pictures/SK.svg" alt="Slovak language">
        </div>
    </nav>
</template>



<style lang="scss">
    @import '../assets/style/base.scss';
    @import '../assets/style/colors.scss';

    nav{
        font-family: $barlowR;
        display: flex;
        gap: 415px;
        align-items: center;
        padding-top: 40px;
        ul{
            display: flex;
            list-style: none;
            gap: 26px;
            li{
                a{
                    font-size: 20px;
                    text-decoration: none;
                    color: $lightBlueHome;
                }
            }
        }

        img{
            width: 60px;
            height: auto;
        }

        .language-wraper{
            img{
                width: 40px;
                height: auto;
            }
        }
    }
</style>