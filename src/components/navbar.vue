<script>
    import dropdown from './dropdown.vue'
    export default{
        components:{
            dropdown
        },
    };
</script>

<template>
    <!-- <p style="color: aliceblue;">{{  $t('test')  }}</p> -->
    <nav>
        <!-- logo / left side -->
        <a href="#home"><img src="../assets/pictures/logo.svg" alt="logo"></a>

        <!-- site navigation -->
        <ul>
            <li><a href="#about">O nás</a></li>
            <li><a href="#references">Referencie</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#certificates">Certifikáty</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul> 

        <!-- switching language dropdown -->
        <dropdown />
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
        padding-top: 20px;
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
    }
</style>