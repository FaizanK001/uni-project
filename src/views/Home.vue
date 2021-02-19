<template>
 <h3>Line Chart Example</h3>
  <div>
    <line-chart class="center"></line-chart>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from "@/components/LineChart";

export default {
  name: 'Home',
  components: {
    LineChart,
  
  },
}
</script>

<style>

.center {
  display: flex;
  justify-content: center;
}


</style>

