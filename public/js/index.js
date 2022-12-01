const learnMoreButtons = $(`[id = "learn-more"]`);
const modelTitle = $('#model-title');
const modelPrice = $('#model-price');
const modelLength = $('#model-length');
const modelWidth = $('#model-width');
const modelHeight = $('#model-height');
const modelHeightWater = $('model-height-water');
const modelDraft = $('#model-draft');

learnMoreButtons.on('click', function(event){
    const modelId = event.target.getAttribute('data-id');
    getModelsById(modelId);

})

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
    .then(data => setHtml(data));
}