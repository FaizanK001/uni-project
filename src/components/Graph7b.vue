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
        categories: ['8','7.51','7.09','6.84','6.50','5.97','5.38','4.5'],
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
        data: [0,0.0125,0.03736,0.08274,0.24696,0.73128,0.96787,1]
      }
        ,{
     name: "Arg723Gly",
        data: [0,0.01437,0.02346,0.05147,0.14558,0.56625,0.91277,1]   
        }
    ]);

    return { chartOptions, series};
  },
};
</script>
