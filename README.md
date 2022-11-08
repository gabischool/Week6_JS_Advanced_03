# DOCUMENT OBJECT MODEL PROJECT

## Project Description

You are going to be emulating a content management system by controlling the content in the JavaScript file instead of the HTML file. This project is an exercise pointed at selecting elements and then updating them without touching the HTML file using the DOM.

Compare `index.html` against `original.html` and notice how `index.html` is lacking text content and other things. The goal is to make the page look the same as `original.html` using JavaScript.

You have been provided a [JSON object](js/index.js) with all the necessary data to accomplish this task.  Use dot or bracket notation to traverse the data provided.

**ONE RULE: You cannot update the HTML or CSS files directly.  You must use JavaScript and the DOM only for your tasks today.**

## Instructions

### Task 1: Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository (Not Gabi's by mistake!).
* [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.

### Task 2: Create selectors to point your data into elements

* [ ] Create selectors by using any of the DOM element's methods
* [ ] Note that IDs have been used on all images. Use the IDs to update src path content

#### Update the HTML with the JSON data

* [ ] Remember, NO direct updating of the HTML source is allowed.
* [ ] Using your selectors, update the content to match the example file.
* [ ] Remember to update the src attributes on images

#### Add new content

* [ ] Change the color of the navigation text to be green.
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
* [ ] Check your work by looking at the [original html](original.html) in the browser

### Task 3: Create listeners for 5 types of events

* [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 5 _different_ types. You must Use your creativity to make the Great Idea site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
  * `mouseover`
  * `keydown`
  * `resize`
  * `click`
  * `dblclick`


### Task 3: Stretch

* [ ] Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.  
* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.



## Submission Format

**Follow these steps for completing your project.**

* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
* [ ] Go to the student portal and submit assignment with the link to your branch.