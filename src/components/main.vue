<script>
    import home from './sections/home.vue'
    import about from './sections/about.vue'
    import certificates from './sections/certificates.vue'
    import contact from './sections/contact.vue'
    import portfolio from './sections/portfolio.vue'
    import references from './sections/references.vue'

    export default{
        components:{
            home, about, references, portfolio, certificates, contact
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
        <contact />
    </main>
</template>