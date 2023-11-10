<script>
    import { ref } from 'vue';

    export default {
    setup() {
            const isMenuOpen = ref(false);

            const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
            };

            return {
                isMenuOpen,
                toggleMenu,
            };
        },
    };
</script>
<template>

</template>