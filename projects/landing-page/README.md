# Landing Page Project

## Table of Contents

* [Project-Description](#Project-Description)
* [How-it-works](#How-it-works)
* [Footer](#footer)

## Project-Description

It is a multi-section web page. The web page has a responsible disign.
You can add content to the page (`section`'s) and the Navigationbar will be created dynamically.


## How-it-works

### Build Navigationbar

The **function** `buildNav` creates for each section with `createElement` an Anchor-Element in a
List-Element and places it in the unorderd list. Incl. `class`, `id` and `data-Attribute`.

### Activate active section and Navbar-title

The **function** `activeSection` uses `getBoundingClientRect` to active the current displayed section
and NavBar-ListItem.

### Scroll to anchor ID

The **function** `scrollToSection` uses `scrollIntoView` to scroll to the section-anchor ID

### Hide the Navbar

The **function** `hideNavbar` uses `window.pageYOffset` to check whether the page ist scrolling up
or down. If "down" the Navbar is hidden

# Footer

That's a project from Udacity! :joy: