<template>
    <button @click="handleClick" :disabled="disabled">
      <slot>Defecto</slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
        disabled: {
      type: Boolean,
      default: true,
    },
    },
    methods: {
      handleClick() {
        if(!this.disabled) {
            this.$emit("storeForm");
        }
      }
    }
  }
  </script>
  