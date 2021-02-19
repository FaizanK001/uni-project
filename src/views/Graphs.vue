<template>

<div id="graphs" class="d-flex align-content-start flex-wrap">

   <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text"></h1>
   </div>     

   <!-- Data navigation bar -->
   <div id="mutation-data-nav" class="full-width card">
      <button type="button" class="data-button btn btn-primary">Show all data</button>
      <button type="button" class="data-button btn btn-primary">Filter mutation data</button>
      <button type="button" class="data-button btn btn-primary">Search graph type</button>
      <button type="button" class="data-button btn btn-primary">Show all data</button>
      <button type="button" class="data-button btn btn-primary">Show all data</button>
      
      <!-- Choose mutation 1 -->
      <div class="input-group">
         <div class="input-group-prepend">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mutation 1</button>
            <div class="dropdown-menu">
               <a class="dropdown-item" href="#">MYH7</a>
               <a class="dropdown-item" href="#">TNNT3</a>
            </div>
         </div>
         <input type="text" class="form-control" aria-label="Text input with dropdown button">
      </div>
   </div>

   <!-- Data display -->
   <div id="mutation-data" class="d-flex full-width card">

      <div id="chart-box" class="card">
         <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      </div>

      <div id="graph-info" class="card">
      </div>
   </div>
   
</div>
</template>

<script>

export default {

   setup() {

      return { };
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