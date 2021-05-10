/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionOne = document.querySelector('#section1');
const sectionTwo = document.querySelector('#section2');
const sectionThree = document.querySelector('#section3');

const active = document.querySelector('.your-active-class');

const navBar = document.querySelector('#navbar__list');



const anchor = document.createElement('a');

const navList = [];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
for (j=1; j<=document.getElementsByTagName('section').length; j++) {
    let navItem = document.getElementById(`section${j}`);
    navList.push(navItem);
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
for (i=0; i<navList.length; i++) {
    let listElement = document.createElement('li');
    let listItem = {
        number: i+1,
        name: `${navList[i].dataset.nav}`,
    };
    listElement.setAttribute(`id`, `section${listItem.number}`);
    listElement.setAttribute(`data-nav`, `Section ${listItem.number}`);
    navBar.appendChild(listElement);
    listElement.innerHTML = `<a href="#section${listItem.number}" class="menu__link">${navList[i].dataset.nav}</a>`;
}    
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


