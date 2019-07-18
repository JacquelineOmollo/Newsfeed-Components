/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/
// Pass the function an array as it's only argument.
function menuComponent(menu) {
  const menu = document.createElement('div');
  const menuItems = document.createElement('ul');

  menu.appendChild(menuItems);

  // Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>
  menu.forEach(item => {
    let content = document.createElement('li');
    content.textContent = menu.item;
    menuItems.appendChild(menuComponent(menu));

  });
  //  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  const menuBtn = document.querySelector(".menu-button");
  //  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  menuBtn.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
  });
  //Step 5: return the menu component.
  return menu;

}
// Step 6: add the menu component to the DOM.
const menuBtn = document.querySelector('.menu-button');
const header = document.querySelector('.header');
header.appendChild(menuComponent(menuItems));




// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");


// Using your menuButton reference, add a click handler that calls toggleMenu
menuBtn.addEventListener("click", menuComponent);
