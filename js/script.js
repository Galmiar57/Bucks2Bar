window.onload = function () {

    var ctx = document.getElementById('myChart').getContext('2d');
    var incomeData = [];
    var expensesData = [];

    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: incomeData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: expensesData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('download').addEventListener('click', function() {
        // Get the canvas element
        var canvas = document.getElementById('myChart');

        // Create a new anchor element
        var link = document.createElement('a');

        // Set the href attribute to the Base64 encoded string
        link.href = canvas.toDataURL('image/png');

        // Set the download attribute to the desired filename
        link.download = 'chart.png';

        // Trigger the download
        link.click();
    });

    document.getElementById('chartTab').addEventListener('click', function () {

        // Get income and expenses for each month
        var incomeJanuary = Number(document.getElementById('income-january').value);
        var expensesJanuary = Number(document.getElementById('expenses-january').value);

        var incomeFebruary = Number(document.getElementById('income-february').value);
        var expensesFebruary = Number(document.getElementById('expenses-february').value);

        var incomeMarch = Number(document.getElementById('income-march').value);
        var expensesMarch = Number(document.getElementById('expenses-march').value);

        var incomeApril = Number(document.getElementById('income-april').value);
        var expensesApril = Number(document.getElementById('expenses-april').value);

        var incomeMay = Number(document.getElementById('income-may').value);
        var expensesMay = Number(document.getElementById('expenses-may').value);

        var incomeJune = Number(document.getElementById('income-june').value);
        var expensesJune = Number(document.getElementById('expenses-june').value);

        var incomeJuly = Number(document.getElementById('income-july').value);
        var expensesJuly = Number(document.getElementById('expenses-july').value);

        var incomeAugust = Number(document.getElementById('income-august').value);
        var expensesAugust = Number(document.getElementById('expenses-august').value);

        var incomeSeptember = Number(document.getElementById('income-september').value);
        var expensesSeptember = Number(document.getElementById('expenses-september').value);

        var incomeOctober = Number(document.getElementById('income-october').value);
        var expensesOctober = Number(document.getElementById('expenses-october').value);

        var incomeNovember = Number(document.getElementById('income-november').value);
        var expensesNovember = Number(document.getElementById('expenses-november').value);

        var incomeDecember = Number(document.getElementById('income-december').value);
        var expensesDecember = Number(document.getElementById('expenses-december').value);


        // Store the income and expenses data in arrays
        var incomeData = [incomeJanuary, incomeFebruary, incomeMarch, incomeApril, incomeMay, incomeJune, incomeJuly, incomeAugust, incomeSeptember, incomeOctober, incomeNovember, incomeDecember];
        var expensesData = [expensesJanuary, expensesFebruary, expensesMarch, expensesApril, expensesMay, expensesJune, expensesJuly, expensesAugust, expensesSeptember, expensesOctober, expensesNovember, expensesDecember];

        // Update the data in the chart
        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;

        // Update the chart to reflect the new data
        myChart.update();
    });

}