<template>
    <div id="deleteForm">

        <div v-if="systemError !== ''" class="alert alert-danger" role="alert">
            <strong>Warning!</strong> {{ systemError }}
        </div>

        <form>
            <div class="form-group">
                <label for="id">Delete Exprimental Data:</label>
                <input type="text" class="form-control" v-model="id" id="id" placeholder="Document ID">
            </div>
        </form>

        <button id="delete-btn" type="button" class="data-button btn btn-primary" @click="deleteData()">Delete Experimental Data</button>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import firebase from 'firebase/app';

export default {
    name: "DeleteForm",

    setup(props, context) {
        const id = ref("");
        const email = ref("");
        const systemError = ref("");
        var db = firebase.firestore();

        if (firebase.auth().currentUser !== null) {
            email.value = firebase.auth().currentUser.email;
        }

        function deleteData() {
            const deleteInfo = reactive ({
                id: id.value,
                email: email.value
            })
            
            if (id.value !== null && id.value !== "") {

                var docRef = db.collection("graphs").doc(deleteInfo.id);

                docRef.get().then((doc) => {
                if (doc.exists) {
                    if (deleteInfo.email === doc.get("email")) {
                        db.collection("graphs").doc(deleteInfo.id).delete().then(() => {
                            console.log("Document successfully deleted!");
                        }).catch((error) => {
                            console.error("Error removing document: ", error);
                        });
                        context.emit("data-deleted");
                    } else {
                        systemError.value = "You do not have permission to delete this document!"
                    }

                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                systemError.value = "Document does not exist!"
                }
                }).catch((error) => {
                console.log("Error getting document:", error);
                });
            } else {
                systemError.value = "Enter a valid ID!";
            }
        }

        return { id, deleteData, systemError }
    }
}
</script>

<style>
#delete-btn {
    width: 50%;
}
</style>