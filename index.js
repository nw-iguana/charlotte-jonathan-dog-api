'use strict';

function handleSubmitButton() {
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
    fetch('https://dog.ceo/api/breeds/image/random/'+ selection)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function generateDogImages(selection) {
    fetch('https://dog.ceo/api/breeds/image/random/'+ selection)
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

function onPageLoad() {
    handleSubmitButton();
    generateDropDownMenu();
}

$(onPageLoad);