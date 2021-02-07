<template>
<div>
<!-- Navigation -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <li class="nav-item active">
      <a class="navbar-brand" to="/">Cardiomyopathy  <i class="fas fa-heartbeat"></i>  </a>
    </li>
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
</nav>
</div>
  
</template>

<script>
export default {
   

}


</script>

<style>

</style>