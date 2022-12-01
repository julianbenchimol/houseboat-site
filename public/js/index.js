const learnMoreButtons = $(`[id = "learn-more"]`);


learnMoreButtons.on('click', function(event){
    const modelId = event.target.getAttribute('data-id');
    localStorage.setItem('id', modelId);
    window.location = '/public/pages/model-view.html';
})



