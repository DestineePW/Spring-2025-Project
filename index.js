// interactive nature of the app

/*GOAL 

Take in user input in a form and display the results of the form

Retrieve
  Put the element into  useable container 
  Get the content out of the element 

Update
  Get the result of all of the containers 
  Display everything in the containers in one spot

  
*/

// const checkInForm = document.getElementById('check-in-form');
// const dropdownMenu = document.getElementById('dropdown');

//I changed the way I got the value out of and used the value inside of the object for each different type of element
const getElementValue = (id, valuePropName) => {
  const inputElement = document.getElementById(id);
  const inputElementValue = inputElement[valuePropName];

  return inputElementValue;
};

const getContent = () => {};

const getResult = () => {};

/**
 The goal of this function is to display the values in the form in a message to the right
 >Thanks for filling out the form NAME! You are successfully checked in to Option 3, YES NO<
 
 */
const displayContent = (name, group, checkedBoxIsYes, checkedBoxIsNo ) => {
  const formResultMessage = `Thanks for filling out the form ${name}! You are successfully checked in to ${group}, ${checkedBoxIsYes ? 'Yes' : ""} ${checkedBoxIsNo? 'No' : ""}`;

};



document.addEventListener('submit', () => {
  const name = getElementValue('name-input', 'value');
  const group = getElementValue('dropdown', 'value');
  const checkedBoxIsYes = getElementValue('checkbox-yes', 'checked');
  const checkedBoxIsNo = getElementValue('checkbox-no', 'checked');
  
  displayContent(name, group, checkedBoxIsYes, checkedBoxIsNo);
});


// const question = document.getElementById('checkbox');

// const form = document.getElementById('empty-form');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
// })

// const getName = () =>{
//   const nameInput = document.getElementById('nameInput');
//   const name = nameInput.value;
//   displayName.innerText = name;
//   if (name){
//     message.innerText = `hello, ${name}!`
//   } else{
//     message.innerText = `Please enter your name!`
//   }
//   }

//   const submitForm = (event) => {
//     const displayName = document.getElementById("display-name")

//   }

// const submitButton = document.getElementById('submit');

// submitButton.onclick = submitForm;

// submitButton.onclick = submit
