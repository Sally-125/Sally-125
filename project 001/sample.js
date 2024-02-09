var thisVar = 'first name';
var thatVar = 'Second name';
console.log("thisVar:", thisVar, "and thatVar:", thatVar);

var greet = "Hello", who = "World";
console.log("%s, %s!", greet, who);
//Logging Objects
/*Below we see the results of logging an object. This is often useful for logging JSON response from API calls.*/
console.log({
    'Email': 'shikhulebenard200@gmail.com',
    'Groups': {},
    'Id': 33,
    'IsHiddenInUI': false,
    'IsSiteAdmin': false,
    'LoginName': 'i:0#.w|virtualdomain\\user2',
    'PrincipalType': 1,
    'Title': 'user2'
});
const myObject = {
    name: 'John',
    age: 25,
    profession: 'Software Engineer'
};
console.log(myObject);
console.log(document.body);

document.getElementById("paragraph").textContent = "Hello, World";
var element = document.createElement('p');
element.textContent = "Hello, World";
document.body.appendChild(element);//add the newly created element to the DOM

//Using window.alert()
/*The alert message displays a visual box on screen. The alert method parameters is displayed
to the user in plain text */
window.alert(Message);
alert(Message);
alert('Hello, World');