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
              <h3 class="login-heading mb-4">Enter your login details</h3>
              <form @submit.prevent>

                <div v-if="errorLogin !== ''" class="alert alert-danger" role="alert">
                    <strong>Warning!</strong> {{ errorLogin }}
                </div>

                <div class="form-label-group">
                  <input type="email" v-model="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
                  <label for="inputEmail">Email</label>
                </div>

                <div class="form-label-group">
                  <input type="password" v-model="password"  id="inputPassword" class="form-control" placeholder="Password" required>
                  <label for="inputPassword">Password</label>
                </div>

                <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" @click="login">Sign in</button>

                <div class="text-center">
                  <a class="forgot" href="#" v-on:click="ForgotPassword">Forgot password?</a></div>
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
import {ref} from "vue";
import {firebaseAuthentication} from "../firebase/database";
import {useRouter} from "vue-router";

export default {
    name: "login",
    emits: ["login-clicked"],
    setup() {
      const email = ref("");
      const password = ref("");
      const router = useRouter();
      const errorLogin = ref("");

      function login(){
        const info = {
          email: email.value,
          password: password.value,
        };
        firebaseAuthentication.signInWithEmailAndPassword(info.email,info.password)
        .then(()=>{
          router.push("/"); 
        }, error =>{
          errorLogin.value = error.message;
          
        });
      }
      
      function ForgotPassword(){
        if(confirm(`Would you like to reset the password: ${this.email}`)){
          firebaseAuthentication.sendPasswordResetEmail(this.email).then(()=>{
            alert(
              "An Email has be sent to rest password"
            );
          })
          .catch((error) => alert(error.message))
        }
      }

      return{ email, 
              password, 
              login,
              errorLogin,
              ForgotPassword};
    
    },
};
</script>

<style scoped>

:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url('https://source.unsplash.com/WEQbe2jBg40/600x1200');
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  margin-left: 0px;
  padding: 0.75rem 1rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 3px;
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}



</style>