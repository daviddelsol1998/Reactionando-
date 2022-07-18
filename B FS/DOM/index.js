
// you have to tap the document object first
// innerHTML actually changes the content inside of the tags
let name = document.getElementById('name').innerHTML = "<em>fa</em>";

document.querySelector('.list a').style.color = 'red';
document.querySelector('button').style.backgroundColor = 'yellow';

// querySelector uses the same selectors as css on string
// querySelectorAll returns array if multiple elements match


// classList returns the classes of the element query, toggle adds or removes if already exist.
document.querySelector('h1').classList.toggle('huge');