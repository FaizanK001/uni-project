<template>
  <div>
    <form @submit.prevent>
      <nav
        class="relative flex flex-wrap items-center nav-link navbar-expand-lg bg-black "
      >
        <div
          class="container px-4 mx-auto flex flex-wrap items-center justify-between"
        >
          <div
            class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start"
          >
            <a
              class="logo text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
            >
              Cardiomyopathy <i class="fas fa-heartbeat"></i>
            </a>
            <button
              class="small-nav text-white cursor-pointer text-x1 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              v-on:click="toggleNavbar()"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>

          <div class="user-id">
            <span>{{ user }}</span>
          </div>
          <div
            v-bind:class="{ hidden: !showMenu, flex: showMenu }"
            class="lg:flex lg:flex-grow items-center"
          >
            <ul
              class="nav flex flex-col lg:flex-row list-none ml-auto text-white"
            >
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/graphs"
                  >Graphs</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/help">Help</router-link>
              </li>
              <li class="nav-item" v-if="user">
                 <router-link class="nav-link" to="/account">Account</router-link>
              </li>
            </ul>

            <ul class="nav flex flex-col lg:flex-row list-none  nav flex  text-white" v-if="!user">
              <li  class="nav-item">
                <router-link class="nav-link login "  to="/login"
                  ><i class="fas fa-sign-in-alt"></i> Sign In</router-link
                >
              </li>
              <li  class="nav-item">
                <router-link class="nav-link" to="/register"
                  > <i class="fas fa-user"></i> Register</router-link
                >
              </li>
            </ul>

            <ul class="text-white" v-if="user">
              <li  class="nav-item">
                <router-link class="nav-link login " v-show="log" @click="logout"  to="/"
                  ><i class="fas fa-sign-in-alt"></i>Logout</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view />
    </form>
  </div>
</template>


<script>
import  '../assets/css/Navbar.css'
import { ref } from "vue";
import { firebaseAuthentication } from "../firebase/database";
//import { useRoute } from 'vue-router';
export default {
  name: "navbar",
  data() {
    const user = ref(null);

    firebaseAuthentication.onAuthStateChanged(currentUser => {
      if (currentUser) {
        user.value = currentUser.email;
        this.log = firebaseAuthentication.currentUser || true;
        this.sign = firebaseAuthentication.currentUser || false;
      } else {
        user.value == null;
      }
    });

    //const router = useRoute();
    function logout() {
      firebaseAuthentication.signOut().then(
        () => {
          user.value = null;
          // router.push("/login");

          this.$router.replace("/login");
        },
        error => {
          error.value = error.message;
        }
      );
    }

    return {
      showMenu: false,
      user,
      logout
    };
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
.logo {
  position: static;
  left: 300px;
  top: 2px;
}
.nav {
  position: static;
  right: 300px;
  top: 2px;
}
.user-id {
  color: aliceblue;
  position: static;
}
</style>