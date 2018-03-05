import Vue from 'vue'
import HomeView from '@/Home.view'

describe('Home.view.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HomeView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js Home.view')
  })
})
