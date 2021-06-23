<template>
  <div class="div-charts">
    <div class="div-bar">
      <h3>Bar Chart</h3>
      <BarChart />
    </div>
    <div class="div-bar">
      <h3>Line Chart</h3>
      <LineChart />
    </div>
    <div class="div-bar">
      <h3>Doughnut Chart</h3>
      <DoughnutChart />
    </div>
  </div>
</template>

<script>
import LineChart from "./common/charts/LineChart.vue";
import BarChart from "./common/charts/BarChart.vue";
import DoughnutChart from "./common/charts/DoughnutChart.vue";

export default {
  name: "Dashboard",
  data() {
    return {};
  },
  components: {
    LineChart,
    BarChart,
    DoughnutChart
  },
  mounted() {
    this.options = {};
  }
};
</script>

<style scope>
.div-charts {
  padding: 30px;
  display: flex;
}
.div-bar {
  width: 30%;
  height: 200px;
  margin: 30px;
}
</style>
