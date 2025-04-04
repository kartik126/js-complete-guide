/*** DOM Manipulation in JavaScript
 * Interact with HTML elements
 * Modify page content dynamically
 * Handle user events
 * Manage element styles and attributes
 ***/

/*** 1. Selecting Elements
 * Multiple ways to select DOM elements
 * Returns elements or NodeList
 ***/
const byId = document.getElementById('myId');
const byClass = document.getElementsByClassName('myClass');
const byTag = document.getElementsByTagName('div');
const queryOne = document.querySelector('.myClass');
const queryAll = document.querySelectorAll('.myClass');

/*** 2. Creating and Adding Elements
 * Create new elements
 * Add to document
 * Remove from document
 ***/
const newDiv = document.createElement('div');
newDiv.textContent = 'New Element';
newDiv.className = 'new-class';

// Adding elements
document.body.appendChild(newDiv);
document.body.insertBefore(newDiv, existingElement);
parentElement.append(newDiv, 'Some text', anotherElement);
parentElement.prepend(newDiv);

// Removing elements
element.remove();
parentElement.removeChild(childElement);

/*** 3. Modifying Elements
 * Change content
 * Modify attributes
 * Manage classes
 ***/
// Content modification
element.textContent = 'New text';
element.innerHTML = '<span>HTML content</span>';
element.innerText = 'Visible text';

// Attribute manipulation
element.setAttribute('data-id', '123');
element.getAttribute('data-id');
element.removeAttribute('data-id');
element.hasAttribute('data-id');

// Class manipulation
element.classList.add('new-class');
element.classList.remove('old-class');
element.classList.toggle('active');
element.classList.contains('active');

/*** 4. Event Handling
 * Respond to user actions
 * Multiple ways to attach events
 * Event delegation
 ***/
// Adding event listeners
element.addEventListener('click', (event) => {
    console.log('Clicked!', event);
});

// Event delegation
document.getElementById('parent').addEventListener('click', (event) => {
    if (event.target.matches('.child-class')) {
        console.log('Child element clicked');
    }
});

// Removing event listeners
const handler = (event) => console.log(event);
element.addEventListener('click', handler);
element.removeEventListener('click', handler);

/*** 5. Styling Elements
 * Inline styles
 * CSS classes
 * Computed styles
 ***/
// Direct style manipulation
element.style.backgroundColor = 'red';
element.style.fontSize = '16px';
element.style.cssText = 'color: blue; font-size: 16px;';

// Getting computed styles
const computedStyle = window.getComputedStyle(element);
console.log(computedStyle.backgroundColor);

/*** 6. DOM Traversal
 * Navigate DOM tree
 * Access parent/child elements
 * Find siblings
 ***/
const parent = element.parentElement;
const children = element.children;
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;

/*** 7. Forms and Input
 * Form handling
 * Input validation
 * Form submission
 ***/
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData);
    console.log('Form data:', values);
});

/*** 8. DOM Performance
 * Document fragments
 * Batch updates
 * Minimize reflows
 ***/
// Using DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);

/*** 9. Custom Data Attributes
 * Store custom data
 * Access via dataset
 ***/
// HTML: <div data-user-id="123" data-role="admin">
const element = document.querySelector('div');
console.log(element.dataset.userId);
console.log(element.dataset.role);

/*** 10. Browser Events
 * Load events
 * Resize events
 * Scroll events
 ***/
window.addEventListener('load', () => {
    console.log('Page fully loaded');
});

window.addEventListener('resize', () => {
    console.log('Window resized');
});

document.addEventListener('scroll', () => {
    console.log('Page scrolled');
}); 