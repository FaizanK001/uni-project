<template>
<div id="graphs">
   <div class="d-flex w-100 align-items-center justify-content-center welcome-box">
      <h1 class="welcome-text">Mutation Data</h1>
   </div>

   <!-- Data navigation bar -->
   <div id="mutation-data-nav" class="d-flex flex-wrap justify-content-center">
      <button type="button" class="data-button btn btn-primary" @click="allData()">Show All Data</button>
      <button type="button" class="data-button btn btn-primary" @click="filterData()">Search Mutation</button>
      <button type="button" class="data-button btn btn-primary" @click="compareData()">Compare Data</button>
      <button type="button" class="data-button btn btn-primary" @click="externalData()">Get External Data</button>
      <button type="button" class="data-button btn btn-primary" @click="showGraph()">Show Graph</button>
      <!--<button type="button" class="data-button btn btn-primary" @click="showGraph()">Show Graph</button>-->
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
         <div class="d-flex graph-card">
            <Graph7a class="graph-styling"/>
            <div class="graph-description">
               <h1 class="graph-title">Force-pCa relations of converter mutations vs. control (A)</h1>
               <p class="graph-text"><b>Mutation:</b> MYH7</p>
               <p class="graph-text"><b>Graph description:</b> Comparison of data of genome mutation MYH7 variant Arg719Trp (Green) against
                                        controlled variable (blue).</p>
               <p class="graph-text"><b>Source Paper/Study:</b> Familial hypertrophic cardiomyopathy - functional variance among individual 
                                        cardiomyocytes as a trigger of FHC-phenotype development
                                        - <i>Institute of Molecular and Cell Physiology, Hannover Medical School, Hannover, Germany;
                                        2014</i></p>
            </div>
         </div>
         <div class="d-flex graph-card">
            <Graph7b class="graph-styling"/>
            <div class="graph-description">
               <h1 class="graph-title">Force-pCa relations of converter mutations vs. control (B)</h1>
               <p class="graph-text"><b>Mutation:</b> MYH7</p>
               <p class="graph-text"><b>Graph description:</b> Comparison of data of genome mutation MYH7 variant Arg723Gly (Green) against
                                        controlled variable (Blue).</p>
               <p class="graph-text"><b>Source Paper/Study:</b> Familial hypertrophic cardiomyopathy - functional variance among individual 
                                        cardiomyocytes as a trigger of FHC-phenotype development
                                        -<i>Institute of Molecular and Cell Physiology, Hannover Medical School, Hannover, Germany;
                                        2014</i></p>
            </div>
         </div>
         <div class="d-flex graph-card">
            <Graph7c class="graph-styling"/>
            <div class="graph-description">
               <h1 class="graph-title">Force-pCa relations of converter mutations vs. control (C)</h1>
               <p class="graph-text"><b>Mutation:</b> MYH7</p>
               <p class="graph-text"><b>Graph description:</b> Comparison of data of genome mutation MYH7 variant Ile736Thr (Green) against
                                        controlled variable (Blue).</p>
               <p class="graph-text"><b>Source Paper/Study:</b> Familial hypertrophic cardiomyopathy - functional variance among individual 
                                        cardiomyocytes as a trigger of FHC-phenotype development
                                        -<i>Institute of Molecular and Cell Physiology, Hannover Medical School, Hannover, Germany;
                                        2014</i></p>
            </div>
         </div>
         <div class="d-flex graph-card">
            <Graph8 class="graph-styling"/>
            <div class="graph-description">
               <h1 class="graph-title">Force Production</h1>
               <p class="graph-text"><b>Mutation:</b> MIXED</p>
               <p class="graph-text"><b>Graph description:</b> General data comparison of different genomes of cardiomyopathic mutations in the
                                        heart.</p>
               <p class="graph-text"><b>Source Paper/Study:</b> Hypertrophic Cardiomyopathy - A Vicious Cycle Triggered by Sarcomere Mutations 
                                        and Secondary Disease Hits
                                        -<i>2019</i></p>
            </div>
         </div>
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
import Graph7a from "../components/Graph7a"
import Graph7b from "../components/Graph7b"
import Graph7c from "../components/Graph7c"
import ApiData from "../components/ApiData";
import ShowGraph from "../components/ShowGraph";
import FilterData from "../components/FilterData";

export default {
   name: "Graphs",
   components: { GraphsDisplay,
                 Graph7a,
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
   border: 1px solid rgba(0,0,0,.125);
   border-radius: .25rem;
}

#mutation-data {
   min-height: 75vh;
   width: 99%;
   margin: 0.5%;
}

.graph-title {
   margin: 20px;
   font-size: 30px;
}

.graph-text {
   text-align: left;
   padding: 15px;
}

.graph-card {
   border: 1px solid rgba(0,0,0,.125);
   border-radius: .25rem;
   min-width: 30vh;
   min-height: 40vh;
   margin-bottom: 20px;
}

.graph-styling {
   width: 40%;
   align-content: right;
}

.graph-description {
   width: 60%;
   border-left: 1px solid rgba(0,0,0,.125);
}

.left {
  display: flex;
  justify-content: left;
  margin-bottom: 160px;
  margin-top: 20px;
}

.data-button {
   margin: 10px;
   width: 18.5%;
}


#graphs {
   min-height: 100vh;
}

.card{
   float: left;
}
</style>