<template>
<div id="graphs">
   <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">Mutation Data</h1>
   </div>

   <!-- Data navigation bar -->
   <div id="mutation-data-nav" class="d-flex flex-wrap card">
      <button type="button" class="data-button btn btn-primary" @click="allData()">Show All Data</button>
      <button type="button" class="data-button btn btn-primary" @click="filterData()">Search Mutation</button>
      <button type="button" class="data-button btn btn-primary" @click="compareData()">Compare Data</button>
      <button type="button" class="data-button btn btn-primary" @click="externalData()">Get External Data</button>
      <button type="button" class="data-button btn btn-primary" @click="showGraph()">Show Graph</button>
   </div>

   <!-- Data display -->
   <div id="mutation-data" class="d-flex card">
      
      <div v-if="returnType === 'all'">
         <graphs-display></graphs-display>
      </div>

      <div v-if="returnType === 'filter'">
         <FilterData/>
      </div>

      <div v-if="returnType === 'graph'">
         <ShowGraph/>
      </div>

      <div v-if="returnType === 'compare'">

         <!-- Add hard coded graph components here for comparison -->
         <graph7a/>
         <Graph8/>
         <Graph7b/>
         <Graph7c/>
      </div>

      <div v-if="returnType === 'external'">
         <api-data></api-data>
      </div>
   </div>
</div>
</template>

<script>
import { ref } from 'vue';
import GraphsDisplay from "../components/GraphsDisplay";
import Graph8 from "../components/Graph8";
import graph7a from "../components/graph7a"
import Graph7b from "../components/Graph7b"
import Graph7c from "../components/Graph7c"
import ApiData from "../components/ApiData";
import ShowGraph from "../components/ShowGraph";
import FilterData from "../components/FilterData";

export default {
   name: "Graphs",
   components: { GraphsDisplay,
                 graph7a,
                 Graph8,
                 Graph7b,
                 Graph7c,
                 ApiData,
                 ShowGraph,
                 FilterData },
 
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

#mutation-data-nav {
   padding: 10px;
   width: 99%;
   margin: 0.5%;
}

#mutation-data {
   min-height: 55vh;
   width: 99%;
   margin: 0.5%;
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


#graphs {
   min-height: 100vh;
}

.card{
   float: left;
}
</style>