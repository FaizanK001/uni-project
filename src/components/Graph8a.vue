<template>
  <div>
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
import {firebaseFireStore} from "@/firebase/database";

export default {

  setup() {



var x =ref([]);
      firebaseFireStore
      .collection("researchData")
      .doc("Figure 8")
      .get()
      .then((snapshot)=>{ 
        
         
         x.value = snapshot.data().MYBPC3;
         
         
      })
      
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
        text: "Force Production",
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
        categories: [ 1, 1.6, 2.5, 4, 6.5, 10, 16.5, 26.5, 32 ],
        title: {
          text: "[Ca^2+](umol/L)",
        },
      },
      yaxis: {
        title: {
          text: "Tension(kN/m^2)",
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
        name: "MYBPC3",
        data: [ 8.7738, 13.1713, 16.2, 17.842, 18.8086, 19.338, 19.6064, 19.6615, 19.7146 ],
      },
      {
        name: "TNNI3",
        data: [8.0578,10.6237,12.404,13.5227,14.4732,15.1092,15.4262,15.8511,15.7931]   
        },
     {
       name:"Donor",
       data:[
         0.778,2.8103,7.3885,12.8082,15.766,16.8567,17.1761,17.2829,17.2203]
     },
     {
       name:"smn",
       data:[5.1464,9.0499,10.7397,11.6459,12.042,12.2446,12.2786,12.3479,12.3679]
       },
       {
       name:"MYH7",
       data:[4.9718,8.5806,10.2052,11.1425,11.4807,11.745,11.7339,11.7791,11.8377]
       },{
       name:"TNNT2",
       data:[6.4522,9.2828,10.4473,10.6471,10.7469,10.7802,10.88,10.8135,10.8439]
       },
    
    ]);

    return { chartOptions, series,x};
  },
};
</script>
