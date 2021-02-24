<template>
    <div id="ShowGraph">
        <!-- Choose mutation for filtering -->
        <div class="form-group">
            <label for="id">Enter the ID of the data set:</label>
            <input type="text" class="form-control" v-model="id" id="id" placeholder="Document ID">
            <button id="search-button" type="button" class="data-button btn btn-primary" @click="search()">Search</button>
        </div>

        <div v-if="data.id !== ''">
        <apexchart
        type="line"
        height="350"
        width="500"
        :options="chartOptions"
        :series="series"
        ></apexchart>
        </div>

        <!-- If there is any data in the 'experimentalData' array, show it to the user -->
        <div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import firebase from 'firebase/app';

export default {
    name: "ShowGraph",

    setup() {
        const id = ref("");
        const systemError = ref("");
        var db = firebase.firestore();
        const data = reactive ({
            id: "",
            description: "",
            mutation: "",
            name: "",
            email: "",
            type: "",
            xaxis: "",
            yaxis: "",
            x1: "",
            x2: "",
            x3: "",
            x4: "",
            x5: "",
            x6: "",
            x7: "",
            x8: "",
            y1: "",
            y2: "",
            y3: "",
            y4: "",
            y5: "",
            y6: "",
            y7: "",
            y8: "",
        })

        function search() {

            const search = reactive({
                searchValue: id.value,
            })

            if (id.value !== null && id.value !== "") {

                var docRef = db.collection("graphs").doc(search.searchValue);

                docRef.get().then((doc) => {
                if (doc.exists) {
                    
                    const graphType = ref("");
                    if (doc.get("type") === "ft" ) {
                        graphType.value = "Force vs Time";
                        data.xaxis = "Force";
                        data.yaxis = "Time";
                    } else if (doc.get("type") === "slt") {
                        graphType.value = "Sarcomere Length vs Time";
                        data.xaxis = "Sarcomere Length";
                        data.yaxis = "Time";
                    } else if (doc.get("type") === "svcc") {
                        graphType.value = "Sliding-Velocity vs Calcium-Concentration";
                        data.xaxis = "Sliding-Velocity";
                        data.yaxis = "Calcium-Concentration";
                    } else if (doc.get("type") === "tfcc") {
                        graphType.value = "Tension/Force vs Calcium-Concentration";
                        data.xaxis = "Tension/Force";
                        data.yaxis = "Calcium-Concentration";
                    } else if (doc.get("type") === "ftss") {
                        graphType.value = "Force/Tension vs Sarcomere-Shortening";
                        data.xaxis = "Force/Tension";
                        data.yaxis = "Sarcomere-Shortening";
                    } else if (doc.get("type") === "sst") {
                        graphType.value = "Sarcomere-Shortening vs Time";
                        data.xaxis = "Sarcomere-Shortening";
                        data.yaxis = "Time";
                    } else {
                        graphType.value = "Graph type undefined!"
                    }
                
                    data.id = doc.id;
                    data.description = doc.get("description");
                    data.mutation = doc.get("mutation");
                    data.name = doc.get("name");
                    data.email = doc.get("email");
                    data.type = graphType.value;
                    data.x1 = doc.get("x1");
                    data.x2 = doc.get("x2");
                    data.x3 = doc.get("x3");
                    data.x4 = doc.get("x4");
                    data.x5 = doc.get("x5");
                    data.x6 = doc.get("x6");
                    data.x7 = doc.get("x7");
                    data.x8 = doc.get("x8");
                    data.y1 = doc.get("y1");
                    data.y2 = doc.get("y2");
                    data.y3 = doc.get("y3");
                    data.y4 = doc.get("y4");
                    data.y5 = doc.get("y5");
                    data.y6 = doc.get("y6");
                    data.y7 = doc.get("y7");
                    data.y8 = doc.get("y8");

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

        var chartOptions = reactive({
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                lineCap:'round'
            },
            title: {
                text: "Name",
                align: "left",
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5,
                },
            },
            xaxis: {
                logarithmic: true,
                categories: [8,7.1999,6.36001,5.91164,5.52258,5.12268,4.81641,4.50933] ,
                title: {
                    text: "pCa",
                },
            },
            yaxis: {
                title: {
                    text: "Force",
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                floating: true,
                offsetY: -25,
                offsetX: -5,
            },
        });

        var series = reactive([
            {
                name: "Name",
                data: [1,2,3,4,5,6,7,8]
            },
        ]);

        

        return { id, search, systemError, data, chartOptions, series }
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