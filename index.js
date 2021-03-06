'use strict';

function handleDogGeneratorSubmitButton() {
    $('.dog-generator').submit(function(event) {
        event.preventDefault();
        let selection = $('.1-50').val();
        logDogImages(selection);
        generateDogImages(selection);
    });
}

function generateDropDownMenu() {
    for (let i = 4; i <= 50; i++) {
        $('.1-50').append(
            $('<option></option>').val(i).html(i)
        )
    };
}

function logDogImages(selection) {
    fetch(`https://dog.ceo/api/breeds/image/random/${selection}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function generateDogImages(selection) {
    fetch(`https://dog.ceo/api/breeds/image/random/${selection}`)
        .then(response => response.json())
        .then(responseJson => renderDogImages(responseJson))
}

function renderDogImages(responseJson) {
    let results = [];
    for (let x = 0; x < responseJson.message.length; x++) {
        results.push(`<img src="${responseJson.message[x]}" alt="randomly generated dog image">`);
    };
    results.join('');
    $('.dog-images').html(results);
}

function handleBreedGeneratorSubmitButton() {
    $('.breed-generator').submit(function(event) {
        event.preventDefault();
        let breedSelection = $('#dog-breed').val();
        generateBreed(breedSelection);
    })
}

function generateBreed(breedSelection) {
    fetch(`https://dog.ceo/api/breed/${breedSelection}/images/random`)
        .then(response => response.json())
        .then(responseJson => renderBreedImages(responseJson))
        .catch(generateError());
}

function renderBreedImages(responseJson) {
    $('.breed-images').html(`<img src="${responseJson.message}" alt="randomly generated dog breed image">`);
}

function generateError() {
    $('.breed-images').html(`<img src="https://httpstatusdogs.com/img/404.jpg" alt="error - no dogs found">`);
}

function onPageLoad() {
    handleDogGeneratorSubmitButton();
    handleBreedGeneratorSubmitButton();
    generateDropDownMenu();
}

$(onPageLoad);