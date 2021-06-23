<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "People",
          data: [28, 20, 22, 30, 30],
          backgroundColor: "#78ebff"
        },
        {
          label: "Job Vaccancy",
          data: [30, 40, 25, 30, 40],
          backgroundColor: "#d9920f"
        }
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Custom Chart Title",
          padding: {
            top: 10,
            bottom: 30
          }
        }
      },
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
