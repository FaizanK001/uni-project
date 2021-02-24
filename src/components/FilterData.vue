<template>
    <div id="filterData">
        <!-- Choose mutation for filtering -->
        <div class="form-group">
            <label for="mutation">Select Mutation Type:</label>
            <select class="form-control" name="mutation" v-model="mutation" id="mutation">
                <option value="myh7">MYH7</option>
                <option value="tnnt2">TNNT2</option>
            </select>
            <button id="search-button" type="button" class="data-button btn btn-primary" @click="search()">Search</button>
        </div>

        <!-- If there is any data in the 'experimentalData' array, show it to the user -->
        <div v-if="experimentalData.length > 0">
            <div v-for="item in experimentalData" :key="item.index">
                <div class="d-flex align-content-start flex-wrap card">
                    <div class="data-card"><b>Document ID:</b>{{ item.id }} by <i>{{ item.email }}</i></div>
                    <div class="d-flex data-card"><b>Data set name:</b>{{ item.name }}</div>
                    <div class="d-flex data-card"><b>Data mutation sort:</b>{{ item.mutation }}</div>
                    <div class="d-flex data-card"><b>Data description:</b>{{ item.description }}</div>
                    <div class="d-flex data-card"><b>Graph type:</b>{{ item.type }}</div>
                    <div class="d-flex data-card"><b>Coordinates:</b>
                        [{{ item.x1 }},{{ item.y1 }}],
                        [{{ item.x2 }},{{ item.y2 }}],
                        [{{ item.x3 }},{{ item.y3 }}],
                        [{{ item.x4 }},{{ item.y4 }}],
                        [{{ item.x5 }},{{ item.y5 }}],
                        [{{ item.x6 }},{{ item.y6 }}],
                        [{{ item.x7 }},{{ item.y7 }}],
                        [{{ item.x8 }},{{ item.y8 }}]
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import firebase from 'firebase/app';

export default {
    name: "FilterData",

    setup() {
        const mutation = ref("");
        var db = firebase.firestore();
        var experimentalData = reactive ([]);

        function search() {
            
            experimentalData.splice(0,experimentalData.length);

            const search = reactive({
                searchValue: mutation.value,
            })

            db.collection("graphs").where("mutation", "==", search.searchValue)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());

                    // check the type of graph and input it into the graphType variable
                    const graphType = ref("");
                    if (doc.get("type") === "ft" ) {
                        graphType.value = "Force vs Time";
                    } else if (doc.get("type") === "slt") {
                        graphType.value = "Sarcomere Length vs Time";
                    } else if (doc.get("type") === "svcc") {
                        graphType.value = "Sliding-Velocity vs Calcium-Concentration";
                    } else if (doc.get("type") === "tfcc") {
                        graphType.value = "Tension/Force vs Calcium-Concentration";
                    } else if (doc.get("type") === "ftss") {
                        graphType.value = "Force/Tension vs Sarcomere-Shortening";
                    } else if (doc.get("type") === "sst") {
                        graphType.value = "Sarcomere-Shortening vs Time";
                    } else {
                        graphType.value = "Graph type undefined!"
                    }
                    
                    const data = reactive ({
                        id: doc.id,
                        description: doc.get("description"),
                        mutation: doc.get("mutation"),
                        name: doc.get("name"),
                        email: doc.get("email"),
                        type: graphType.value,
                        x1: doc.get("x1"),
                        x2: doc.get("x2"),
                        x3: doc.get("x3"),
                        x4: doc.get("x4"),
                        x5: doc.get("x5"),
                        x6: doc.get("x6"),
                        x7: doc.get("x7"),
                        x8: doc.get("x8"),
                        y1: doc.get("y1"),
                        y2: doc.get("y2"),
                        y3: doc.get("y3"),
                        y4: doc.get("y4"),
                        y5: doc.get("y5"),
                        y6: doc.get("y6"),
                        y7: doc.get("y7"),
                        y8: doc.get("y8"),
                    })
                    experimentalData.push(data);
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        }

        return { experimentalData, mutation, search }
    }
}
</script>

<style>

#search-button {
    width: 20%;
    margin-top: 15px;
}

.data-card {
    width: 100%;
}
</style>