 // get element from DOM : inputs, textarea and alert div and submit button
var alertMessage = document.getElementById('alert');
var inputFirstName = document.getElementById('firstName');
var inputLastName = document.getElementById('lastName');
var inputGender = document.getElementsByName('gender');
var textAreaMessage = document.getElementById('message');
var submitBtnForm = document.querySelector('.btn-submit');

// add event listener to inputs&textarea and button
inputFirstName.addEventListener('keyup', checkInputFirstNameFunction);
inputLastName.addEventListener('keyup', checkInputLastNameFunction);
textAreaMessage.addEventListener('keyup', checkTextAreaMessageFunction);
submitBtnForm.addEventListener('click', submitForm);

function checkInputFirstNameFunction(e){
   
    if(inputFirstName== 0){
        
        inputFirstName.classList.add('is-invalid');
    } else {
        inputFirstName.classList.add('valid');
    }
}

function checkInputLastNameFunction(e){
    if(e.target.value == 0){
        inputLastName.classList.add('is-invalid');
    } else {
        inputLastName.classList.add('valid');
    }
}

function checkTextAreaMessageFunction(e){
    if(e.target.value == 0){
        textAreaMessage.classList.add('is-invalid');
    } else {
        textAreaMessage.classList.add('valid');
    }
    if (e.keyCode == 13) {
        submitForm(e);
    }
    e.preventDefault();
}

function submitForm(e){
    if  ( 
        inputFirstName.value == 0 ||   
        inputLastName.value == 0 || 
        textAreaMessage == 0 
        )
    {
        inputFirstName.classList.add('is-invalid');
        inputLastName.classList.add('is-invalid');
        textAreaMessage.classList.add('is-invalid');
    } 
    else {    
        inputFirstName.classList.remove('is-invalid');
        inputLastName.classList.remove('is-invalid');
        textAreaMessage.classList.remove('is-invalid');  
            alertMessage.classList.add('alert-success');
            alertMessage.innerHTML = 
            "<span class='check'>✓</span>" +
            "Thank you for contacting us, " +
                inputFirstName.value +
                "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>"+
                "</button>";
            console.log('Firstname : ' + inputFirstName.value);
            console.log('Lastname : ' + inputLastName.value);
            for (i = 0; i < inputGender.length; i++) {
                if (inputGender[i].checked) {
                    console.log('Gender : ' + inputGender[i].value);       
                }        
            }  
            console.log('Message : ' + textAreaMessage.value);
    }
    e.preventDefault();
}