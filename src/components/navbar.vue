<script>
    import dropdown from './dropdown.vue'
    export default{
        components:{
            dropdown
        },
        data(){
            return{
                activeSection: 'about',
                // isClassAdded: false,
                offset: 600
            };
        },
        methods: {
            scrollToSection(sectionId) {
                const element = document.getElementById(sectionId);
                if(element) {
                    element.scrollIntoView( {behavior: 'smooth'});
                }
            },
            handleScroll() {
                const sections = [ 'about', 'references', 'portfolio', 'certificates', 'contact' ];
                const offset = this.offset;

                for (const sectionId of sections) {
                    const target = document.getElementById(sectionId);
                    if (target) {
                    const rect = target.getBoundingClientRect();
                    if (rect.top <= offset && rect.bottom >= offset) {
                        this.activeSection = sectionId;
                        break;
                        }
                    }
                }
            }
        },
        watch: {
            '$vuetify.breakpoint.width'(newWidth) {
                if (newWidth < 660) {
                    this.offset = 300; 
                } else {
                    this.offset = 600; 
                }
            },
            '$data.offset'(newOffset) {
                if (window.innerWidth < 660) {
                    this.offset = 90;
                } else {
                    this.offset = newOffset;
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
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
            <li><a @click="scrollToSection('about')" :class="{ 'navLink active': activeSection === 'about' }" href="#about">O nás</a></li>
            <li><a @click="scrollToSection('references')" :class="{ 'navLink active': activeSection === 'references'}" href="#references">Referencie</a></li>
            <li><a @click="scrollToSection('portfolio')" :class="{ 'navLink active': activeSection === 'portfolio'}" href="#portfolio">Portfólio</a></li>
            <li><a @click="scrollToSection('certificates')" :class="{ 'navLink active': activeSection === 'certificates'}" href="#certificates">Certifikáty</a></li>
            <li><a @click="scrollToSection('contact')" :class="{ 'navLink active': activeSection === 'contact'}" href="#contact">Kontakt</a></li>
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