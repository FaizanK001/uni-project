<template>
   <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">Mutation Data for MYH7 and TNNT2</h1>
   </div>

   <!-- Data navigation bar -->
   <div id="mutation-data-nav" class="d-flex flex-wrap full-width card">
      <button type="button" class="data-button btn btn-primary" @click="allData()">Show All Data</button>
      <button type="button" class="data-button btn btn-primary" @click="filterData()">Search Mutation</button>
      <button type="button" class="data-button btn btn-primary" @click="compareData()">Compare Data</button>
      <button type="button" class="data-button btn btn-primary" @click="externalData()">Get External Data</button>
      <button type="button" class="data-button btn btn-primary" @click="showGraph()">Show Graph</button>
      
      <!-- Graph ID field -->
      <div class="form-group">
         <label for="id">Show Graph From Document:</label>
         <input type="text" class="form-control" v-model="id" id="id" placeholder="Document ID">
      </div>

      <!-- Choose mutation for filtering -->
      <div class="form-group">
         <label for="mutation">Select Mutation Type:</label>
         <select class="form-control" name="mutation" v-model="mutation" id="mutation">
            <option value="myh7">MYH7</option>
            <option value="tnnt2">TNNT2</option>
         </select>
      </div>

   </div>

   <!-- Data display -->
   <div id="mutation-data" class="d-flex full-width card">
      
      <div v-if="returnType === 'all'">
         <graphs-display></graphs-display>
      </div>

      <div v-if="returnType === 'filter'">
      </div>

      <div v-if="returnType === 'graph'">
         <ShowGraph/>
      </div>

      <div v-if="returnType === 'compare'">

         <!-- Add hard coded graph components here for comparison -->
         <Graph7a/>
         <Graph8/>
         <Graph7b/>
         <Graph7c/>
      </div>

      <div v-if="returnType === 'external'">
         <api-data></api-data>
      </div>
   </div>
</template>

<script>
import { ref } from 'vue';
import GraphsDisplay from "../components/GraphsDisplay";
import Graph8 from "../components/Graph8a";
import Graph7a from "../components/Graph7a"
import Graph7b from "../components/Graph7b"
import Graph7c from "../components/Graph7c"
import ApiData from "../components/ApiData";
import ShowGraph from "../components/ShowGraph";

export default {
   name: "Graphs",
   components: { GraphsDisplay,
                 Graph7a,
                 Graph8,
                 Graph7b,
                 Graph7c,
                 ApiData,
                 ShowGraph },
 
   setup () {
      const returnType = ref("all");

      function allData() {
         returnType.value = "all";
      }

      function filterData() {
         returnType.value = "filter";   
      }

      function showGraph() {
         returnType.value = "graph";   
      }

      function compareData() {
         returnType.value = "compare";
      }

      function externalData() {
         returnType.value = "external";
      }

      return { returnType, 
               allData,
               filterData,
               compareData,
               externalData,
               showGraph }
   },
}
</script>

<style>
body {
  font-family: Roboto, sans-serif;
}

#chart {
  max-width: 40%;
  min-width: 20%;
  margin: 35px auto;
  align-items: center;
}

#mutation-data-nav {
   padding: 10px;
}

#mutation-data {
   min-height: 55vh;
}
.left {
  display: flex;
  justify-content: left;
  margin-bottom: 160px;
  margin-top: 20px;
}

.data-button {
   margin-bottom: 10px;
   width: 20%;
}

.full-width {
   width: 99%;
   margin: 0.5%;
}

#graphs {
   min-height: 100vh;
}

.card{
   float: left;
}
</style>