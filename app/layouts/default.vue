<template>
  <div class="layout layout-default">
    <Svgs />

    <main class="content">
      <nuxt />
    </main>

    <ModalRouter v-show="$route.query.modal" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault',
  components: {
    Svgs: () => import('@/components/Svgs.vue'),
    ModalRouter: () => import('@/components/ModalRouter.vue'),
  },
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

    > .modal {
      z-index: 8000;
    }
  }
</style>
