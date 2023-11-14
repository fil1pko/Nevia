<script>
    import home from './sections/home.vue'
    import about from './sections/about.vue'
    import certificates from './sections/certificates.vue'
    import contact from './sections/contact.vue'
    import portfolio from './sections/portfolio.vue'
    import references from './sections/references.vue'
    import servis from './sections/servis.vue'

    export default{
        components:{
            home, about, references, portfolio, certificates, contact, servis
        },
    };
</script>

<template>
    <main>
        <home />
        <about />
        <references />
        <portfolio />
        <certificates />
        <servis />
        <contact />
    </main>
</template>