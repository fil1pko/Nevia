<script>
import { ref } from 'vue'

export default {
  setup() {
    const docState = ref('sk')
    const switchLanguage = (locale) => {
      docState.value = locale;
    }
    return {
      docState,
      switchLanguage,
    }
  },
}
</script>

<template>
  <div class="option-wraper">
    <div class="image-wraper">
      <img
        @click="switchLanguage('sk')" 
        :class="{ selected: docState === 'sk' }"
        src="../assets/pictures/SK.svg" alt="Slovak">
        
      <img
        @click="switchLanguage('en')" 
        :class="{ selected: docState === 'en' }"
        src="../assets/pictures/EN.svg" alt="English">
    
    </div>
  </div>
</template>

<style lang="scss">
.image-wraper{
  display: flex;
  gap: 10px;
  img{
    width: 40px;
  }
}
.selected {
  filter: drop-shadow(0px 0px 4px rgba(255, 255, 255, 1));
}

</style>