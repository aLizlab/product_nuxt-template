<template>
  <div class="layout layout-default">
    <main class="content">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault',
})
</script>

<style lang="scss" scoped>
  .layout-default {
    position: relative;
    min-height: 100vh;
    padding: 80px 0;

    > .header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 7000;
    }

    > .content {
    }

    > .footer {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
</style>
