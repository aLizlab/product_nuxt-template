<template>
  <div class="page page-index">
    <h1>aLiz Nuxt's Template</h1>
    <ButtonDefault>aLiz</ButtonDefault>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageTop',
  components: {
    ButtonDefault: () => import('@/components/atoms/buttons/ButtonDefault.vue'),
  },
})
</script>

<style lang="scss" scoped>
  .page-index {
  }
</style>
