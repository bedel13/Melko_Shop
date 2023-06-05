// CountUp.js
const countElement = document.querySelector('.count');
const countValue = parseInt(countElement.getAttribute('data-count'));

const options = {
  duration: 2, // длительность анимации в секундах
};

const countUp = new CountUp(countElement, countValue, options);
if (!countUp.error) {
  countUp.start();
} else {
  console.error(countUp.error);
}

// Chart.js - столбчатая диаграмма
const barChartContext = document.getElementById('myChart').getContext('2d');
const barChartData = {
  labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
  datasets: [{
    label: 'Продажи',
    data: [120, 150, 180, 90, 200, 160],
    backgroundColor: '#4e73df',
    borderColor: '#4e73df',
    borderWidth: 1
  }]
};

const barChartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

new Chart(barChartContext, {
  type: 'bar',
  data: barChartData,
  options: barChartOptions
});

// Chart.js - круговая диаграмма (Pie chart)
const pieChartContext = document.getElementById('myPieChart').getContext('2d');
const pieChartData = {
  labels: ['Продукт A', 'Продукт B', 'Продукт C'],
  datasets: [{
    data: [30, 40, 30],
    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
    borderWidth: 1
  }]
};

const pieChartOptions = {
  responsive: true
};

new Chart(pieChartContext, {
  type: 'pie',
  data: pieChartData,
  options: pieChartOptions
});
