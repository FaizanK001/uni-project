<template>
<div>
<!-- Navigation -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <li class="nav-item active">
    <a class="navbar-brand" to="/">Cardiomyopathy <i class="fas fa-heartbeat"></i></a>
  </li>

  <ul class="navbar-nav  ml-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/mutation-data">Mutation Data</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/help">Help</router-link>
    </li>
    
      

    <li>
      <router-link  class="btn btn-success" to="/login">Sign In</router-link> 
    </li>
    <li>
      <router-link class="btn btn-success" to="/register">Register</router-link>
    </li>
  </ul>

</nav>
 <router-view />
</div>

  
</template>

<script>
export default {
   

}


</script>

<style>
.btn{
margin-left:10px;
}
</style>