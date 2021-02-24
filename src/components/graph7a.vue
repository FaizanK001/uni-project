<template>
  <div class="card">
    <apexchart
      type="line"
      height="350"
      width="500"
      :options="chartOptions"
      :series="series"
      
    ></apexchart>
  </div>
  
</template>

<script>
import {  ref } from "vue";

export default {

  setup() {
      
    const chartOptions = ref({
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
        text: " Force-pCa relations of converter mutations vs. control",
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
        categories: ['8','6.97','6.42','6.05','5.74','5.32','4.88','4.50','2'],
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
//chartOptions.value.xaxis.categories.push(x);
    const series = ref([
        {
        name: "Control",
        data: [0.00522,0.01833,0.0823,0.24135,0.53981,0.8843,0.98308,0.9966]
      }
        ,{
     name: "Arg719Trp",
        data: [0.02438,0.04098,0.07138,0.1464,0.31107,0.66669,0.91757,0.98433]   
        }
    ]);

    return { chartOptions, series};
  },
};
</script>
