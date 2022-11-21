const breeds = ["Border Collie", "Bulldog", "Labrador Retriever", "Golden Retriever", "Siberian Husky", "Chihuahua"];
var breedData = [];

const LoadingElements = document.getElementsByClassName('loading');
const dataArt1Elment = document.getElementById('data-art-1');
const dataArt2Elment = document.getElementById('data-art-2');

function weeksAlive(data) {

    var result = [];
    for(var i = 0; i < data.length; i++) result[i] = data[i].max_life_expectancy * 52;
    return result;
}

function imageBarking(data) {

    var result = [];
    for(var i = 0; i < data.length; i++) result[i] = { image: data[i].image_link, barking: data[i].barking };
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
        console.log(breedData);
    }

    console.log("Fetched breed data!");

    LoadingElements[0].style.display = 'none';
    LoadingElements[1].style.display = 'none';
    const weeksAliveData = weeksAlive(breedData);
    for(var i = 0; i < weeksAliveData[0]; i++) {

        let block = document.createElement("div");
        dataArt1Elment.appendChild(block);
    }

    const imageBarkingData = imageBarking(breedData);
    for(var i = 0; i < imageBarkingData.length; i++) {

        let image = document.createElement("img");
        image.setAttribute("src", imageBarkingData[i].image);
        image.style.transform = "scale(" + imageBarkingData[i].barking / 5 + ")";
        dataArt2Elment.appendChild(image);
    }
}

getData();





        
      