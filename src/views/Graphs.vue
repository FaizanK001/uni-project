<template>
<div id="Chart">
    <h3>Chart Example</h3>
    <line-chart class="center"></line-chart>
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

<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin-bottom: 160px;
  margin-top: 20px;
}
#Chart h3 {
    padding-top: 30px;
    font-size: 30px;
    padding-bottom: 25px;
    Color:rgb(243, 24, 24);
    font-weight: bold;
}

</style>