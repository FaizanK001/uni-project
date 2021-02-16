<template>
  <div class="account d-flex flex-wrap justify-content-start">

    <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">Welcome {{ firstname }} {{ lastname }}! </h1>
    </div>
    
    
      <div class="details-display-box">
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
      <div class="data-display-box">
        <p>Data</p>
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

.details-display-box {
  padding: 15px;
  width: 30%;
}

.data-display-box {
  padding: 15px;
  width: 70%;
}

</style>