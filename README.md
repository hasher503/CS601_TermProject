# Personal Page: Front-End Design Project

## [Hosted on Netlify, check it out!](https://cs601-termproject.netlify.app)

## Tech Stack
* JavaScript
* Vue
* HTML
* CSS

## Overview
This project is a mutli-page personal website designed to showcase the skills learned in CS601, including the following topics:
* HTML5 including **semantic elements**
* CSS: box model, inheritance, **accessibility**, aesthetics
* Responsive design with media queries and **Flexbox**
* JavaScript: **ES6**, let and const, arrow functions, forEach(), localStorage, DOM manipulation, asynchronous fetch
* **Vue framework**: components, methods, computed properties, directives, interpolation, conditional rendering

## Index Page
This page is a basic introduction about me, my background, my education experience, and my hobbies. There's no JavaScript involved on this page and its main purpose is to allow the reader to get to know me, as well as showcasing a beautiful design and comprehensive HTML/CSS knowledge.

## Projects Page
This page displays my past web development projects, each contained within its own component card. Each project card has an imbedded YouTube video of a walk-through screen recording of the project, a link to the GitHub repo for the project's code, and a short description of the goals and/or technologies of the project. The page is rendered using Vue components inside a v-for loop, and the project data is asynchronously fetched from a separate JSON file, allowing for clean code and ease of updating the projects list in the future.

## Gallery Page
This page displays a responsive gallery of thumbnails of photographs I have taken (just for fun, on an iPhone camera). When any image is clicked, the gallery view is replaced by a full-screen image slideshow. The slideshow can be clicked through in a carousel fashion--when you get to the end of the image list, the first image is displayed again. The "next image, previous image, and close slideshow" buttons disappear when the mouse is not moving or hovered over a button, to allow the user to focus on the image without obstruction. This page is designed using Vue. It does not use child components besides the main Vue app but utilizes methods, computed properties, data attributes, v-binding, and other directives to render the gallery, slideshow, and hiding button functionality.

## Connect Page
This page has an aside that allows the viewer to find me on GitHub, LinkedIn, YouTube, and through email. These links all open in a separate tab. The main focus of the page is a Contact form, which allows the viewer to send me a message. **Important:** since this is a static front-end only project, the form does not submit. Still, it demonstrates comprehensive knowledge of JavaScript events, form validation, regular expressions, template strings, arrow functions, and DOM manipulation. When the user enters text in the form, the inputs are validated and dynamic alerts are written to the DOM when the input is invalid. After "submit" is clicked, the form data is checked again and then, if valid, the user's data is saved to localStorage using JSON.stringify. A Modal then pops up thanking the user for their submission, retrieving the user's name from localStorage to personally greet them. The Modal can be closed using the X button or by clicking anywhere else on the page outside of the text box.
