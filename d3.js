var name = 'golden retriever'

fetch('https://api.api-ninjas.com/v1/dogs?name=' + name, {
    method: 'GET',
    headers: { 'X-Api-Key': 'y/e0gvnEXzHuN0bTv8/20g==Jij00mijR3vSk3wt'},
    contentType: 'application/json',
})
.then(response => response.text())
.then(text => console.log(text))