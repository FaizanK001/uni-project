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
        categories: [8.00,7.1999,6.36001,5.91164,5.52258,5.12268,4.81641,4.50933] ,
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
        data: [0.05201,0.0578,0.15236,0.37487,0.67797,0.89031,0.99498,0.96872]
      }
        ,{
     name: "lle736Thr",
        data: [0.0084,0.01931,0.08186,0.30865,0.66949,0.91053,0.99356,0.96594]   
        }
    ]);

    return { chartOptions, series};
  },
};
</script>
