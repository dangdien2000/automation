 function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ctx_live = document.getElementById("phcanvas");
var myChart = new Chart(ctx_live, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      data: [],
      borderWidth: 1,
      borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
   
      fill: false,
      backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
      label: 'pH',
    }]
  },
  options: {
    responsive: false,
    title: {
      display: true,
      text: "",
    },
    legend: {
      display: false
    },

    scales: {
      x: {
        display: true,
        text: 'Value',
        title: {
          display: true,
          text:'',
          color: '#911',
          font: {
            family: 'Comic Sans MS',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: {top: 0, left: 0, right: 0, bottom: 0}
        }

      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
          color: '#191',
          font: {
            family: 'Times',
            size: 20,
            style: 'normal',
            lineHeight: 1.2
          },
          padding: {top: 30, left: 0, right: 0, bottom: 0}
        },
        ticks: { min: 0 },
      }
    
  },
  }
});
setInterval(function() {
  url= "IOServer.htm";
  $.getJSON(url, function(data){
    myChart.data.labels.push("");
    myChart.data.datasets[0].data.push(data["pHChart"]);
    myChart.update();
  })
},3000);
