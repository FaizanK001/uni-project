<template>
  <div>
    <apexchart
      type="line"
      height=100%
      width=100%
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
        categories: ['8.00','7.19','6.36','5.91','5.52','5.12','4.81','4.50'] ,
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
