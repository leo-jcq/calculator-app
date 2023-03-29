# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Links

- Solution URL: []()
- Live Site URL: []()

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- React

### What I learned

The main difficulty was to find the regular expression (that I wanted to create by myself) in order to check that the string is a calculation and not another JavaScript command.

Here it is :

```js
const computeRegex = /(\d+)([+\-*/])(\d+)$/;
```

### Continued development

I could add other features such as memory functions (MC, MR, MS), calculation history and/or storage in the localStorage.

## Author

- Github - [@leo-jcq](https://github.com/leo-jcq)
- Frontend Mentor - [@leo-jcq](https://www.frontendmentor.io/profile/leo-jcq)
- Twitter - [@JacquetLo2](https://twitter.com/JacquetLo2)
