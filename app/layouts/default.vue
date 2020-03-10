<template>
  <div class="layout layout-default">
    <Svgs />
    <main class="content">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault',
  components: {
    Svgs: () => import('@/components/Svgs.vue'),
  },
})
</script>

<style lang="scss" scoped>
  .layout-default {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > .menu {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 7000;
    }

    > .header {
      position: fixed;
      top: 32px;
      left: 0;
      z-index: 7000;

      @include mq(sm) {
        top: 12px;
      }
    }

    > .content {
      min-height: 100vh;
      padding-bottom: 58px;

      @include mq(sm) {
        padding-bottom: 46px;
      }
    }

    > .footer {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
</style>
