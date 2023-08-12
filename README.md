# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

 ![Rate state](./images/rating-component-rateState.PNG?raw=true)
 ![Thank-you state](./images/rating-component-thankYouState.PNG?raw=true) 

 
### Links

- Live Site URL: [github-pages](https://harbike.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

```css
.container {
  overflow: hidden; /*to prevent horizontal scroll and extra whitespace */
}
```
```js
let feedback = document.querySelectorAll('.rate');
let rates = [...feedback]; //transforming 'feedback' from object to array
```

## Author

- Website - [Abike Yinusa](https://harbike.github.io/interactive-rating-component/)
- Frontend Mentor - [@Harbike](https://www.frontendmentor.io/profile/Harbike)
- Twitter - [@AbikeYinusa](https://www.twitter.com/AbikeYinusa)