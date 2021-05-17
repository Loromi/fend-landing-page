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
const navBar = document.querySelector('#navbar__list');
const sections = document.getElementsByTagName('section');
const navList = [];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function createNavList() {
    for (j=1; j<=sections.length; j++) {
        let section = document.getElementById(`section${j}`);
        navList.push(section);
    };

};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar() {
    for (i=0; i<navList.length; i++) {
        let listElement = document.createElement('li');
        let listItem = {
            number: i+1,
            name: `${navList[i].dataset.nav}`,
        };
        listElement.setAttribute(`id`, `section-${listItem.number}`);
        listElement.setAttribute(`data-nav`, `Section ${listItem.number}`);
        navBar.appendChild(listElement);
        listElement.innerHTML = `<a href="#section${listItem.number}" class="menu__link">${navList[i].dataset.nav}</a>`;
    };
};


// Add class 'active' to section when near top of viewport
function setActiveClass() {
    console.log(`#setActiveClass`);
    for (x=0; x<sections.length; x++) {
        let sectionActive = sections[x];
        let rect = sectionActive.getBoundingClientRect();
        if (
            rect.top < 0 ||
            rect.top >= sectionActive.offsetHeight 
        ) {
            sectionActive.classList.remove('your-active-class');
        } else {
            sectionActive.classList.add('your-active-class');
        };
    };
};



// Scroll to anchor ID using scrollTO event
function scrollToAnchorId() {
    const navBarItems = Array.from(navBar.querySelectorAll('li'));
    for (l=0; l<=navBarItems.length; l++) {
        navBarItems[l].addEventListener('click', scrollTo(navBarItems[l].offsetLeft, navBarItems[l].offsetTop))
    };
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavList()
buildNavbar()

// Scroll to section on link click
navBar.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        navBar.querySelectorAll('a').forEach(anchor => {
            anchor.classList.remove('active__link');
        });
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector(this.classList.add('active__link'));
    });

});

// Set sections as active
document.addEventListener('scroll', ()=> {setActiveClass()}, {passive: true});
