// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// alert('dog');

// // function multiply(num1,num2) {
// //     let result = num1 * num2;
// //     return result;
// //   }
// // console.log(multiply(4, 7));
// // multiply(20, 20);
// // multiply(0.5, 3);
// document.querySelector('html').addEventListener('click', () => {
//     alert('Ouch! Stop poking me!');
//   });
  

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rokit.png') {
      myImage.setAttribute('src','images/transparent rokit.png');
    } else {
      myImage.setAttribute('src','images/rokit.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
      