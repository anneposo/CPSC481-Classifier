var input1, input2, input3, input4, input5;

// Selectors
const formButton = document.querySelector('.form-button');
const selectOption1= document.querySelector(".f1");
const selectOption2= document.querySelector(".f2");
const selectOption3= document.querySelector(".f3");
const selectOption4= document.querySelector(".f4");
const selectOption5= document.querySelector(".f5");

// Event Listeners
formButton.addEventListener('click', submitForm);
selectOption1.addEventListener('click', updateF1);
selectOption2.addEventListener('click', updateF2);
selectOption3.addEventListener('click', updateF3);
selectOption4.addEventListener('click', updateF4);
selectOption5.addEventListener('click', updateF5);

// Functions
function submitForm(e) {
    e.preventDefault(); // prevents form from submitting/refreshing page
    console.log("Feature 1 =", input1);
    console.log("Feature 2 =", input2);
    console.log("Feature 3 =", input3);
    console.log("Feature 4 =", input4);
    console.log("Feature 5 =", input5);
    //print_probF1();

}

function updateF1(e) {
    console.log(e.target.value);
    input1 = e.target.value
    // searches for conditional probabilities based on user input
    // and stores probability in prob_f1_givenAx_true and prob_f1_givenAx_false
    assign_prob_f1();
}

function updateF2(e) {
    input2 = e.target.value
}

function updateF3(e) {
    input3 = e.target.value
}

function updateF4(e) {
    input4 = e.target.value
}

function updateF5(e) {
    input5 = e.target.value
}



