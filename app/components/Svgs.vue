<template>
  <div class="svgs">
    <!-- #arrow -->
    <svg
      class="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <symbol
        id="arrow"
        viewBox="0 0 17 18"
      >
        <path d="M16.9704 9.00011L8.48517 0.514832L7.77806 1.22194L15.5558 8.99969L7.77775 16.7777L8.48485 17.4849L16.9704 9.00011Z" />
      </symbol>
    </svg>
  </div>
</template>

<script lang="ts">
/* eslint max-len: 0 */
import Vue from 'vue'

export default Vue.extend()
</script>

<style lang="scss" scoped>
  .svgs {
    > .svg {
      position: absolute;
      width: 0;
      height: 0;
    }
  }
</style>
