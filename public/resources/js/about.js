var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [{
        label: "Development",
        data: [0, 59, 75, 20, 20, 55, 40],
    }]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 80,
            fontColor: 'black'
        }
    }
};

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
});
// chart2
var densityCanvas = document.getElementById("densityChart");

Chart.defaults.global.defaultFontFamily = "Boogaloo";
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
    label: 'Liveshow (ticket)',
    data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
    backgroundColor: '#1a9bcb',
    borderWidth: 0,
    yAxisID: "y-axis-density"
};

var gravityData = {
    label: 'Album (disk)',
    data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
    backgroundColor: 'blueviolet',
    borderWidth: 0,
    yAxisID: "y-axis-gravity"
};

var planetData = {
    labels: ["Total", "Lastyear", "Lastmonth", "Lastweek", "Week1", "Week2", "Week3", "Week4"],
    datasets: [densityData, gravityData]
};

var chartOptions = {
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 0.6
        }],
        yAxes: [{
            id: "y-axis-density"
        }, {
            id: "y-axis-gravity"
        }]
    }
};

var barChart = new Chart(densityCanvas, {
    type: 'bar',
    data: planetData,
    options: chartOptions
});