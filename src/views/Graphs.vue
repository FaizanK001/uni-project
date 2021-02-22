<template>


   <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text"></h1>
   </div>

   <!-- Data navigation bar -->
   <div id="mutation-data-nav" class="full-width card">
      <button type="button" class="data-button btn btn-primary" @click="showAllData()">Show All Data</button>
      <button type="button" class="data-button btn btn-primary" @click="filterData()">Filter mutation data</button>
      <button type="button" class="data-button btn btn-primary" @click="getExternalData()">Get External data</button>
      <button type="button" class="data-button btn btn-primary" @click="compareData()">Compare Data</button>
      
      <!-- Choose mutation 1 -->
      <div class="form-group">
            <label for="mutation1">Compare Mutation 1:</label>
            <select class="form-control" name="mutation1" id="mutation1">
               <option value="myh7">MYH7</option>
               <option value="tnnt7">TNNT7</option>
            </select>
      </div>

      <!-- Choose mutation 2 -->
      <div class="form-group">
            <label for="mutation2">Compare Mutation 2:</label>
            <select class="form-control" name="mutation2" id="mutation2">
               <option value="myh7">MYH7</option>
               <option value="tnnt7">TNNT7</option>
            </select>
      </div>

      <!-- Choose graph type -->
      <div class="form-group">
            <label for="graphType">Graph Type:</label>
            <select class="form-control" name="graphType" id="graphType">
               <option value="ft">Force vs Time</option>
               <option value="slt">Sarcomere Length vs Time</option>
               <option value="svcc">Sliding-Velocity vs Calcium-Concentration</option>
               <option value="tfcc">Tension/Force vs Calcium-Concentration</option>
               <option value="ftss">Force/Tension vs Sarcomere-Shortening</option>
               <option value="sst">Sarcomere-Shortening vs Time</option>
            </select>
      </div>
   </div>

   <!-- Data display -->
   <div id="mutation-data" class="d-flex full-width card">

      <div v-if="showDataType === 'all'" id="graph-info">
         <p>All data</p>
      </div>

      <div v-if="showDataType === 'filtered'" id="graph-info">
         <p>Filtered data</p>
      </div>

      <div v-if="showDataType === 'external'" id="graph-info">
         <p>External data</p>
      </div>

      <div v-if="showDataType === 'compared'" id="graph-info">
         <p>Compared data</p>
      </div>

      <div id="Chart">
         <line-chart class="center"></line-chart>
      </div>
   </div>
   

</template>

<script>

import LineChart from "@/components/LineChart";
import { ref } from 'vue';



export default {
   name: "Graphs",
   components: { LineChart },
   

   setup () {
      const showDataType = ref("all");

      function showAllData() {
         showDataType.value = "all";
      }

      function getExternalData() {
         showDataType.value = "external";
      }

      function compareData() {
         showDataType.value = "compared";
      }

      function filterData() {
         showDataType.value = "filtered";
      }

      return { showDataType, showAllData, getExternalData, filterData, compareData }
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
</style>