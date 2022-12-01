const apiButton = $('#call-api');

const modernUrl = 'http://localhost:3001/modern-models';
const apartUrl = 'http://localhost:3001/apartment-models';

const modelApiUrl = 'http://localhost:3001/models'

function getModels(){
    fetch(`http://localhost:3001/api/models`, {
        method: 'GET'
    })
    .then(results => results.json())
    .then(data => console.log(data))
}

function getModelsById(id){
    fetch(`http://localhost:3001/api/models/${id}`, {
        method: 'GET'
    })
    .then(results => results.json())
    .then(data => console.log(data))
}