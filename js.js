function group_1_choice_1() {
    let numberToBeCheck = document.getElementById("myNum").value;
    if (!isNaN ( numberToBeCheck )) {
        if (( numberToBeCheck == 0) || ( numberToBeCheck >=13 ) && ( numberToBeCheck <= 17)) {
            answer.innerHTML = '<div>' + "Given number is in range" + '</div>';
            console.log("in range");
        }
        else {
            answer.innerHTML = '<div>' + "Given number is out of range" + '</div>';
        }
    }

    else {
        answer.innerHTML = '<div>' + "Not a number" + '</div>';
        console.log("not number");
    }
}

function group_1_choice_3(){
    let inputToBeCheck = document.getElementById("mySquare").value;
    if (!isNaN ( inputToBeCheck )) {
        if (inputToBeCheck >= 0) {
            let perimeter = 4*inputToBeCheck;
            let area = inputToBeCheck*inputToBeCheck;
            answer2.innerHTML = '<div>' + "Perimeter is: " +perimeter+ "  Area is: " +area+ '</div>'
        }
        else{
            answer2.innerHTML = '<div>' + "Length can not be negative." + '</div>';
        }

    }
    else {
        answer2.innerHTML = '<div>' + "Can't calculate" + '</div>';
    }
}

function group_2_choice_2(){
    let vowelInput = document.getElementById("myVowel").value;
    if (isNaN ( vowelInput )) {
        if (vowelInput == "a" || vowelInput == "A" || vowelInput == "e" || vowelInput == "E" || vowelInput == "i" || vowelInput == "I"||
         vowelInput == "o" || vowelInput == "O" || vowelInput == "u" || vowelInput == "U") {
            answer3.innerHTML = '<div>' + "A Vowel" + '</div>';
        }
        else if ( vowelInput == "y" || vowelInput == "Y") {
            answer3.innerHTML = '<div>' + "Sometimes" + '</div>';
        }
        else {
            answer3.innerHTML = '<div>' + "Not vowel" + '</div>';
        }
    }
    else {
        answer3.innerHTML = '<div>' + "Input requires an alphabet" + '</div>';
    }
}

function group_2_choice_3(){

    let factorialInput = document.getElementById("myFactorial").value;

    if ( factorialInput <= 0 ) {
        answer4.innerHTML = '<div>' + "Cannot compute factorial value" + '</div>';
    }
    else {
        let factorial_Answer = 1;
        for ( let i = 1; i <= factorialInput; i++ ){
            factorial_Answer *= i;
            answer4.innerHTML = '<div>' + factorial_Answer + '</div>';
        }
    }
}

function group_3_choice_1(){
    let calcInput = document.getElementById("myCalc").value;

    for (let i = 0; i < calcInput.length; i++){
        if ((calcInput[i] == 0 || calcInput[i] == 1) && (calcInput.length >= 10  && calcInput.length <= 20)) {
            let int_Ans = 0;
            for (let i = 0; i < calcInput.length; i++){
                int_Ans += parseInt(calcInput[i]) * (2**(calcInput.length - i - 1));
                answer5.innerHTML = '<div>' + int_Ans + '</div>';
            }
        }

        else {
            answer5.innerHTML = '<div>' + "0" + '</div>';
        }
    }  
    
}
 
