<script>
import dropdown from './dropdown.vue';

export default {
  components: {
    dropdown
  },
  data() {
    return {
      sections: [
        { id: 'home', label: 'Domov' },
        { id: 'about', label: 'O nás' },
        { id: 'references', label: 'Referencie' },
        { id: 'portfolio', label: 'Portfólio' },
        { id: 'certificates', label: 'Certifikáty' },
        { id: 'contact', label: 'Kontakt' }
      ],
      activeSection: 'home'
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleScroll() {
      const scrollPosition = window.scrollY + 200; // Adjust for offset
      this.sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          this.activeSection = section.id;
        }
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<template>
    <nav class="navigation">
        <a><img src="../assets/pictures/logo.svg" alt="logo"></a>
        <ul>
            <li v-for="section in sections" :key="section.id">
                <a 
                  :href="'#' + section.id" 
                  @click.prevent="scrollToSection(section.id)"
                  :class="{ 'active': activeSection === section.id }"
                >
                  {{ section.label }}
                </a>
            </li>
        </ul> 
        <dropdown />
    </nav>
</template>



<style lang="scss">
    @import '../assets/style/base.scss';
    @import '../assets/style/colors.scss';

    .navigation a.active {
        font-weight: bold;
        color: #007bff;
    }

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