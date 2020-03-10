export default async ({ store, route, redirect }) => {
  await store.dispatch('member/checkLogin')

  if (route.name === 'my-page') {
    if (!store.getters['member/isLogin']) {
      return redirect('/login')
    }
  }
}
