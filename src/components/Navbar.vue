<template>
<div>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="logo text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" >
          Cardiomyopathy <i class="fas fa-heartbeat"></i>
        </a>
        <button class="small-nav text-white cursor-pointer text-x1 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="nav flex flex-col lg:flex-row list-none ml-auto text-white">
			<li class="nav-item">
       <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/services">Services</router-link>
    </li>
    <li class="nav-item">
     <router-link class="nav-link" to="/about">About</router-link>
    </li>
   <li>
     <router-link  class="nav-link" to="/login">Sign In</router-link> 
   </li>
    
  <li>
      <router-link class="nav-link" to="/register">Register</router-link>
     </li>

         
        </ul>
      </div>
    </div>
  </nav>
<router-view></router-view>


</div>
</template>


<script>
import  '../assets/css/Navbar.css'
export default {
   name: "navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }

}


</script>

<style scoped>

.logo{
   position:relative; 
   right:300px; 
   top:2px;
}
.nav{
   position:relative; 
   left:300px; 
   top:2px;
}


</style>