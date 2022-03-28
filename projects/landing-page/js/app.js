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
const sections = document.getElementsByTagName("section");          // creates a HTML Collection of all <section>'s
const navlist = document.getElementById("navbar__list");            // Nav__List


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function getSections(){                                           // get Attributes of all <section>'s
//     for (let section of sections) {
//         console.log(section.getAttribute("data-nav"));
//     }
// }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav(){                                           // Build with Attributes of all <section>'s the NAV
    for (let section of sections) {
        // console.log(section.getAttribute("data-nav"));
        const section_data = section.getAttribute("data-nav");
        navlist.insertAdjacentHTML('beforeend', `<li class="menu__link">${section_data}</li>`);
    }
}

buildNav();

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


