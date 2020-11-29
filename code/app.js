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

}

function updateF1(e) {
    console.log(e.target.value);
    input1 = e.target.value
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

// Choosing the most likely advice outcome given values of the feature variables

var g = jsbayes.newGraph();

// outcomes/classes
var a1 = g.addNode('a1', ['true', 'false']); // Advice 1 = Join a club related to CS
var a2 = g.addNode('a1', ['true', 'false']); // Advice 2 = Start looking for internships
var a3 = g.addNode('a1', ['true', 'false']); // Advice 3 = Work on personal project

// feature variables
var f1 = g.addNode('f1', ['yes', 'no']); // feature 1, Q1
var f2 = g.addNode('f2', ['first', 'second', 'third', 'fourth']); // feature 2, Q2
var f3 = g.addNode('f3', ['low', 'passing', 'average', 'high']); // feature 3, Q3
var f4 = g.addNode('f4', ['none', 'acm', 'rover', 'oss', 'game', 'data']); // feature 4, Q4
var f5 = g.addNode('f5', ['yes', 'no']); // feature 5, Q5

// Define prior probabilities
a1.cpt = [0.6, 0.4]; // [ P(+a1), P(-a1) ]
a2.cpt = [0.8, 0.2]; // [ P(+a2), P(-a2) ]
a3.cpt = [0.5, 0.5]; // [ P(+a3), P(-a3) ]

// Define conditional probabilities for all features
f1.addParent(a1)
 .addParent(a2)
 .addParent(a3);

f1.setCpt([
    [0.2, 0.8], // P(f1=yes|-a1,-a2,-a3), P(f1=no|-a1,-a2,-a3)  
    [0.6, 0.4], // P(f1=yes|-a1,-a2,+a3), P(f1=no|-a1,-a2,+a3)
    [], // P(f1=yes|-a1,+a2,-a3), P(f1=no|-a1,+a2,-a3)
    [], // P(f1=yes|-a1,+a2,+a3), P(f1=no|-a1,+a2,+a3)
    [], // P(f1=yes|+a1,-a2,-a3), P(f1=no|+a1,-a2,-a3)
    [], // P(f1=yes|+a1,-a2,+a3), P(f1=no|+a1,-a2,+a3)
    [], // P(f1=yes|+a1,+a2,-a3), P(f1=no|+a1,+a2,-a3)
    [], // P(f1=yes|+a1,+a2,+a3), P(f1=no|+a1,+a2,+a3)
]);

/*f1.cpt = [
    [
        [], //[ P(f1=no|-a1,-a2), P(f1=yes|-a1,-a2) ]
        []  //[ P(f1=no|-a1,+a2), P(f1=yes|-a1,+a2) ]
    ],
    [
        [], //[ P(f1=no|+a1,-a1), P(f1=yes|+a1,-a2) ]
        []  //[ P(f1=no|+a1,+a2), P(f1=yes|+a1,+a2) ]
            
    ]
]*/


// Use Naive Bayes Classifier


