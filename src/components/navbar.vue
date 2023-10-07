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
    <!-- <p>{{  $t('test')  }}</p> -->

    <nav>
        <!-- logo / left side -->
        <img src="../assets/pictures/logo.svg" alt="logo">

        <!-- site navigation -->
        <ul>
            <li><a href="">O nás</a></li>
            <li><a href="">Referencie</a></li>
            <li><a href="">Portfólio</a></li>
            <li><a href="">Anonymný formulár</a></li>
            <li><a href="">Kontakt</a></li>
        </ul> 

        <!-- wraper for language buttons -->
        <div class="language-wraper">
            <button @click="switchLanguage('en')">EN</button>
            <button @click="switchLanguage('sk')"><img src="../assets/pictures/SK.svg" alt="Slovak language"></button>
        </div>
    </nav>
</template>

<style>
</style>