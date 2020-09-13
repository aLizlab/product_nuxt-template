import { addParameters } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { action } from '@storybook/addon-actions'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'Default', value: '#fff', default: true },
    { name: 'Dark', value: '#000' },
  ],
  design: {
    type: 'figma',
    // 表示させたいFigmaのURL
    url: 'https://www.figma.com/file/9kUkyO13rSZPXtNFkQg285/aLiz-YouTube?node-id=9%3A39',
  },
  // docs: {
  //   iframeHeight: '60px',
  // },
})

Vue.component('nuxt-link', {
  props: ['to'],
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
  methods: {
    log() {
      action('nuxt-link')(this.to)
    },
  },
})
