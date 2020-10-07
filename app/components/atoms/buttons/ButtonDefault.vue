<template>
  <!--
    trigered on click
    @event click
    @property {object} $event - click event
  -->
  <button
    class="button button-default"
    @click="$emit('click', $event)"
  >
    <!-- @slot Use this slot label -->
    <slot name="label">
      LABEL
    </slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
  .button-default {
    color: black;
  }
</style>
