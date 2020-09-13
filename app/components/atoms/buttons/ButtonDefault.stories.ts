import ButtonDefault from './ButtonDefault.vue'

// @ts-ignore
import mdx from './ButtonDefault.mdx'

export default {
  title: 'atoms/buttons/ButtonDefault',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: ButtonDefault,
}

export const basic = () => ({
  components: { ButtonDefault },
  template: `<ButtonDefault>
    LABEL
  </ButtonDefault>`,
})
