const breeds = ["Border Collie", "Bulldog", "Labrador Retriever", "Golden Retriever", "Siberian Husky", "Chihuahua"];
var breedData = [];

const LoadingElement = document.getElementById('loading')
const myChart3Element = document.getElementById('myChart3')
const myChart4Element = document.getElementById('myChart4')

function getGoodWithChildrenData(data) {

    var result = [];
    for(var i = 0; i < data.length; i++) result[i] = data[i].good_with_children;
    return result;
}

function getGoodWithDogsData(data) {

    var result = [];
    for(var i = 0; i < data.length; i++) result[i] = data[i].good_with_other_dogs;
    return result;
}

function getMaxLifeData(data) {

    var result = [];
    for(var i = 0; i < data.length; i++) result[i] = data[i].max_life_expectancy;
    return result;
}

function getMinLifeData(data) {

    var result = [];
    for(var i = 0; i < data.length; i++) result[i] = data[i].min_life_expectancy;
    return result;
}

async function getData() {

    console.log("Fetching breed data...");

    for(let i = 0; i < breeds.length; i++) {

        console.log("Fetching " + breeds[i] + " data...");

        let response = await fetch('https://api.api-ninjas.com/v1/dogs?name=' + breeds[i], {
            method: 'GET',
            headers: { 'X-Api-Key': 'y/e0gvnEXzHuN0bTv8/20g==Jij00mijR3vSk3wt'},
            contentType: 'application/json',
        });

        console.log("Fetched!");
        console.log("Processing " + breeds[i] + " data...");
        let text = await response.text();
        breedData[i] = JSON.parse(text)[0];
    }

    console.log("Fetched breed data!");
    console.log(getGoodWithChildrenData(breedData));

LoadingElement.style.display = 'none';

    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: breeds,
            datasets: [{
                label: "Which dogs are best with children?",
                data: getGoodWithChildrenData(breedData),
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 206, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)",
                    "rgb(255, 159, 64)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: { beginAtZero: true },
            },
        },
    });

    myChart.canvas.parentNode.style.height = '500px';
    myChart.canvas.parentNode.style.width = '500px';

    const ctx2 = document.getElementById("myChart2").getContext("2d");
    const myChart2 = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: breeds,
            datasets: [{
                label: "Which dogs are best with other dogs?",
                data: getGoodWithDogsData(breedData),
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 206, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)",
                    "rgb(255, 159, 64)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: { beginAtZero: true },
            },
        },
    });

    const ctx3 = document.getElementById("myChart3").getContext("2d");
    const myChart3 = new Chart(ctx3, {
        type: "bar",
        data: {
            labels: breeds,
            datasets: [{
                label: "Max life expectancy in years",
                data: getMaxLifeData(breedData),
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 206, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)",
                    "rgb(255, 159, 64)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: { beginAtZero: true },
            },
        },
    });

    const ctx4 = document.getElementById("myChart4").getContext("2d");
    myChart4Element.style.display="none";

    const myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: breeds,
            datasets: [{
                label: "Min Life Expectancy",
                data: getMinLifeData(breedData),
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 206, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(153, 102, 255)",
                  "rgb(255, 159, 64)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: { beginAtZero: true },
            },
        },
    });

}

getData();



var chartToggle = true;
document.getElementById('toggle-button').addEventListener("click", function() {
    if(chartToggle){
        myChart3Element.style.display="none";
        myChart4Element.style.display="block";
    }
    else{
        myChart4Element.style.display="none";
        myChart3Element.style.display="block";
    }
    chartToggle = !chartToggle;
})





        
      