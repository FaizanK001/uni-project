<template>
  <div id="account" class="d-flex align-content-start flex-wrap">

    <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">Welcome {{ user.firstName }} {{ user.lastName }}! </h1>
    </div>
    
    
      <div id="details-display-box" class=" card">

        <div v-if="systemMessage !== null" class="alert alert-success" role="alert">
          <strong>Success!</strong> {{ systemMessage }}
        </div>
        
        <div class="border-margin border-padding card">
          <h1 class="card-heading">My Details</h1>
          <!-- User profile display -->
          <div v-if="updateCheck === false">
            <account-details :user=user></account-details>
            <button type="button" class="btn btn-primary" @click="updateProfileBool()">Update details</button>
          </div>

          <!-- Profile update display -->
          <div v-if="updateCheck === true">
            <account-update :user=user @cancel="updateProfileBool()" @user-updated="detailsUpdatedMessage()"></account-update>
          </div>
        </div>

        <!-- Display user options -->
        <div class="border-padding card">
          <h1 class="card-heading">Manage Data</h1>
          <button type="button" class="btn btn-primary" @click="insertData()">Insert Data</button>
          <button type="button" class="btn btn-primary" @click="updateMessage()">Delete Data</button>
        </div>
        
      </div>

      <!-- Data Section -->

      <div id="data-display-box" class="card">

        <div v-if="insertCheck === true">
          <insert-form @submitted="dataSubmittedMessage()"></insert-form>
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
import { ref, reactive } from "vue";
import AccountDetails from '../components/AccountDetails.vue';
import AccountUpdate from '../components/AccountUpdate.vue';
import InsertForm from '../components/InsertForm.vue';
import firebase from 'firebase/app';

export default {
  name: "Account",
  components: { AccountDetails, AccountUpdate, InsertForm },
  
  setup() {
    const updateCheck = ref(false);
    const insertCheck = ref(false);
    var systemMessage = ref(null);
    var db = firebase.firestore();
    var user = reactive ({
      firstName: "",
      lastName: "",
      email: "email@template.com",
      institution: "",
      telephone: "",
      address: ""
    })

    if (firebase.auth().currentUser !== null) {
      user.email = firebase.auth().currentUser.email;
    }

    var docRef = db.collection("users").doc(user.email);

    docRef.get().then((doc) => {
    if (doc.exists) {
      user.firstName = doc.get("first");
      user.lastName = doc.get("last");
      user.institution = doc.get("institution");
      user.telephone = doc.get("telephone");
      user.address = doc.get("address");
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });

    function updateProfileBool() {
      updateCheck.value = !updateCheck.value;
    }

    function insertData() {
      insertCheck.value = !insertCheck.value;
    }

    function detailsUpdatedMessage() {
      systemMessage.value = "Profile information updated!";
      updateCheck.value = !updateCheck.value;

      docRef.get().then((doc) => {
      if (doc.exists) {
        user.firstName = doc.get("first");
        user.lastName = doc.get("last");
        user.institution = doc.get("institution");
        user.telephone = doc.get("telephone");
        user.address = doc.get("address");
      } else {
      // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    }

    function dataSubmittedMessage() {
      insertCheck.value = !insertCheck.value;
      systemMessage = "New data has been added!";
    }

    return { user, updateCheck, insertCheck, updateProfileBool, insertData, detailsUpdatedMessage, systemMessage, dataSubmittedMessage };
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