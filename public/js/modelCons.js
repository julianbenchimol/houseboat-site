const modelTitle = $('#model-title');
const modelPrice = $('#model-price');
const modelLength = $('#model-length');
const modelWidth = $('#model-width');
const modelHeight = $('#model-height');
const modelHeightWater = $('model-height-water');
const modelDraft = $('#model-draft');

document.addEventListener('DOMContentLoaded', getModelsById());

function getModelsById(){
    const id = localStorage.getItem('id');
    
    fetch(`http://localhost:3001/api/models/${id}`, {
        method: 'GET'
    })
    .then(results => results.json())
    .then(data => createPage(data));
}

function createPage(modelData){
    modelTitle.text(`${modelData[0].name}`);
    modelPrice.text(`$${modelData[0].price}`);
    modelLength.text(`${modelData[0].length}ft.`);
    modelWidth.text(`${modelData[0].width}ft.`);
    modelHeight.text(`${modelData[0].height}ft.`);
    modelHeightWater.text(`${modelData[0].heightWater}ft.`);
    modelDraft.text(`${modelData[0].draft}ft.`);
}