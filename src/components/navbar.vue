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
    <button @click="switchLanguage('en')">EN</button>
    <button @click="switchLanguage('sk')">SK</button>

    <p>{{  $t('test')  }}</p>
</template>

<style>
</style>