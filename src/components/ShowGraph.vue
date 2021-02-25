<template>
    <div id="ShowGraph">
        <!-- Choose mutation for filtering -->
        <div class="form-group">
            <label for="id">Enter the ID of the data set:</label>
            <input type="text" class="form-control" v-model="id" id="id" placeholder="Document ID">
            <button id="search-button" type="button" class="data-button btn btn-primary" @click="search()">Search</button>
        </div>

        <div v-if="data.id !== ''" class="d-flex graph-card">
            <apexchart class="graph-styling"
            type="line"
            height=100%
            width=100%
            :options="chartOptions"
            :series="series"
            ></apexchart>

            <div class="graph-description">
                <h1 class="graph-title">{{ data.name }}</h1>
                <p class="graph-text"><b>Mutation Type:</b> {{ data.mutation }}</p>
                <p class="graph-text"><b>Graph description:</b> {{ data.description }}</p>
                <p class="graph-text"><b>Author:</b> {{ data.email }}</p>
            </div>
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
        })

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
                text: "",
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
                categories: [],
                title: {
                    text: "",
                },
            },
            yaxis: {
                title: {
                    text: "",
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
                name: "",
                data: []
            },
        ]);

        function search() {
            
            series[0].data.splice(0,series[0].data.length);
            chartOptions.xaxis.categories.splice(0,chartOptions.xaxis.categories.length);

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
                        chartOptions.yaxis.title.text =  "Force";
                        chartOptions.xaxis.title.text =  "Time";
                    } else if (doc.get("type") === "slt") {
                        graphType.value = "Sarcomere Length vs Time";
                        chartOptions.yaxis.title.text =  "Sarcomere Length";
                        chartOptions.xaxis.title.text =  "Time";
                    } else if (doc.get("type") === "svcc") {
                        graphType.value = "Sliding-Velocity vs Calcium-Concentration";
                        chartOptions.yaxis.title.text =  "Sliding-Velocity";
                        chartOptions.xaxis.title.text =  "Calcium-Concentration";
                    } else if (doc.get("type") === "tfcc") {
                        graphType.value = "Tension/Force vs Calcium-Concentration";
                        chartOptions.yaxis.title.text =  "Tension/Force";
                        chartOptions.xaxis.title.text =  "Calcium-Concentration";
                    } else if (doc.get("type") === "ftss") {
                        graphType.value = "Force/Tension vs Sarcomere-Shortening";
                        chartOptions.yaxis.title.text =  "Force/Tension";
                        chartOptions.xaxis.title.text =  "Sarcomere-Shortening";
                    } else if (doc.get("type") === "sst") {
                        graphType.value = "Sarcomere-Shortening vs Time";
                        chartOptions.yaxis.title.text =  "Sarcomere-Shortening";
                        chartOptions.xaxis.title.text =  "Time";
                    } else {
                        graphType.value = "Graph type undefined!"
                    }
                
                    data.id = doc.id;
                    data.description = doc.get("description");
                    data.mutation = doc.get("mutation");
                    data.name = doc.get("name");
                    data.email = doc.get("email");
                    data.type = graphType.value;

                    const xpoints = reactive ({
                        x1: doc.get('x1'),
                        x2: doc.get('x2'),
                        x3: doc.get('x3'),
                        x4: doc.get('x4'),
                        x5: doc.get('x5'),
                        x6: doc.get('x6'),
                        x7: doc.get('x7'),
                        x8: doc.get('x8'),
                    })

                    const ypoints = reactive ({
                        y1: doc.get("y1"),
                        y2: doc.get("y2"),
                        y3: doc.get("y3"),
                        y4: doc.get("y4"),
                        y5: doc.get("y5"),
                        y6: doc.get("y6"),
                        y7: doc.get("y7"),
                        y8: doc.get("y8"),
                    })

                    chartOptions.xaxis.categories.push(xpoints.x1);
                    chartOptions.xaxis.categories.push(xpoints.x2);
                    chartOptions.xaxis.categories.push(xpoints.x3);
                    chartOptions.xaxis.categories.push(xpoints.x4);
                    chartOptions.xaxis.categories.push(xpoints.x5);
                    chartOptions.xaxis.categories.push(xpoints.x6);
                    chartOptions.xaxis.categories.push(xpoints.x7);
                    chartOptions.xaxis.categories.push(xpoints.x8);

                    series[0].data.push(Number(ypoints.y1));
                    series[0].data.push(Number(ypoints.y2));
                    series[0].data.push(Number(ypoints.y3));
                    series[0].data.push(Number(ypoints.y4));
                    series[0].data.push(Number(ypoints.y5));
                    series[0].data.push(Number(ypoints.y6));
                    series[0].data.push(Number(ypoints.y7));
                    series[0].data.push(Number(ypoints.y8));

                    chartOptions.title.text = doc.get("name");

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