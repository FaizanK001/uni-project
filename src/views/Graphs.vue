<template>


   <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text"></h1>
   </div>

   <!-- Data navigation bar -->
   <div id="mutation-data-nav" class="full-width card">
      <button type="button" class="data-button btn btn-primary" @click="showAllData()">Show all data</button>
      <button type="button" class="data-button btn btn-primary" @click="filterData()">Filter mutation data</button>
      <button type="button" class="data-button btn btn-primary" @click="graphType()">Graph Type</button>
      <button type="button" class="data-button btn btn-primary" @click="graphType()">Show all data</button>
      <button type="button" class="data-button btn btn-primary" @click="showAllData()">Show all data</button>
      
      <!-- Choose mutation 1 -->
      <div class="form-group">
            <label for="mutations">Mutation:</label>
            <select class="form-control" name="mutations" id="cars">
               <option value="myh7">MYH7</option>
               <option value="tnnt7">TNNT7</option>
            </select>
      </div>

      <!-- Choose mutation 2 -->
      <div class="form-group">
            <label for="mutations">Mutation:</label>
            <select class="form-control" name="mutations" id="cars">
               <option value="myh7">MYH7</option>
               <option value="tnnt7">TNNT7</option>
            </select>
      </div>
   </div>

   <!-- Data display -->
   <div id="mutation-data" class="d-flex full-width card">

      <div id="chart-box" class="card">
         <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      </div>
<div id="Chart">
    <h3>Chart Example</h3>
    <line-chart class="center"></line-chart>
</div>
   
   
</div>
</template>

<script>

import LineChart from "@/components/LineChart";



export default {
   name: "Graphs",
   components: { LineChart },
   

   setup () {

      function showAllData() {
         return 1;
      }

      return { showAllData }
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