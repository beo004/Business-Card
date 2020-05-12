function printcompany() {
    document.getElementById('outputCompany').innerHTML = inputCompany.value;
}

function printMessage() {
    document.getElementById('outputMessage').innerHTML = inputMessage.value;
}

function changeBg() {
   var bgColor = document.getElementById('inputBg').value;
    document.getElementById('card').style.background = bgColor;
}

function changeText() {
   var textColor = document.getElementById('inputtext').value;
    document.getElementById('card').style.color = textColor;
}

function textAlign(selected_id) {
    document.getElementById('card').className = selected_id;
}

function printName() {
    document.getElementById('outputName').innerHTML = inputname.value;
}

function printTitle() {
    document.getElementById('outputTitle').innerHTML = inputTitle.value;
}

function printEmail() {
    document.getElementById('outputEmail').innerHTML = "Email: " + inputEmail.value;
}

function printTele() {
    document.getElementById('outputTele').innerHTML = 'Tel: ' + inputTele.value;
}

function formSubmit() {
    if (!inputname.value){
        alert('Please Complete all required sections!');
    }else if(!inputCompany.value){
        alert('Please Complete all required sections!');
    } else if(!inputEmail.value){
        alert('Please Complete all required sections!');
    }else if(!inputTele.value){
        alert('Please Complete all required sections!');
    }
}
function formReset(){
    window.location.reload();
}
