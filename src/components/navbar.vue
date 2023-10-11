<script>
    import dropdown from './dropdown.vue'
    export default{
        components:{
            dropdown
        },
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

        <dropdown />
        <!-- wraper for language buttons -->
        <!-- <select class="language-wraper"> -->
            <!-- <option id="option-sk" @click="switchLanguage('sk')"> -->
                <!-- <img src="../assets/pictures/SK.svg" alt="Slovak"> -->

            <!-- </option> -->
            <!-- <option id="option-en" @click="switchLanguage('en')"></option> -->
        <!-- </select> -->
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

        // .language-wraper{
        //     #option-sk{
        //         background-image: url('../assets/pictures/SK.svg');
        //         background-repeat: no-repeat;
        //         background-position: center;
        //     }
        // }
    }
</style>