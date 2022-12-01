const modernModelButton = $('#modern-model-button');
const apartmentModelButton = $('#apartment-model-button');

const modernUrl = 'http://localhost:3001/modern-models';
const apartUrl = 'http://localhost:3001/apartment-models';

modernModelButton.on('click', function(){
    window.location = modernUrl
})
apartmentModelButton.on('click', function(){
    window.location = apartUrl;
})