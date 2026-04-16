// QUERY SELECTORS

console.dir(document.querySelector('p'));

console.dir(document.querySelector('#description'));

console.dir(document.querySelector('.boxLink'));

// all these above selects only the first element 

// if you want to select all the elements

console.dir(document.querySelectorAll("p")); // it returns a NodeList because we discussed in DOM that everything is a node