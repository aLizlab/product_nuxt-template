import dayjs from 'dayjs'

// eslint-disable-next-line no-empty-pattern
export default ({}, inject) => {
  inject('dayjs', string => dayjs(string))
}
