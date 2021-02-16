<template>
  <div class="account">

    <div class="d-flex align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">Welcome {{ firstname }} {{ lastname }}! </h1>
    </div>

    <div class="display-box justify-content-center">
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
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from "vue";
import AccountDetails from '../components/AccountDetails.vue';
import AccountUpdate from '../components/AccountUpdate.vue'

export default {
  name: "Account",
  components: { AccountDetails, AccountUpdate },
  
  setup() {
    const firstname = ref("Hubert");
    const lastname = ref("Antczak");
    const email = ref("hubant@gmail.com");
    const updateCheck = ref(false);
    
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
}

.welcome-text {
  font-size: 60px;
}

.display-box {
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
}

</style>