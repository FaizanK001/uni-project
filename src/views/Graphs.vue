<template>
<div class="lineChart">
    <h3>Line Chart Example</h3>
  <div>
    <line-chart class="center"></line-chart>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from "@/components/LineChart";

export default {
  components: {
    LineChart,
  
  },
}
</script>

<style>

.center {
  display: flex;
  justify-content: center;
  margin-bottom: 154px;
  margin-top: 100px;
}
</style>