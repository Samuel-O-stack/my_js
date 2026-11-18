console.log("Script is Connected");
const studentName= "Tempest Rimuru";
let age = 20;
const isStudent = true;

console.log(studentName);
console.log(age);
console.log(typeof studentName, typeof age, typeof isStudent);

age = 21;
console.log("Next year I will be ", age);

//studentName = "New Name"; This will throw an error because studentName is a constant 
//console.log("My name is ", studentName);

const billAmount = 8000;
const tippercent = 10;

const tipAmount = (billAmount * tippercent) / 100;
const totalAmount = billAmount + tipAmount;

console.log("Tip: ", tipAmount);
console.log("Total: ", totalAmount);
console.group(17%5); //reminder
console.log(billAmount > 5000) //Comparison 
console.log("5 + 5 = ", 5 + 5);

function calculateTip(bill, percent) {
    return bill * percent / 100;
} 

function calculateTotal(bill, percent) {
    return bill + calculateTip(bill, percent);
}

console.log(calculateTip(8000, 10));
console.log(calculateTotal(8000, 10));
console.log(calculateTotal(12500, 15));

function getGrade(score){
    if (score > 100 || score < 0){
        return "Invalid score";
    } else if (score >= 70){
        return "A";
    } else if (score >= 60){
        return "B";
    } else if (score >= 50){
        return "C";
    } else if (score >= 45){
        return "D";
    } else if (score >= 40){
        return "E";
    } else {
        return "F";
    }
}

console.log(getGrade(85));
console.log(getGrade(39));
console.log(getGrade(120));

//LOOPS
//1. Count 1 to 10 and Label Even and Odd numbers
for (let i=1; i<=10; i++){
    if(i % 2 === 0){
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }
}

//2. Multiplication Table
const number = 7;
for (let i=1; i<=12; i++){
    console.log(`${number} X ${i} = ${number * i}`);
}

//3. Tip Table using our Function
for (let percent = 5; percent<=20; percent +=5){
    console.log(`Tip at ${percent}%: ${calculateTip(8000, percent)}`);
}


let price = 1500;
//const quantity = 3
let quantity = 3;
quantity = 4;
console.log("Total: " + (price * quantity));

function double(n){
    return n * 2;
}
console.log(double(5));


function getBmiCategory(weightkg, heightM){
    const bmi = weightkg / (heightM * heightM);
    if (bmi <18.5){
        return "Underweight";
    } else if (bmi <25){
        return "Normal";
    } else if (bmi <30){
        return "Overweight";
    } else {
        return "Obesse";
    }
}

console.log(getBmiCategory(70, 1.87));





//Write a function to determine if a year is a leap year 
function isLeapYear(year){
    //
}
console.log(isLeapYear(2028));