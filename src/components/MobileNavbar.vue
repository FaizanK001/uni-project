<template>
  <div id="navigation-mobile">
<!-- Navigation -->

  <ul class="navbar-nav  ml-auto">
    <li class="nav-item">
       <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/services">Services</router-link>
    </li>
    <li class="nav-item">
     <router-link class="nav-link" to="/about">About</router-link>
    </li>
    
   <form class="form-inline my-2 my-lg-0">
     <router-link  class="btn btn-success" to="/login">Sign In</router-link> 
  </form>
  </ul>

</div>
</template>

<script>
export default {

}
</script>

<style>

</style>'