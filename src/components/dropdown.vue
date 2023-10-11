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
        
            <img v-else src="../assets/pictures/logo.svg"/>
      </div>

      <div class="choose" v-show="isDropdownOpen">
            <img @click="selectOption('slovak'), switchLanguage('sk')" src="../assets/pictures/SK.svg"/>
            
            <img @click="selectOption('english'), switchLanguage('en')" src="../assets/pictures/logo.svg"/>
      </div>
    </div>
  </template>
  
  
