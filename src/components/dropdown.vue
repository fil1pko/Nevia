<script>
  import { ref } from 'vue'

  const docState = ref('saved')

  export default {
    data() {
      return{
        docState: ref('saved'),
      }
    },
    methods:{
      switchLanguage(locale) {
        this.$i18n.locale = locale;
      },  
    }
  }
</script>

<template>
  <div class="option-wraper">
    <Transition mode="out-in">
      <div class="image-wraper">
        <img
          @click="switchLanguage('sk')" 
          src="../assets/pictures/SK.svg" alt="Slovak">

        <img 
          @click="switchLanguage('en')" 
          src="../assets/pictures/EN.svg" alt="English">
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
  .option-wraper{
    display: inline-block;
    position: relative;
    height: 1em;
  }

// button {
//   position: absolute;
// }

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>