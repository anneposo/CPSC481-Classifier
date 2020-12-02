var f1, f2, f3, f4, f5;

// Hardcoded probabilities 
var A1 = {
    'yes': 0.9,
    'no': 0.1,
    'first': 0.5,
    'second': 0.5,
    'third': 0.5,
    'fourth': 0.5,
    'low': 0.7,
    'passing': 0.6,
    'average': 0.6,
    'high': 0.6,
    'none': 0.9,
    'acm': 0.2, 
    'rover': 0.2,
    'oss': 0.2,
    'game': 0.2,
    'data': 0.2,
    'experience': 0.2,
    'noexperience': 0.9
};

var A3 = {
    'yes': 0.9,
    'no': 0.1,
    'first': 0.5,
    'second': 0.5,
    'third': 0.6,
    'fourth': 0.8,
    'low': 0.7,
    'passing': 0.6,
    'average': 0.6,
    'high': 0.6,
    'none': 0.9,
    'acm': 0.2, 
    'rover': 0.2,
    'oss': 0.2,
    'game': 0.2,
    'data': 0.2,
    'experience': 0.2,
    'noexperience': 0.9
};

var A2 = {
    'yes': 0.4,
    'no': 0.6,
    'first': 0.8,
    'second': 0.7,
    'third': 0.6,
    'fourth': 0.5,
    'low': 0.7,
    'passing': 0.6,
    'average': 0.6,
    'high': 0.6,
    'none': 0.1,
    'acm': 0.45, 
    'rover': 0.45,
    'oss': 0.45,
    'game': 0.45,
    'data': 0.45,
    'experience': 0.2,
    'noexperience': 0.9
};

var A4 = {
    'yes': 0.9,
    'no': 0.1,
    'first': 0.1,
    'second': 0.2,
    'third': 0.3,
    'fourth': 0.4,
    'low': 0.7,
    'passing': 0.6,
    'average': 0.6,
    'high': 0.6,
    'none': 0.9,
    'acm': 0.2, 
    'rover': 0.2,
    'oss': 0.2,
    'game': 0.2,
    'data': 0.2,
    'experience': 0.5,
    'noexperience': 0.5
};


var tempAdvice = ['Join a club in CS', 'It is a great time for you to start applying to inernships', 'Network', 'Talk to your adviser'];

// Selectors
const formButton = document.querySelector('.form-button');
const selectOption1= document.querySelector(".f1");
const selectOption2= document.querySelector(".f2");
const selectOption3= document.querySelector(".f3");
const selectOption4= document.querySelector(".f4");
const selectOption5= document.querySelector(".f5");

// Event Listeners
formButton.addEventListener('click', submitForm);
selectOption1.addEventListener('input', updateF1);
selectOption2.addEventListener('input', updateF2);
selectOption3.addEventListener('input', updateF3);
selectOption4.addEventListener('input', updateF4);
selectOption5.addEventListener('input', updateF5);

// Sorts the advice probabilities 
function shellSort(arr) {
    var increment = arr.length / 2; // 3
    console.log(increment); //delete
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i; // 3, 4
            var temp = arr[i]; // 5
            var Atemp = tempAdvice[i];
            // console.log('temp', temp);
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                tempAdvice[j] = tempAdvice[j-increment];
                // console.log('array',arr[j]); //delete
                j = j - increment;
            }
    
            arr[j] = temp; // 5
            tempAdvice[j] = Atemp; 
            // console.log('array', arr[j]);
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
            // console.log('increment:', increment);
        }
    }
  return arr;
}


// Functions
function submitForm(event) {
    event.preventDefault(); // prevents form from submitting/refreshing page
    console.log("Feature 1 =", f1);
    console.log("Feature 2 =", f2);
    console.log("Feature 3 =", f3);
    console.log("Feature 4 =", f4);
    console.log("Feature 5 =", f5);

    // stores probabilites from user input
    var advices = []; 

    advices[0] = A1[f1]*A1[f2]*A1[f3]*A1[f4]*A1[f5];
    advices[1] = A2[f1]*A2[f2]*A2[f3]*A2[f4]*A2[f5];
    advices[2] = A3[f1]*A3[f2]*A3[f3]*A3[f4]*A3[f5];
    advices[3] = A3[f1]*A3[f2]*A3[f3]*A3[f4]*A3[f5];

    console.log(advices); // delete later 
    console.log(shellSort(advices)); // delete later

    console.log('Based on your input, you should: ');
    
    var n = 3;
    var x = tempAdvice.length-1; // stores index of highes probability  
    
    while (n != 0){
        console.log(tempAdvice[x]);
        x--;
        n--;

    }


    // create a function that takes 3 parameters and sorts them in order prints the advice for greatest probability
}


function updateF1(e) {
    console.log(e.target.value);
    const newLocal = e.target.value;
    f1 = newLocal
    console.log(f1)
}

function updateF2(e) {
    f2 = e.target.value
    console.log(f2)
}

function updateF3(e) {
    f3 = e.target.value
    console.log(f3)
}

function updateF4(e) {
    f4 = e.target.value
    console.log(f4)
}

function updateF5(e) {
    f5 = e.target.value
    console.log(f5)
}

