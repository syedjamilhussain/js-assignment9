function alert1(){
  alert("hello welcome to event assignment chapter number 43 to 48");
}


function alert2(){

    alert("thankyou so much for purchasing from us")
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}



var counterValue = 0;

function updateCounterDisplay() {
    document.getElementById("counter").textContent = counterValue;
}

function increaseCounter() {
    counterValue++;
    updateCounterDisplay();
}

function decreaseCounter() {
    counterValue--;
    updateCounterDisplay();
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}