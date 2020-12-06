// Hardcoded probabilities 
var A1 = {
    'yes': 0.9,
    'no': 0.1,
    'first': 0.4,
    'second': 0.3,
    'third': 0.2,
    'fourth': 0.1,
    'low': 0.1,
    'passing': 0.3,
    'average': 0.4,
    'high': 0.2,
    'none': 0.6,
    'acm': 0.05, 
    'rover': 0.05,
    'oss': 0.1,
    'game': 0.1,
    'data': 0.1,
    'experience': 0.5,
    'noexperience': 0.5
};

var A2 = {
    'yes': 0.4,
    'no': 0.6,
    'first': 0.05,
    'second': 0.3,
    'third': 0.6,
    'fourth': 0.05,
    'low': 0.1,
    'passing': 0.1,
    'average': 0.3,
    'high': 0.5,
    'none': 0.25,
    'acm': 0.15, 
    'rover': 0.15,
    'oss': 0.15,
    'game': 0.15,
    'data': 0.15,
    'experience': 0.1,
    'noexperience': 0.9
};

var A3 = {
    'yes': 0.8,
    'no': 0.2,
    'first': 0.2,
    'second': 0.2,
    'third': 0.3,
    'fourth': 0.3,
    'low': 0.1,
    'passing': 0.1,
    'average': 0.4,
    'high': 0.4,
    'none': 0.5,
    'acm': 0.1, 
    'rover': 0.1,
    'oss': 0.1,
    'game': 0.1,
    'data': 0.1,
    'experience': 0.2,
    'noexperience': 0.8
};

var A4 = {
    'yes': 0.9,
    'no': 0.1,
    'first': 0.1,
    'second': 0.2,
    'third': 0.3,
    'fourth': 0.4,
    'low': 0.5,
    'passing': 0.3,
    'average': 0.1,
    'high': 0.1,
    'none': 0.5,
    'acm': 0.1, 
    'rover': 0.1,
    'oss': 0.1,
    'game': 0.1,
    'data': 0.1,
    'experience': 0.3,
    'noexperience': 0.7
};


var tempAdvice = [
    'Clubs and organizations are a big part of college life! They allow you to become involved beyond the classroom and meet students who are interested in pursuing the same field. Joining a club that is focused on an area of Computer Science will encourage career development and an understanding of opportunities within the tech industry. They also make for a great resume builder! You can find a list of CSUF ECS student clubs at https://www.fullerton.edu/ecs/resources/ecs_student_clubs.php', // A1
    'It\'s a great time for you to start applying for internships if you haven\'t already. They are a great way to apply knowledge from the classroom to real-world experience and begin networking with professionals in your field. Internships are important in the STEM field to gain an advantage over other candidates when applying to full-time jobs after graduating. Start polishing your resume and LinkedIn profile!', // A2
    'Start building your academic and professional network. You\'ll gain valuable insight from industry professionals and develop relationships that may lead to more business opportunities later on in your career. Attending events such as tech conferences and hackathons are a great way to start connecting with people outside of school.',  // A3
    'Make sure to check in with your academic advisor. It is important to know your degree program in order to fulfill the degree requirements and graduate on time. Academic advisors help guide students to make the best decisions based on their major and provide information as well as options to help fulfill your degree requirements without wasting time and money on irrelevant classes. You can schedule an advising appointment at https://appointment.ecs.fullerton.edu/' // A4
];

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


var advice1, advice2, advice3;

function calculateProb() {
    // stores probabilites from user input
    var advices = []; 

    advices[0] = 0.3*A1[f1]*A1[f2]*A1[f3]*A1[f4]*A1[f5];
    advices[1] = 0.7*A2[f1]*A2[f2]*A2[f3]*A2[f4]*A2[f5];
    advices[2] = 0.6*A3[f1]*A3[f2]*A3[f3]*A3[f4]*A3[f5];
    advices[3] = 0.5*A3[f1]*A3[f2]*A3[f3]*A3[f4]*A3[f5];

    console.log(advices); // delete later 
    console.log(shellSort(advices)); // delete later
    

    console.log('Based on your input, you should: ');

    var x = tempAdvice.length-1; // stores index of highes probability  

    advice1 = tempAdvice[x];
    console.log("advice1 = ", advice1);
    document.getElementById("advice1").innerHTML = advice1;

    advice2 = tempAdvice[x-1];
    console.log("advice2 = ", advice2);
    document.getElementById("advice2").innerHTML = advice2;
    
    advice3 = tempAdvice[x-2];
    console.log("advice3 = ", advice3);
    document.getElementById("advice3").innerHTML = advice3;
}