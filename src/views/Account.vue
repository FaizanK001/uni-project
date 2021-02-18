<template>
  <div id="account" class="d-flex align-content-start flex-wrap">

    <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">Welcome {{ firstname }} {{ lastname }}! </h1>
    </div>
    
    
      <div id="details-display-box" class="card">
        <!-- User profile display -->
        <div v-if="updateCheck === false">
          <account-details></account-details>
          <button type="button" class="btn btn-primary" @click="updateProfile()">Update details</button>
        </div>

        <!-- Profile update display -->
        <div v-if="updateCheck === true">
          <account-update></account-update>
          <button type="button" class="btn btn-primary" @click="updateProfile()">Cancel</button>
          <button type="button" class="btn btn-primary" @click="updateProfile()">Save details</button>
        </div>
      </div>

      <!-- Data Section -->
      <div id="data-display-box" class="card">
        <p>Data</p>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from "vue";
import AccountDetails from '../components/AccountDetails.vue';
import AccountUpdate from '../components/AccountUpdate.vue';
import { firebaseFireStore } from '../firebase/database.js';

export default {
  name: "Account",
  components: { AccountDetails, AccountUpdate },
  
  setup() {
    const firstname = ref(null);
    const lastname = ref("Antczak");
    const email = ref("hubant@gmail.com");
    const updateCheck = ref(false);

    firebaseFireStore
      .collection("users")
      .doc("5YzGaye9mXxBarCec3j9")
      .get()
      .then((snapshot) => {
        firstname.value = snapshot.data().firstName;
      })
    
    function updateProfile() {
      updateCheck.value = !updateCheck.value;
    }

    return { firstname, lastname, email, updateCheck, updateProfile };
  },
}
</script>

<style>

.welcome-box {
  height: 15vh;
  background-color: #c4c4c4;
  color: black;
}

.btn {
  margin-left: 10px;
  margin-right: 10px;
}

.welcome-text {
  font-size: 60px;
}

#details-display-box {
  padding: 15px;
  width: 30%;
  min-height: 100vh;
  margin: 0.5%;
}

#data-display-box {
  padding: 15px;
  width: 68%;
  min-height: 100vh;
  margin: 0.5%;
}

#account {
  min-height: 100vh;
}

</style>