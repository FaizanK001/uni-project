<template>
    <div>
        <form>
            <div v-if="systemError !== ''" class="alert alert-danger" role="alert">
                <strong>Warning!</strong> {{ systemError }}
            </div>

            <div class="form-group">
                <label for="name">Data set name*:</label>
                <input type="text" class="form-control" v-model="name" id="name" placeholder="Name">
            </div>

            <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" v-model="description" id="description" placeholder="Description">
            </div>

            <div class="form-group">
                <label for="mutation">Mutation*:</label>
                <select class="form-control" name="mutation" v-model="mutation" id="mutation">
                    <option value="myh7">MYH7</option>
                    <option value="tnnt7">TNNT7</option>
                </select>
            </div>

            <div class="form-group">
                <label for="type">Graph Type*:</label>
                <select class="form-control" name="type" v-model="type" id="type">
                    <option value="ft">Force vs Time</option>
                    <option value="slt">Sarcomere Length vs Time</option>
                    <option value="svcc">Sliding-Velocity vs Calcium-Concentration</option>
                    <option value="tfcc">Tension/Force vs Calcium-Concentration</option>
                    <option value="ftss">Force/Tension vs Sarcomere-Shortening</option>
                    <option value="sst">Sarcomere-Shortening vs Time</option>
                </select>
            </div>
            
            <label for="xpoints">Graph X points:</label>
            <div id="xpoints" class="d-flex flex-nowrap justify-content-center form-group">
                
                <div class="small-first">
                <input type="text" class="form-control" v-model="x1" id="x1" placeholder="X1">
                </div>
                
                <div class="small">
                <input type="text" class="form-control" v-model="x2" id="x2" placeholder="X2">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="x3" id="x3" placeholder="X3">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="x4" id="x4" placeholder="X4">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="x5" id="x5" placeholder="X5">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="x6" id="x6" placeholder="X6">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="x7" id="x7" placeholder="X7">
                </div>

                <div class="small-last">
                <input type="text" class="form-control" v-model="x8" id="x8" placeholder="X8">
                </div>
            </div>

            <label for="ypoints">Graph Y points:</label>
            <div id="ypoints" class="d-flex flex-nowrap justify-content-center form-group">
                
                <div class="small-first">
                <input type="text" class="form-control" v-model="y1" id="y1" placeholder="Y1">
                </div>
                
                <div class="small">
                <input type="text" class="form-control" v-model="y2" id="y2" placeholder="Y2">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="y3" id="y3" placeholder="Y3">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="y4" id="y4" placeholder="Y4">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="y5" id="y5" placeholder="Y5">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="y6" id="y6" placeholder="Y6">
                </div>

                <div class="small">
                <input type="text" class="form-control" v-model="y7" id="y7" placeholder="Y7">
                </div>

                <div class="small-last">
                <input type="text" class="form-control" v-model="y8" id="y8" placeholder="Y8">
                </div>
            </div>

        </form>

        <button type="button" class="data-button btn btn-primary" @click="submitData()">Submit Data</button>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import firebase from 'firebase/app';

export default {
    name: "InsertForm",

    setup(props, context) {
        const name = ref("");
        const description = ref("");
        const mutation = ref("");
        const type = ref("");
        const systemError = ref("");
        const email = ref("");
        var x1 = ref(null);
        var x2 = ref(null);
        var x3 = ref(null);
        var x4 = ref(null);
        var x5 = ref(null);
        var x6 = ref(null);
        var x7 = ref(null);
        var x8 = ref(null);
        var y1 = ref(null);
        var y2 = ref(null);
        var y3 = ref(null);
        var y4 = ref(null);
        var y5 = ref(null);
        var y6 = ref(null);
        var y7 = ref(null);
        var y8 = ref(null);
        var db = firebase.firestore();
        var docRef = db.collection("users").doc();
        var docId = docRef.id;

        if (firebase.auth().currentUser !== null) {
            email.value = firebase.auth().currentUser.email;
        }

        function submitData() {
            const graphInfo = reactive ({
                name: name.value,
                description: description.value,
                type: type.value,
                mutation: mutation.value
            })

            const xpoints = reactive ({
                x1: x1.value,
                x2: x2.value,
                x3: x3.value,
                x4: x4.value,
                x5: x5.value,
                x6: x6.value,
                x7: x7.value,
                x8: x8.value,
            })

            const ypoints = reactive ({
                y1: y1.value,
                y2: y2.value,
                y3: y3.value,
                y4: y4.value,
                y5: y5.value,
                y6: y6.value,
                y7: y7.value,
                y8: y8.value,
            })

            if(name.value !== "" && type.value !== "" && name.value !== "") {
                db.collection("graphs").doc(docId).set({
                    name: graphInfo.name,
                    email: email.value,
                    description: graphInfo.description,
                    type: graphInfo.type,
                    mutation: graphInfo.mutation,
                    x1: xpoints.x1,
                    x2: xpoints.x2,
                    x3: xpoints.x3,
                    x4: xpoints.x4,
                    x5: xpoints.x5,
                    x6: xpoints.x6,
                    x7: xpoints.x7,
                    x8: xpoints.x8,
                    y1: ypoints.y1,
                    y2: ypoints.y2,
                    y3: ypoints.y3,
                    y4: ypoints.y4,
                    y5: ypoints.y5,
                    y6: ypoints.y6,
                    y7: ypoints.y7,
                    y8: ypoints.y8,
                })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                })
                context.emit("submitted");
            } else {
                systemError.value = "Please make sure required fields are filled out!";
            }
        }

        return { submitData,  
                 name,
                 mutation,
                 description,
                 systemError, 
                 type,
                 y1, y2, y3, y4, y5, y6, y7, y8,
                 x1, x2, x3, x4, x5, x6, x7, x8 };
    }
}
</script>

<style>

.small-first {
    width: 10%;
    margin-right: 10px;
}

.small {
    width: 10%;
    margin-left: 10px;
    margin-right: 10px;
}

.small-last {
    width: 10%;
    margin-left: 10px;
}

</style>