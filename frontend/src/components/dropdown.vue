<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      selectedLanguage: 'sk', // Initially select 'sk'
    };
  },
  methods: {
        switchLanguage(locale) {
        this.$i18n.locale = locale;
        this.selectedLanguage = locale;
      }
    }
}
</script>

<template>
  <div class="option-wraper">
    <div class="image-wraper">
      <img
        @click="switchLanguage('sk')" 
        :class="{ selected: selectedLanguage === 'sk' }"
        src="../assets/pictures/SK.svg" alt="Slovak">
        
      <img
        @click="switchLanguage('en')" 
        :class="{ selected: selectedLanguage === 'en' }"
        src="../assets/pictures/EN.svg" alt="English">
    
    </div>
  </div>
</template>

<style lang="scss">
.image-wraper{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 0.521vw;
  img{
    width: 2.083vw;
    max-width: 4.9375rem;
  }
  @media only screen and (max-width: 1024px){
    gap: 1vw;
    img{
      width: 3vw;
    }
  }
  @media only screen and (max-width: 700px){
    gap: 2vw;
    img{
      width: 7vw;
    }
  }
}
.selected {
  -webkit-filter: drop-shadow(0px 0px 4px rgba(255, 255, 255, 1));
          filter: drop-shadow(0px 0px 4px rgba(255, 255, 255, 1));
}

</style>