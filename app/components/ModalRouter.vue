<template>
  <div class="modal modal-router">
    <div
      class="bg"
      @click="$router.push($route.path)"
    >
      <button class="close">
        <span class="bar" />
        <span class="bar" />
      </button>
    </div>
    <div class="content">
      <component :is="$route.query.modal" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
    sample: () => import('@/modals/sample.vue'),
  },
})
</script>

<style lang="scss" scoped>
  .modal-router {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    > .bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--color-bg-modal);

      > .close {
        position: absolute;
        top: 26px;
        right: 26px;
        display: flex;
        width: 30px;
        height: 30px;
        padding: 0;
        background-color: transparent;
        border: none;
        z-index: 9000;

        @include mq(sm) {
          top: 16px;
          right: 16px;
        }

        > .bar {
          position: absolute;
          top: 50%;
          right: 50%;
          width: 30px;
          height: 2px;
          background-color: var(--color-stroke);

          &:nth-child(1) {
            transform: translate(50%, -50%) rotate(45deg);
          }

          &:nth-child(2) {
            transform: translate(50%, -50%) rotate(-45deg);
          }
        }
      }
    }

    > .content {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      z-index: 8000;
    }
  }
</style>
