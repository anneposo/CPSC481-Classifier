var f1, f2, f3, f4, f5;
//var advice1, advice2, advice3;


window.onload=function() {
    // Selectors
    const formButton = document.querySelector('.form-button');
    const selectOption1= document.querySelector(".f1");
    const selectOption2= document.querySelector(".f2");
    const selectOption3= document.querySelector(".f3");
    const selectOption4= document.querySelector(".f4");
    const selectOption5= document.querySelector(".f5");

    // Event Listeners
    formButton.addEventListener('click', submitForm);
    formButton.addEventListener('click', togglePopup);
    selectOption1.addEventListener('click', updateF1);
    selectOption2.addEventListener('click', updateF2);
    selectOption3.addEventListener('click', updateF3);
    selectOption4.addEventListener('click', updateF4);
    selectOption5.addEventListener('click', updateF5);
}


// Functions
function submitForm(e) {
    e.preventDefault(); // prevents form from submitting/refreshing page
    console.log("Feature 1 =", f1);
    console.log("Feature 2 =", f2);
    console.log("Feature 3 =", f3);
    console.log("Feature 4 =", f4);
    console.log("Feature 5 =", f5);
    calculateProb();
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function updateF1(e) {
    console.log(e.target.value);
    f1 = e.target.value
}

function updateF2(e) {
    f2 = e.target.value
}

function updateF3(e) {
    f3 = e.target.value
}

function updateF4(e) {
    f4 = e.target.value
}

function updateF5(e) {
    f5 = e.target.value
}



