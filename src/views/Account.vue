<template>
  <div class="account">

    <!-- User profile display -->
    <profile v-if="updateCheck === false"></profile>
    <button type="button" class="btn btn-primary" @click="updateProfile()">Update details</button>

    <!-- Profile update display -->
    <profile-update v-if="updateCheck === true"></profile-update>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from "vue";
import Profile from '../components/Profile.vue';
import ProfileUpdate from '../components/ProfileUpdate.vue'

export default {
  name: "Account",
  components: { Profile, ProfileUpdate },
  
  setup() {
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const updateCheck = ref(false);
    
    function updateProfile() {
      updateCheck.value = !updateCheck.value;
    }

    return { firstname, lastname, email, updateCheck, updateProfile };
  },
}
</script>