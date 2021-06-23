<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Passed Children",
          backgroundColor: "#f87979",
          data: [28, 20, 22, 30, 30]
        },
        {
          label: "Total Children",
          backgroundColor: "#42cbf5",
          data: [30, 40, 25, 30, 40]
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
