import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { configure, addDecorator, addParameters } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

addDecorator(withInfo)
addDecorator(withKnobs)
addParameters({
  backgrounds: [
    { name: 'Default', value: '#fff', default: true },
    { name: 'Dark', value: '#000' },
  ],
})

Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

const req = require.context('../app/components', true, /\.story\.ts?$/)
const loadStories = () => {
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
