# MS5ASS5

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
getElementById is a method in javascript and the DOM that selects an element by its ID.it chooses only one element as ID is uniq.
getElementsByClassName is a method in javascript and the DOM  that selects an element by its Classname. It can choose multiple elements as class names are shared.
querySelector is a method in javascript and the DOM  that selects the first element that matches a CSS selector where querySelectorAll selects all the elements that matches a CSS selector .

2.How do you create and insert a new element into the DOM?
ans:
Syntax for creating new element:
const newSection=document.createElement("section")
const para=document.createElement("p")
para.innerText="hello, I am Badhan , I am currently learning javascript and DOM."
document.body.appendChild(newSection)
newSection.appendChild(para)

What is Event Bubbling and how does it work?
ans:
 Event Bubbling is a mechanism that happens in the DOM when an element gets an event. It triggers the target element and travels to the root of the document( which is called as event propagation ) by riding up in the increasing order of hierarchy.  

What is Event Delegation in JavaScript? Why is it useful?
ans:
Event delegation is an event handler technique that is used by attaching an event listener in a parent element when the child is the target event to stop its propagation .

What is the difference between preventDefault() and stopPropagation() methods?
ans:
preventDefault()  method prevents browser's default actions related to an event like- submitting a form or redirectiong to a link. It doesn't stops event propagation.
stopPropagation() method prevents an event from propagating further through the DOM tree  in the bubbling phase (from target to the window) or in the capturing phase(from window to the target).
