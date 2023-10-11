<script>
export default {
  data() {
    return {
      selectedOption: 'option1', // Initialize the selected option
      isDropdownOpen: false,
    };
  },
  methods: {
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
            <img v-if="selectedOption === 'option1'" src="../assets/pictures/SK.svg"/>
        
            <img v-else src="../assets/pictures/logo.svg"/>
      </div>

      <div class="choose" v-show="isDropdownOpen">
            s
            <img @click="selectOption('option1')" src="../assets/pictures/SK.svg"/>
            
            <img @click="selectOption('option2')" src="../assets/pictures/logo.svg"/>
      </div>
    </div>
  </template>
  
  
