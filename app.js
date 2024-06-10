// // let btn = document.querySelector('.btn');

// // btn.addEventListener('click', function() {
// //     let Name = prompt("what is your name?")
// //     if (Name !== null && Name !== '') {
// //         document.querySelector('.mytext').innerHTML = Name
// //     }else{
// //         document.querySelector('.mytext').innerHTML = 'please enter your name'
// //     }
// // })

// // Arrays, Objects

// let Resturants = [
//   "shoprite",
//   "Mr Bigs",
//   "Chicken Republic",
//   "Tastial",
//   "Mr Good",
// ];
// let person = ["shoprite", "Mr Bigs", "Chicken Republic", "Tastial", "Mr Good"];
// console.log(Resturants.length);
// console.log(Resturants.push("mama iya beans"));
// console.log(Resturants.concat(person));

// let personItems = ["bag", "Iphone", "Nokia", "Nike", "Vr Glasses"];
// // console.log(personItems.pop(2));
// // console.log(personItems.shift());
// // console.log(personItems.unshift('Nokia'));
// console.log(personItems.slice(2));
// // personItems.splice(0, 1, 'fish');
// console.log(personItems);

// // Writing to a Web Page Using Arrays
// // let NewText = document.querySelector(".New");
// // NewText.innerHTML = "Hello World";

// // document.write("<h1>Hello World</h1>");

// // Comments
// // this is a comment

// // conditional statement in js
// // if
// // while
// // tenary if

// let num = 200;

// if (num !== 50 || num > 100) {
//   console.log("greater than 100");
// } else {
//   console.log("lesser than 100");
// }

// if (num !== 50) {
//   console.log("greater than 100");
// } else if (num < 100) {
//   console.log("lesser than 100");
// } else {
//   console.log("end");
// }

// num > 100 ? console.log("greater than") : console.log(" less than");

// num > 100
//   ? (console.log("greater than"),
//     num < 100 ? console.log("lesser than") : console.log("zero"))
//   : null;

// let day = 1;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log(`Today is ${dayName}`);

// console.log("Today is" + dayName);

// // Loops in javascript
// // for loop
// // for of loop
// // for in loop
// // while loop

// let new_array = ["1", "2", "3", "4", "5"];

// // for (let index = 0; index < new_array.length; index++) {
// //    console.log(new_array[index]);
// // }

// // for( x in new_array) {
// //     console.log(new_array[x]);
// // }

// let IOT = { Name: "testing", Project: "Robotics" };

// let values = Object.values(IOT);
// for (const x of values) {
//   console.log(x);
// }

// let string = "education";
// for (const x of string) {
//   console.log(x.toUpperCase());
// }

// let zero = 0;
// while (zero <= 500) {
//   console.log(zero);
//   zero++;
// }

// // do {
// //     console.log(zero);
// //     zero++;
// // } while (zero <= 500);

// const quizContainer = document.querySelector("#quiz-container");
// const questionElement = document.querySelector("#question");
// const optionsElement = document.querySelector("#options");
// const submitButton = document.querySelector("#submit-btn");

// let currentQuestion = 0;
// let score = 0;
// const quizData = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     answer: "Paris",
//   },
//   {
//     question: "What is the capital of Germany?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     answer: "Berlin",
//   },
//   {
//     question: "What is the capital of Spain?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     answer: "Madrid",
//   },
// ];

// function loadQuestion() {
//   const currentQuizData = quizData[currentQuestion];
//   questionElement.textContent = currentQuizData.question;
//   optionsElement.innerHTML = "";
//   currentQuizData.options.forEach((option) => {
//     const button = document.createElement("button");
//     button.textContent = option;
//     button.addEventListener("click", function () {
//       selectAnswer(option, button);
//     });
//     optionsElement.appendChild(button);
//   });
// }

// function selectAnswer(selectedOption, button) {
//   const currentQuizData = quizData[currentQuestion];
//   if (selectedOption === currentQuizData.answer) {
//     score++;
//     button.style.backgroundColor = "green"; // Mark correct answer
//   } else {
//     button.style.backgroundColor = "red"; // Mark incorrect answer
//   }
//   // Prevent further clicks on options
//   optionsElement.querySelectorAll("button").forEach((button) => {
//     button.disabled = true;
//   });
// }

// function showNextQuestion() {
//   currentQuestion++;
//   if (currentQuestion < quizData.length) {
//     loadQuestion();
//   } else {
//     alert(`Quiz finished! Your score is ${score}`);
//   }
// }

// submitButton.addEventListener("click", showNextQuestion);

// loadQuestion();

// let d = new Date();
// // let formattedDate = d.format('YYYY-MM-DD HH:mm:ss');
// // console.log(formattedDate);
// year = d.getFullYear();
// let currentYear = document.querySelector(".year");
// currentYear.innerHTML = "emmanuel @" + year;
// console.log(d.getFullYear());

// Using Moment.js for date formatting
// var moment = require('moment');

// // Create a new Moment object
// var currentDate = moment();

// // Format the current date
// var formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');

// // Output the formatted date
// console.log("Current date and time: " + formattedDate);

// Form Validation in javascript
// const themes = [
//   {
//     background: "#1A1A2E",
//     color: "#FFFFFF",
//     primaryColor: "#0F3460",
//   },
//   {
//     background: "#461220",
//     color: "#FFFFFF",
//     primaryColor: "#E94560",
//   },
//   {
//     background: "#192A51",
//     color: "#FFFFFF",
//     primaryColor: "#967AA1",
//   },
//   {
//     background: "#F7B267",
//     color: "#000000",
//     primaryColor: "#F4845F",
//   },
//   {
//     background: "#F25F5C",
//     color: "#000000",
//     primaryColor: "#642B36",
//   },
//   {
//     background: "#231F20",
//     color: "#FFF",
//     primaryColor: "#BB4430",
//   },
// ];

// const setTheme = (theme) => {
//   const root = document.querySelector(":root");
//   root.style.setProperty("--background", theme.background);
//   root.style.setProperty("--color", theme.color);
//   root.style.setProperty("--primary-color", theme.primaryColor);
//   root.style.setProperty("--glass-color", theme.glassColor);
// };

// const displayThemeButtons = () => {
//   const btnContainer = document.querySelector(".theme-btn-container");
//   themes.forEach((theme) => {
//     const div = document.createElement("div");
//     div.className = "theme-btn";
//     div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
//     btnContainer.appendChild(div);
//     div.addEventListener("click", () => setTheme(theme));
//   });
// };

// displayThemeButtons();

// let alertWarning = document.querySelector(".alert-warning");
// let Btn = document.querySelector(".Btn");

// function clickBtn(e) {
//   e.preventDefault();

//   let UserInput = document.querySelector(".user").value;
//   let PassInput = document.querySelector(".pass").value;
//   let title = document.querySelector(".title")

//   if (UserInput.trim() === "" || PassInput.trim() === "") {
//     alertWarning.style.display = "block";
//     setTimeout(() => {
//       alertWarning.style.display = "none";
//     }, 3000);
//   } else {
//     alertWarning.style.display = "block";
//     alertWarning.style.border = '2px solid green';
//     title.style.color = '#fff';
//     title.innerHTML = 'Successfully'
//   }
// }

// Btn.addEventListener("click", clickBtn);

// $('.btn').on('click',()=>{
//   alert('Hello world  ')
// })

// const Button = document.querySelector('.bn')

// window.onscroll = () => {
//   if(window.pageYOffset > 100){
//     Button.classList.remove('hidden')
//   }else{
//     Button.classList.add('hidden')
//   }
// };

// Button.addEventListener('click', ()=>{
//   window.scrollTo({top:0, behavior:'smooth'})
// })

// document.getElementById('fetchData').addEventListener('click', ()=>{
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1',true)
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState  === 4 && xhr.status === 200){
//       var Data = JSON.parse(xhr.responseText);
//       document.getElementById('content').innerText =`Title: ${Data.title}\nBody: ${Data.body}`
//     }
//   }
//   xhr.send()
// })

// document.getElementById('fetchData').addEventListener('click', function(){
//   setTimeout(function() {
//     window.location.href = 'http://www.google.com/';
//   }, 3000)
// })

// window.open('http://www.google.com', '_blank')

// let opacity = 1.0;

// function reduceOpacity(){
//   if (opacity > 0){
//     opacity -= 0.1; // Decrease opacity by 0.01
//     document.body.style.opacity = opacity;
//   }else{
//     clearInterval(fadeoutInterval);// Clear interval when opacity reaches zero
//   }
// }

// const fadeoutInterval = setInterval(reduceOpacity, 100);

// Creating New Windows

const Phone = {
  phoneBrand: "Iphone",
  phoneModel: "phone 11 pro max",
  phonePrice: 10000000,
  phoneColor: "black",
  allProducts: ["Samsung", "Techno", "Android iphone"],
  transfer: true,
  id: 1,
};

// Conditional statements in javascript
// if condition
// tenary operator
// switch conditional statements

let yearOfBirth = 2000;
currentYear = 2024;

if (yearOfBirth) {
  let age = yearOfBirth - currentYear;
  console.log(`Your age is ${age}`);
  console.log("Your age is", age);
}

let Playing = false;
let song = "amapiano playing";

if (Playing === false) {
  Playing = true;
  console.log(song);
} else {
  Playing = false;
  song = "amapiano is not playing";
  console.log(song);
}

const priceValue = document.querySelector(".price");
let price = 20000;
let radioPrice = 10000;

if (price > radioPrice) {
  console.log("price is greater than radio");
  priceValue.innerHTML = "price is greater than radio";
} else if (price < radioPrice) {
  // document.write('price is less than radio');
  priceValue.innerHTML = "price is less than radio";
} else {
  // document.write('bro go and save more to buy yor radio');
  priceValue.innerHTML = "bro go and save more to buy yor radio";
}

let value = 200;

value == 100 ? console.log("this is 100") : console.log("this is not 100");

let date = new Date()
console.log(date.getDay());

switch (date.getDay()) {
  case 1:
    console.log('Today is Monday');
    break;
  case 2:
    console.log('Today is Tuesday');
    break;
  case 3:
    console.log('Today is Wednesday');
    break;
  case 4:
    console.log('Today is Thursday');
    break;
  case 5:
    console.log('Today is Friday');
    break;
  case 6:
    console.log('Today is Satuday');
    break;
  case 0:
    console.log('Today is Sunday');
    break;

  default:
    console.log('Invalid date format')
}


let countValue = 10;
let countItem = document.querySelector('.countItem');

let timerId = setInterval(() => {
  countValue--;
  countItem.innerHTML = countValue;
  
  if (countValue <= 0) {
    countItem.innerHTML = 'Game is over';
    clearInterval(timerId);
  }
}, 1000);

// const element = array[index];
let finite = Infinity
console.log(typeof(finite));
console.log(finite.toString());

// for loop 
// for in loop 
// for of loop 
// while loop 
// do while loop 

let Namelist = ['FreeFighter', 'San adres', 'Fifa', 'Call of Duty', 'Last of Us', 'God of war']
// for (let index = 0; index < Namelist.length; index++) {
//   console.log(Namelist[index]);
// }

for(let x in Namelist) {
  console.log(Namelist[x]);
}

let NavList = ['Home', 'About', 'Services', 'Contacts']
let navlist = document.querySelector('.nav_list')

for(let x in NavList) {
  let li = document.createElement('li')
  navlist.appendChild(li)
  li.className = 'nav_listsss'
  li.innerHTML = NavList[x]
}

