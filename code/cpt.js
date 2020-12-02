// Choosing the most likely advice outcome given values of the feature variables

var g = jsbayes.newGraph();

// outcomes/classes
var a1 = g.addNode('a1', ['true', 'false']); // Advice 1 = Join a club related to CS
var a2 = g.addNode('a1', ['true', 'false']); // Advice 2 = Start looking for internships
var a3 = g.addNode('a1', ['true', 'false']); // Advice 3 = Work on personal project

// feature variables
var f1_givenA1 = g.addNode('f1_givenA1', ['yes', 'no']); // feature 1, Q1
var f1_givenA2 = g.addNode('f1_givenA2', ['yes', 'no']); // feature 1, Q1
var f1_givenA3 = g.addNode('f1_givenA3', ['yes', 'no']); // feature 1, Q1

var f2_givenA1 = g.addNode('f2_givenA1', ['first', 'second', 'third', 'fourth']); // feature 2, Q2
var f2_givenA2 = g.addNode('f2_givenA2', ['first', 'second', 'third', 'fourth']); // feature 2, Q2
var f2_givenA3 = g.addNode('f2_givenA3', ['first', 'second', 'third', 'fourth']); // feature 2, Q2

var f3_givenA1 = g.addNode('f3_givenA1', ['low', 'passing', 'average', 'high']); // feature 3, Q3
var f3_givenA2 = g.addNode('f3_givenA2', ['low', 'passing', 'average', 'high']); // feature 3, Q3
var f3_givenA3 = g.addNode('f3_givenA3', ['low', 'passing', 'average', 'high']); // feature 3, Q3

var f4_givenA1 = g.addNode('f4_givenA1', ['none', 'acm', 'rover', 'oss', 'game', 'data']); // feature 4, Q4
var f4_givenA2 = g.addNode('f4_givenA2', ['none', 'acm', 'rover', 'oss', 'game', 'data']); // feature 4, Q4
var f4_givenA3 = g.addNode('f4_givenA3', ['none', 'acm', 'rover', 'oss', 'game', 'data']); // feature 4, Q4

var f5_givenA1 = g.addNode('f5_givenA1', ['yes', 'no']); // feature 5, Q5
var f5_givenA2 = g.addNode('f5_givenA2', ['yes', 'no']); // feature 5, Q5
var f5_givenA3 = g.addNode('f5_givenA3', ['yes', 'no']); // feature 5, Q5

// Define prior probabilities
a1.cpt = [0.6, 0.4]; // [ P(+a1), P(-a1) ]
a2.cpt = [0.8, 0.2]; // [ P(+a2), P(-a2) ]
a3.cpt = [0.5, 0.5]; // [ P(+a3), P(-a3) ]

// Define conditional probabilities for all features
f1_givenA1.addParent(a1);
f1_givenA2.addParent(a2);
f1_givenA3.addParent(a3);
f1_givenA1.cpt = [
    [0.9, 0.1], // [ P(f1=yes|+a1), P(f1=no|+a1) ]
    [0.3, 0.7]  // [ P(f1=yes|-a1), P(f1=no|-a1) ]
];
f1_givenA2.cpt = [
    [0.32, 0.68], // [ P(f1=yes|+a2), P(f1=no|+a2) ]
    [0.96, 0.13]  // [ P(f1=yes|-a2), P(f1=no|-a2) ]
];
f1_givenA3.cpt = [
    [0.12, 0.88], // [ P(f1=yes|+a3), P(f1=no|+a3) ]
    [0.89, 0.11]  // [ P(f1=yes|-a3), P(f1=no|-a3) ]
];

f2_givenA1.addParent(a1);
f2_givenA1.cpt = [
    [0.4, 0.3, 0.2, 0.1], // [ P(f2=first|+a1), P(f2=second|+a1), P(f2=third|+a1), P(f2=fourth|+a1) ]
    [0.1, 0.2, 0.2, 0.5]  // [ P(f2=first|-a1), P(f2=second|-a1), P(f2=third|-a1), P(f2=fourth|-a1) ]
];

f3_givenA1.addParent(a1);
f3_givenA1.cpt = [
    [0.1, 0.1, 0.3, 0.5 ], // [ P(f3=low|+a1), P(f3=passing|+a1), P(f3=average|+a1), P(f3=high|+a1) ]
    [0.4, 0.4, 0.1, 0.1]  // [ P(f3=low|-a1), P(f3=passing|-a1), P(f3=average|-a1), P(f3=high|-a1) ]
];

f4_givenA1.addParent(a1);
f4_givenA1.cpt = [
    [0.8, 0.04, 0.04, 0.04, 0.04, 0.04], // [ P(f4=none|+a1), P(f4=acm|+a1), P(f4=rover|+a1), P(f4=oss|+a1), P(f4=game|+a1), P(f4=data|+a1) ]
    [0.1, 0.18, 0.18, 0.18, 0.18, 0.18]  // [ P(f4=none|-a1), P(f4=acm|-a1), P(f4=rover|-a1), P(f4=oss|-a1), P(f4=game|-a1), P(f4=data|-a1) ]
];

f5_givenA1.addParent(a1);
f5_givenA1.cpt = [
    [0.5, 0.5], // [ P(f5=yes|+a1), P(f1=no|+a1) ]
    [0.8, 0.2]  // [ P(f5=yes|-a1), P(f1=no|-a1) ]
];


// Get conditional probabilities from user's input
var prob_f1_givenA1_true;  // P(f1=input1|+a1)
var prob_f1_givenA1_false; // P(f1=input1|-a1)
var prob_f1_givenA2_true;  // P(f1=input1|+a2)
var prob_f1_givenA2_false; // P(f1=input1|-a2)
var prob_f1_givenA3_true;  // P(f1=input1|+a3)
var prob_f1_givenA3_false; // P(f1=input1|-a3)

var prob_f2_givenA1_true;  // P(f2=input1|+a1)
var prob_f2_givenA1_false; // P(f2=input1|-a1)

// search for P(f1=yes) or P(f1=no) in CPT given user's input for f1
function assign_prob_f1() {
    if (input1 == 'yes') { // if user input 'yes' for Q1
        prob_f1_givenA1_true = f1_givenA1.cpt[0][0];  // get probability for P(f1=yes|+a1)
        prob_f1_givenA1_false = f1_givenA1.cpt[1][0]; // get probability for P(f1=yes|-a1)
        prob_f1_givenA2_true = f1_givenA2.cpt[0][0];  // get probability for P(f1=yes|+a2)
        prob_f1_givenA2_false = f1_givenA2.cpt[1][0]; // get probability for P(f1=yes|-a2)
        prob_f1_givenA3_true = f1_givenA3.cpt[0][0];  // get probability for P(f1=yes|+a3)
        prob_f1_givenA3_false = f1_givenA3.cpt[1][0]; // get probability for P(f1=yes|-a3)
    }
    else { // else user input 'no' for Q1
        prob_f1_givenA1_true = f1_givenA1.cpt[0][1];  // get probability for P(f1=no|+a1)
        prob_f1_givenA1_false = f1_givenA1.cpt[1][1]; // get probability for P(f1=no|-a1)
        prob_f1_givenA2_true = f1_givenA2.cpt[0][1];  // get probability for P(f1=yes|+a2)
        prob_f1_givenA2_false = f1_givenA2.cpt[1][1]; // get probability for P(f1=yes|-a2)
        prob_f1_givenA3_true = f1_givenA3.cpt[0][1];  // get probability for P(f1=yes|+a3)
        prob_f1_givenA3_false = f1_givenA3.cpt[1][1]; // get probability for P(f1=yes|-a3)
    }
    console.log("P(f1=%s|+a1) = %f", input1, prob_f1_givenA1_true);
    console.log("P(f1=%s|-a1) = %f", input1, prob_f1_givenA1_false);
    console.log("P(f1=%s|+a2) = %f", input1, prob_f1_givenA2_true);
    console.log("P(f1=%s|-a2) = %f", input1, prob_f1_givenA2_false);
    console.log("P(f1=%s|+a3) = %f", input1, prob_f1_givenA3_true);
    console.log("P(f1=%s|-a3) = %f", input1, prob_f1_givenA3_false);
}

function assign_prob_f2() {
    if (input2 == 'first') { 
        prob_f2_givenA1_true = f2_givenA1.cpt[0][0];  // get probability for P(f2=first|+a1)
        prob_f2_givenA1_false = f2_givenA1.cpt[1][0]; // get probability for P(f2=first|-a1)
    }
    else if (input2 == 'second') { 
        prob_f2_givenA1_true = f2_givenA1.cpt[0][1];  // get probability for P(f2=second|+a1)
        prob_f2_givenA1_false = f2_givenA1.cpt[1][1]; // get probability for P(f2=second|-a1)
    }
    else if (input2 == 'third') {
        prob_f2_givenA1_true = f2_givenA1.cpt[0][2];  // get probability for P(f2=third|+a1)
        prob_f2_givenA1_false = f2_givenA1.cpt[1][2]; // get probability for P(f2=third|-a1)
    }
    else { // fourth
        prob_f2_givenA1_true = f2_givenA1.cpt[0][3];  // get probability for P(f2=fourth|+a1)
        prob_f2_givenA1_false = f2_givenA1.cpt[1][3]; // get probability for P(f2=fourth|-a1)
    }
    console.log("P(f2=%s|+a1) = %f", input2, prob_f2_givenA1_true);
    console.log("P(f2=%s|-a1) = %f", input2, prob_f2_givenA1_false);
}

function assign_prob_f3() {
    if (input3 == 'low') { 
        prob_f3_givenA1_true = f3_givenA1.cpt[0][0];  // get probability for P(f3=low|+a1)
        prob_f3_givenA1_false = f3_givenA1.cpt[1][0]; // get probability for P(f3=low|-a1)
    }
    else if (input3 == 'passing') { 
        prob_f3_givenA1_true = f3_givenA1.cpt[0][1];  // get probability for P(f3=passing|+a1)
        prob_f3_givenA1_false = f3_givenA1.cpt[1][1]; // get probability for P(f3=passing|-a1)
    }
    else if (input3 == 'average') {
        prob_f3_givenA1_true = f3_givenA1.cpt[0][2];  // get probability for P(f3=average|+a1)
        prob_f3_givenA1_false = f3_givenA1.cpt[1][2]; // get probability for P(f3=average|-a1)
    }
    else { // high
        prob_f3_givenA1_true = f3_givenA1.cpt[0][3];  // get probability for P(f3=high|+a1)
        prob_f3_givenA1_false = f3_givenA1.cpt[1][3]; // get probability for P(f3=high|-a1)
    }
    console.log("P(f3=%s|+a1) = %f", input3, prob_f3_givenA1_true);
    console.log("P(f3=%s|-a1) = %f", input3, prob_f3_givenA1_false);
}

function assign_prob_f4() {
    if (input4 == 'none') { 
        prob_f4_givenA1_true = f4_givenA1.cpt[0][0];  // get probability for P(f4=none|+a1)
        prob_f4_givenA1_false = f4_givenA1.cpt[1][0]; // get probability for P(f4=none|-a1)
    }
    else if (input4 == 'acm') { 
        prob_f4_givenA1_true = f4_givenA1.cpt[0][1];  // get probability for P(f4=acm|+a1)
        prob_f4_givenA1_false = f4_givenA1.cpt[1][1]; // get probability for P(f4=acm|-a1)
    }
    else if (input4 == 'rover') {
        prob_f4_givenA1_true = f4_givenA1.cpt[0][2];  // get probability for P(f4=rover|+a1)
        prob_f4_givenA1_false = f4_givenA1.cpt[1][2]; // get probability for P(f4=rover|-a1)
    }
    else if (input4 == 'oss') {
        prob_f4_givenA1_true = f4_givenA1.cpt[0][3];  // get probability for P(f4=oss|+a1)
        prob_f4_givenA1_false = f4_givenA1.cpt[1][3]; // get probability for P(f4=oss|-a1)
    }
    else if (input4 == 'game') {
        prob_f4_givenA1_true = f4_givenA1.cpt[0][4];  // get probability for P(f4=game|+a1)
        prob_f4_givenA1_false = f4_givenA1.cpt[1][4]; // get probability for P(f4=game|-a1)
    }
    else { // data
        prob_f4_givenA1_true = f4_givenA1.cpt[0][5];  // get probability for P(f4=data|+a1)
        prob_f4_givenA1_false = f4_givenA1.cpt[1][5]; // get probability for P(f4=data|-a1)
    }
    console.log("P(f4=%s|+a1) = %f", input4, prob_f4_givenA1_true);
    console.log("P(f4=%s|-a1) = %f", input4, prob_f4_givenA1_false);
}

function assign_prob_f5() {
    if (input5 == 'yes') { // if user input 'yes' for Q1
        prob_f5_givenA1_true = f5_givenA1.cpt[0][0];  // get probability for P(f5=yes|+a1)
        prob_f5_givenA1_false = f5_givenA1.cpt[1][0]; // get probability for P(f5=yes|-a1)
    }
    else { // else user input 'no' for Q1
        prob_f5_givenA1_true = f5_givenA1.cpt[0][1];  // get probability for P(f5=no|+a1)
        prob_f5_givenA1_false = f5_givenA1.cpt[1][1]; // get probability for P(f5=no|-a1)
    }
    console.log("P(f5=%s|+a1) = %f", input5, prob_f5_givenA1_true);
    console.log("P(f5=%s|-a1) = %f", input5, prob_f5_givenA1_false);
}



// Use Naive Bayes Classifier
// P(a1=true|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)
// P(a1=false|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)
// posteriorProb_a1_true = prob_f1_givenA1_true * prob_f2_givenA1_true * ... etc
// posteriorProb_a1_false = prob_f1_givenA1_true * prob_f2_givenA1_true * ... etc

// P(a2=true|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)
// P(a2=false|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)

// P(a3=true|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)
// P(a3=false|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)

var posteriorProb_a1_true;
var posteriorProb_a1_false;

function naiveBayesClassifier() {
    posteriorProb_a1_true = prob_f1_givenA1_true * prob_f2_givenA1_true * prob_f3_givenA1_true * prob_f4_givenA1_true * prob_f5_givenA1_true;
    posteriorProb_a1_false = prob_f1_givenA1_false * prob_f2_givenA1_false * prob_f3_givenA1_false * prob_f4_givenA1_false * prob_f5_givenA1_false;
    //parseFloat(posteriorProb_a1_true).toFixed(3);
    //parseFloat(posteriorProb_a1_false).toFixed(3);
    console.log("P(a1=true|f1=%s, f2=%s, f3=%s, f4=%s, f5=%s) = ", input1, input2, input3, input4, input5, posteriorProb_a1_true.toFixed(8))
    console.log("P(a1=false|f1=%s, f2=%s, f3=%s, f4=%s, f5=%s) = ", input1, input2, input3, input4, input5, posteriorProb_a1_false.toFixed(8))

    if(posteriorProb_a1_true > posteriorProb_a1_false) {
        console.log("You should join a club")
    }
    else {
        console.log("Don't need to join a club")
    }

}