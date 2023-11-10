<script>
import dropdown from './dropdown.vue';

export default {
  components: {
    dropdown
  },
  data() {
    return {
      sections: [
        { id: 'home', label: 'home' },
        { id: 'about', label: 'about' },
        { id: 'references', label: 'references' },
        { id: 'portfolio', label: 'portfolio' },
        { id: 'certificates', label: 'certificates' },
        { id: 'contact', label: 'contact' }
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
      const scrollPosition = window.scrollY + 400; 
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
        <a href="#"><img src="../assets/pictures/logo2.png" alt="logo"></a>
        <ul>
            <li v-for="section in sections" :key="section.id">
                <a 
                  :href="'#' + section.id" 
                  @click.prevent="scrollToSection(section.id)"
                  :class="{ 'active': activeSection === section.id }"
                >

                  {{ $t(section.label) }}
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
        text-shadow: 0px 0px 5.849999904632568px #FFF, 0px 0px 8.699999809265137px #FFF, 0px 0px 20.95000076293945px #FFF, 0px 0px 61.9000015258789px#FFF, 0px 0px 100.39999389648438px #FFF, 0px 0px 200.6999969482422px #FFF;
    }

    nav{
        font-family: $barlowR;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 21.615vw; 
        -webkit-box-align: center; 
            -ms-flex-align: center; 
                align-items: center;
        padding-top: 1.042vw;
        ul{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            list-style: none;
            gap: 1.354vw; 
            padding: 13px 50px;
            li{
              a{
                  font-size: 0.99vw; 
                  text-decoration: none;
                  color: $lightBlueHome;
                  -webkit-transition: 0.5s;
                  -o-transition: 0.5s;
                  transition: 0.5s;
                  &:hover{
                    text-shadow: $glowing;
                  }
              }
            }
        }

        img{
          width: 2.604vw; 
          max-width: 6.1875rem;
          height: auto;
        }
    }

    @media only screen and (max-width: 1024px){
          nav{
            padding-top: 7%;
            gap: 11vw !important;
            padding-top: 4vw;
            ul{
              li{
                a{
                  font-size: 1.5vw !important;
                }
              }
            }
            img{
              width: 3.6vw;
            }
          }
        }
      @media only screen and (max-width: 700px){
        nav{
          gap: 60vw !important;
          ul{
            display: none;
          }
            img{
              width: 8vw;
            }
          }
        }
      

</style>