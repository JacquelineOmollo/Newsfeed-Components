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
const menuButton = document.querySelector('menu-button');
const theHeader = document.querySelector('.header');
theHeader.appendChild(menuComponent(menuItems));

function menuComponent(list) {
  const dropdown_menu = document.createElement('div');
  const menuContent = document.createElement('ul');

  dropdown_menu.appendChild(menuContent);


  list.forEach(item => {
    let content = document.createElement('li');
    menuContent.appendChild(content);
    content.textContent = item;
  });

  dropdown_menu.classList.add('menu');

  const menuBtn = document.querySelector(".menu-button");

  menuBtn.addEventListener('click', event => {
    dropdown_menu.classList.toggle('menu--open');
  });

  return dropdown_menu;

}

const menu = document.querySelector(".menu");


