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
f2_givenA2.addParent(a2);
f2_givenA3.addParent(a3);



// Get conditional probabilities from user's input
var prob_f1_givenA1_true;  // P(f1=input1|+a1)
var prob_f1_givenA1_false; // P(f1=input1|-a1)
var prob_f1_givenA2_true;  // P(f1=input1|+a2)
var prob_f1_givenA2_false; // P(f1=input1|-a2)
var prob_f1_givenA3_true;  // P(f1=input1|+a3)
var prob_f1_givenA3_false; // P(f1=input1|-a3)

// search for P(f1=yes) or P(f1=no) in CPT given user's input
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

// Use Naive Bayes Classifier
// P(a1=true|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)
// P(a1=false|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)

// P(a2=true|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)
// P(a2=false|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)

// P(a3=true|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)
// P(a3=false|f1=input1, f2=input2, f3=input3, f4=input4, f5=input5)
