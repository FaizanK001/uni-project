import { shallowMount } from '@vue/test-utils'
//import VueRouter from 'vue-router'
import Navbar from '@/components/Navbar.vue'

const $route = {
    path: '@/view/Home.vue'
  }
  
  const wrapper = shallowMount(Navbar, {
    mocks: {
      $route
    }
  })
  
  wrapper.vm.$route.path('/') // /some/path