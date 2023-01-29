// grab DOM elements

// set event listeners
console.log('hello world!');
console.log('42', 42);
const dogName = 'Benny';
console.log(`My dogs name is ${dogName}. ${dogName} is very cute. ${dogName} is 7 years old.`);


//functions
//allow us to reuse behavior or multiple lines of code

function sayHello(name) {
    console.log(`Hello ${name}!`);
    console.log('It is a beautiful day today!');
    console.log('I hope you are well!');
}

sayHello('Justin');
sayHello('Natasha');

//make a variable that contains a reference to the html element
const nameElement = document.getElementById('name');
//change the text content of that html element
nameElement.textContent = 'Vicky';

//make a variable that references the update button
//listen for a click on that button
const updateBtn = document.getElementById('update');

updateBtn.addEventListener('click', ()=> {
    console.log('i am clicking on the button!!');
    //make a variable that references the INPUT value
    const nameInput = document.getElementById('input');
    //make a variable that contains a reference to 
    //the name html element
    const nameElem = document.getElementById('name');
    //change the text content of the name html element to the value
    //of the input
    nameElem.textContent = nameInput.value;
});