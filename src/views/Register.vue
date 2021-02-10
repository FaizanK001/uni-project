<template>
  <div>
<div class="container-fluid">
  <div class="row no-gutter">
    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
    <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-lg-8 mx-auto">
              <h3 class="login-heading mb-4">Welcome back!</h3>
              <form>
                <div class="form-label-groups">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                  
                </div>
                 <br>
                <div class="form-label-groups">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required autofocus>
                 
                  
                  
                </div>
                <br>
                <div class="form-label-groups">
                   <input type="password" id="inputPassword" class="form-control" placeholder="Password" required autofocus>
                </div>

                <br>

                <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                <div class="text-center">
                  <router-link class="small" to="/login">Already a member?</router-link></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
//import '../assets/css/Register.css'
export default {

}
</script>

<style>

</style>