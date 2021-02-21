<template>
  <div id="account" class="d-flex align-content-start flex-wrap">

    <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">Welcome {{ firstname }} {{ lastname }}! </h1>
    </div>
    
    
      <div id="details-display-box" class=" card">
        
        <div class="border-margin border-padding card">

          <h1 class="card-heading">My Details</h1>
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

        <!-- Display user options -->
        <div class="border-padding card">
          <h1 class="card-heading">Manage Data</h1>
          <button type="button" class="btn btn-primary" @click="insertData()">Insert Data</button>
          <button type="button" class="btn btn-primary" @click="deleteData()">Delete Data</button>
        </div>
        
      </div>

      <!-- Data Section -->

      <div id="data-display-box" class="card">

        <div v-if="insertCheck === true">
          <InsertData/>
        </div>

        <div v-if="insertCheck === false">
          <div class="card">
          </div>
        </div>

      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import AccountDetails from '../components/AccountDetails.vue';
import AccountUpdate from '../components/AccountUpdate.vue';
import InsertData from '../components/InsertData.vue';
import { firebaseFireStore } from '../firebase/database.js';

export default {
  name: "Account",
  components: { AccountDetails, AccountUpdate, InsertData },
  
  setup() {
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const updateCheck = ref(false);
    const insertCheck = ref(false);

    firebaseFireStore
      .collection("users")
      .doc("5YzGaye9mXxBarCec3j9")
      .get()
      .then((snapshot) => {
        firstname.value = snapshot.data().firstName;
        lastname.value = snapshot.data().lastName;
      })
    
    function updateProfile() {
      updateCheck.value = !updateCheck.value;
    }

    function insertData() {
      insertCheck.value = !insertCheck.value;
    }

    return { firstname, lastname, email, updateCheck, insertCheck, updateProfile, insertData };
  },
}
</script>

<style>

.card-heading {
  font-size: 30px;
  margin-bottom: 20px; 
}

.welcome-box {
  height: 15vh;
  background-color: #c4c4c4;
  color: black;
}

.btn {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
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

.border-margin {
  margin-bottom: 10px;
}

.border-padding {
  padding: 10px;
}

</style>