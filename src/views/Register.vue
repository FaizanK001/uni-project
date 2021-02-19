<template>
  <div id="register">
    <div class="container">
      <div class="row py-5 mt-4 align-items-center">
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
          <img
            src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
            alt=""
            class="img-fluid mb-3 d-none d-md-block"
          />
          <h1>Create an Account</h1>
          <p class="font-italic text-muted mb-0">
            Create a minimal registeration page using Bootstrap 4 HTML form
            elements.
          </p>
          <p class="font-italic text-muted">
            Snippet By
            <a href="https://bootstrapious.com" class="text-muted">
              <u>Bootstrapious</u></a
            >
          </p>
        </div>

        <!-- Registeration Form -->
        <div class="col-md-7 col-lg-6 ml-auto">
          <form @submit.prevent>
            <div class="row">
              <!-- First Name -->
              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-user text-muted"></i>
                  </span>
                </div>
                <input
                  id="firstName"
                  type="text"
                  v-model="firstName"
                  name="firstname"
                  placeholder="First Name"
                  class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <!-- Last Name -->
              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-user text-muted"></i>
                  </span>
                </div>
                <input
                  id="lastName"
                  type="text"
                  v-model="lastName"
                  name="lastname"
                  placeholder="Last Name"
                  class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <!-- Email Address -->
              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-envelope text-muted"></i>
                  </span>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  v-model="email"
                  placeholder="Email Address"
                  class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <!-- Password -->
              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-lock text-muted"></i>
                  </span>
                </div>
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  name="password"
                  placeholder="Password"
                  class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <!-- Password Confirmation -->
              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text bg-white px-4 border-md border-right-0"
                  >
                    <i class="fa fa-lock text-muted"></i>
                  </span>
                </div>
                <input
                  id="passwordConfirmation"
                  type="password"
                  v-model="passwordConfirmation"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  class="form-control bg-white border-left-0 border-md"
                />
              </div>

              <div v-if="errorRegistration" class="errorRegistration">
                {{ errorRegistration }}
              </div>

              <!-- Submit Button -->
              <button class="btn btn-primary btn-block py-2" @click="register">
                Register
              </button>

              <!-- Submit Button
                    <div class="form-group col-lg-12 mx-auto mb-0">
                            <a href="#" class="btn btn-primary btn-block py-2">
                                <span class="font-weight-bold">Create your account</span>
                            </a>
                        </div> -->

              <!-- Divider Text -->
              <div
                class="form-group col-lg-12 mx-auto d-flex align-items-center my-4"
              >
                <div class="border-bottom w-100 ml-5"></div>
                <span class="px-2 small text-muted font-weight-bold text-muted"
                  >OR</span
                >
                <div class="border-bottom w-100 mr-5"></div>
              </div>

              <!-- Social Login -->
              <div class="form-group col-lg-12 mx-auto">
                <a href="#" class="btn btn-primary btn-block py-2 btn-facebook">
                  <i class="fa fa-facebook-f mr-2"></i>
                  <span class="font-weight-bold">Continue with Facebook</span>
                </a>
                <a href="#" class="btn btn-primary btn-block py-2 btn-twitter">
                  <i class="fa fa-twitter mr-2"></i>
                  <span class="font-weight-bold">Continue with Twitter</span>
                </a>
              </div>

            
            </div>

            <div v-if="errorRegistration" class="errorRegistration">
              {{ errorRegistration }}
            </div>

            <button class="btn btn-primary btn-block py-2" @click="register">
              Register
            </button>

            <!-- Divider Text -->
            <div
              class="form-group col-lg-12 mx-auto d-flex align-items-center my-4"
            >
              <div class="border-bottom w-100 ml-5"></div>
              <span class="px-2 small text-muted font-weight-bold text-muted"
                >OR</span
              >
              <div class="border-bottom w-100 mr-5"></div>
            </div>

            <!-- Already Registered -->
            <div class="text-center w-100">
              <p class="text-muted font-weight-bold">
                Already Registered?
                <router-link to="/login" class="text-primary ml-2"
                  >Login</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication } from "../firebase/database";
export default {
  name: "register",
  emits: ["register-clicked"],

  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const passwordConfirmation = ref("");
    const errorRegistration = ref("");

    watch(passwordConfirmation, () => {
      if (
        password.value !== "" &&
        passwordConfirmation.value !== "" &&
        password.value !== passwordConfirmation.value
      ) {
        errorRegistration.value = "Passwords do not match!";
      } else {
        errorRegistration.value = null;
      }
    });
    const router = useRouter();
    function register() {
      const info = {
        email: email.value,
        password: password.value,
        firstName: firstName.value,
      };
      if (!errorRegistration.value) {
        firebaseAuthentication
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            (userCredentails) => {
              return userCredentails.user
                .updateProfile({
                  displayName: info.firstName,
                })
                .then(() => {
                  router.replace("login");
                });
            },
            (error) => {
              errorRegistration.value = error.message;
            }
          );
      }
    }
    return {
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      errorRegistration,
      register,
    };
  },
};
</script>

<style>
#register {
  min-height: 100vh;
}

.border-md {
  border-width: 2px;
}

.btn-facebook {
  background: #405d9d;
  border: none;
}

.btn-facebook:hover,
.btn-facebook:focus {
  background: #314879;
}

.btn-twitter {
  background: #42aeec;
  border: none;
}

.btn-twitter:hover,
.btn-twitter:focus {
  background: #1799e4;
}
</style>
