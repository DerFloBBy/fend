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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");              // creates a NodeList of all <section>'s
const navlist = document.getElementById("navbar__list");            // Nav__List
const button = document.getElementById("scroll-to-top-button");     // Scroll to Top Button

/**
 * End Global Variables
 * 
 * Start Helper Functions
*/


/**
 * End Helper Functions
 * 
 * Begin Main Functions
*/

// Build the nav
// *************

/* The following is easier but NOT ALLOWED according to the rubric! */
/*
// Build the NAV with Attributes of all <section>'s
function buildNav(){
    for (let section of sections) {
        // section.Attributes for ListItem.innerText and ListItem.href
        const section_data = section.getAttribute("data-nav");
        const section_id = section.getAttribute("id");

        // put ListItem with Anchor at the end of unorderd List
        navlist.insertAdjacentHTML('beforeend', `<li><a href="#${section_id}" class="menu__link">${section_data}</a></li>`);
    }
}
*/

/* The following is according to the rubric! */
// Build the NAV with Attributes of all <section>'s
const buildNav = () => {
    for (const section of sections) {
        // create 'li' and 'a' Element
        newListItem = document.createElement('li');
        newListItemLink = document.createElement('a');
        // section.dataset.nav holds the Section-No (equal to the header <h2>)
        newListItemLink.textContent = section.dataset.nav;
        // add class, data-nav (used for scrollToSection) and id (used for highlighting nav-section when aktiv) too the 'a' Element
        newListItemLink.classList.add('menu__link');
        newListItemLink.setAttribute('data-nav', section.id);
        newListItemLink.id = `nav_${section.id}`;

        newListItem.appendChild(newListItemLink);
        navlist.appendChild(newListItem);
    }
}

// Add class 'active' to section when near top of viewport
// *******************************************************
const activeSection = () => {
    for (const section of sections) {
        // getBoundingClientRect() to get the position of each section
        let rect = section.getBoundingClientRect();
        let top = rect.top;
        let bottom = rect.bottom;

        section.classList.remove('your-active-class');
        // if section is in view, it gets the active-class (Nav-Section is highlighted too)
        if ((0 <= top) && (top < bottom-top)) {
            section.classList.add('your-active-class');
            document.querySelector(`#nav_${section.id}`).classList.add('menu__link-active');
        } else {
            document.querySelector(`#nav_${section.id}`).classList.remove('menu__link-active');
        }
    }
}


// Scroll to anchor ID using scrollIntoView event
// **********************************************
const scrollToSection = (evt) => {
    // removeEventListener (hideNavbar) so that Navbar doesn't disappears
    document.removeEventListener('scroll', hideNavbar);
    // Scroll to View
    document.getElementById(evt.target.getAttribute("data-nav")).scrollIntoView({behavior: "smooth"});
    evt.preventDefault();
    // Timeout bevor addEventListener (hideNavbar) starts again
    setTimeout(() => {document.addEventListener('scroll', hideNavbar)}, 1000);
}

// Hide the Navbar if downscroll
// *****************************
const hideNavbar = () => {
    // scrollPosition: initialized to pageYOffset
    if (window.pageYOffset > scrollPosition){
        // scroll DOWN / hide Navbar
        document.querySelector('.navbar__menu').style.display = "none";
    } else {
        // scroll UP / display Navbar
        document.querySelector('.navbar__menu').style.display = "block";
    }
    scrollPosition = window.pageYOffset;
}

// Scroll To Top
// *************
const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    button.style.visibility = "hidden";
}


// Scroll To Top Button unhide
const scrollToTopButton = () => {
    if (window.pageYOffset > 300){
        button.style.visibility = "visible";
    } else {
        button.style.visibility = "hidden";
    }
    evt.preventDefault();
}

/**
 * End Main Functions
 * 
 * Begin Events
*/

// Build Navbar
// ************
buildNav();

// Scroll to section on link click
// *******************************
navlist.addEventListener('click', scrollToSection);

// Set sections as active
// **********************
document.addEventListener('scroll', activeSection);
activeSection();

// Hide Navbar if scroll down
// **************************
document.addEventListener('scroll', hideNavbar);
let scrollPosition = window.pageYOffset;

// Scroll To Top
// *************
button.addEventListener('click', scrollToTop);

// Scroll To Top Button
// ********************
document.addEventListener('scroll', scrollToTopButton);
scrollToTopButton();
