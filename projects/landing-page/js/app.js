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

/* This is easier but NOT ALLOWED! */
/*
function buildNav(){                                           // Build with Attributes of all <section>'s the NAV
    for (let section of sections) {
        // console.log(section.getAttribute("data-nav"));
        const section_data = section.getAttribute("data-nav");
        const section_id = section.getAttribute("id");
        navlist.insertAdjacentHTML('beforeend', `<li><a href="#${section_id}" class="menu__link">${section_data}</a></li>`);
    }
}
*/

function buildNav(){                                         // Build with Attributes of all <section>'s the NAV
    for (const section of sections) {
        newListItem = document.createElement('li');
        newListItemLink = document.createElement('a');
        newListItemLink.textContent = section.dataset.nav;
        newListItemLink.classList.add('menu__link');
        newListItemLink.setAttribute('data-nav', section.id);
        newListItem.appendChild(newListItemLink);
        navlist.appendChild(newListItem);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToSection(evt){
    document.getElementById(evt.target.getAttribute("data-nav")).scrollIntoView({behavior: 'smooth'});
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
navlist.addEventListener('click', scrollToSection);

// Set sections as active


