<template>
<form>
    <div v-if="systemError !== ''" class="alert alert-danger" role="alert">
        <strong>Warning!</strong> {{ systemError }}
    </div>

    <div class="form-group">
        <label for="firstname">First name*</label>
        <input type="text" class="form-control" id="firstname" v-model="firstname" placeholder="First name">
    </div>

    <div class="form-group">
        <label for="lastname">Last name*</label>
        <input type="text" class="form-control" id="lastname" v-model="lastname" placeholder="Last name">
    </div>

    <div class="form-group">
        <label for="institution">Institution*</label>
        <input type="text" class="form-control" id="institution" v-model="institution" placeholder="Institution">
    </div>

    <div class="form-group">
        <label for="telephone">Telephone</label>
        <input type="text" class="form-control" id="telephone" v-model="telephone" placeholder="Telephone">
    </div>

    <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" v-model="address" placeholder="Address">
    </div>

    <div class="form-group">
        <button type="button" class="btn btn-primary" @click="cancel()">Cancel</button>
        <button type="button" class="btn btn-primary" @click="updateUser()">Save Details</button>
    </div>
</form>
</template>

<script>
import { reactive, ref } from "vue";
import firebase from 'firebase/app';
export default {
    name: "AccountUpdate",
    props: [
        "user"
    ],
    setup(props, context) {
        const firstname = ref("");
        const lastname = ref("");
        const email = ref("");
        const institution = ref("");
        const telephone = ref("");
        const address = ref("");
        const systemError = ref("");
        var db = firebase.firestore();
        if (firebase.auth().currentUser !== null) {
            email.value = firebase.auth().currentUser.email;
        }
        var docRef = db.collection("users").doc(email.value);
        function cancel() {
            context.emit("cancel");
        }
        function updateUser() {
            const updatedUser = reactive({
                firstname: firstname.value,
                lastname: lastname.value,
                institution: institution.value,
                telephone: telephone.value,
                address: address.value
            })
            if (updatedUser.firstname !== "" && updatedUser.lastname !== "" && updatedUser.institution !== "") {
                docRef = db.collection("users").doc(email.value);
                docRef.update({
                    first: updatedUser.firstname,
                    last: updatedUser.lastname,
                    institution: updatedUser.institution,
                    telephone: updatedUser.telephone,
                    address: updatedUser.address
                })
                .then(() => {
                    console.log("Document successfully updated!");
                })
                .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
                context.emit("user-updated");
            } else {
                systemError.value = "Make sure required fields are not empty!";
            }
        }
        return { updateUser, cancel, props, firstname, lastname, institution, telephone, address, systemError }
    }
}
</script>