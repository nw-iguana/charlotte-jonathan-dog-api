function handleSubmitButton() {
    $('form').submit(function(event) {
        event.preventDefault();
        let selection = $('.1-50').val();
        console.log('submit button pressed');
        console.log(selection);
        getDogImages(selection);
    });
}

function generateDropDownMenu() {
    for (i = 4; i <= 50; i++) {
        $('.1-50').append(
            $('<option></option>').val(i).html(i)
        )
    }
}

function getDogImages(selection) {
    fetch('https://dog.ceo/api/breeds/image/random/'+selection)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function onPageLoad() {
    handleSubmitButton();
    generateDropDownMenu();
}

$(onPageLoad);