<script>
    export default {
        data() {
            return {
            selectedOption: 'slovak',
            isDropdownOpen: false,
            };
        },
        methods: {      
            switchLanguage(locale) {
                this.$i18n.locale = locale;
            },        
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen;
            },
            selectOption(option) {
                this.selectedOption = option;
                this.isDropdownOpen = false;
            },
        },
    };
</script>

<template>
    <div>
      <div v-if="!isDropdownOpen" class="toggle" @click="toggleDropdown">
            <img v-if="selectedOption === 'slovak'" src="../assets/pictures/SK.svg"/>
        
            <img v-else src="../assets/pictures/EN.svg"/>
      </div>

      <div class="choose" v-show="isDropdownOpen">
            <img @click="selectOption('slovak'), switchLanguage('sk')"  src="../assets/pictures/SK.svg" alt="Slovak"/>
            
            <img @click="selectOption('english'), switchLanguage('en')" class="test" src="../assets/pictures/EN.svg" alt="English"/>
      </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/style/base.scss';
    @import '../assets/style/colors.scss';
    
    .choose{
        position: relative;
        display: flex;
        flex-direction: column;
        img{
            max-width: 40px;
        }
        .test{
            position: absolute;
            top: 40px;
        }
    }
    .toggle{
        img{
            max-width: 40px;
        }
    }
</style>
  
  
