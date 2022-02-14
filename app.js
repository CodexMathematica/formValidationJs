const form = document.querySelector('#form');
const displayError = document.querySelector('#error');

form.addEventListener('submit', (e) =>{
    const input = document.querySelector('#name');
    let messages = [];
    let error = false;

    if(input.value.length < 3 || input.value == ''){
        messages.push('nom trop court');
        error =true;
    }

    if(input.value.length > 10){
        messages.push('nom trop long');
        error =true;
    }

    if (!validateName(input.value)){
        messages.push('seul les lettres sont acceptées');
        error = true;
    }

    if(error){
        e.preventDefault();
        displayError.innerText = messages.join(', ') + '.';
    }

})

function validateName(param) {
    const format = /^[a-zA-Z]+$/;
    if(format.test(param)){
        return true;
    }
    return false;
}