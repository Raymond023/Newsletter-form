# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Github](https://github.com/Raymond023/Newsletter-form)
- Live Site URL: [Add live site U](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- jQuery

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned


```html
<form action="#" novalidate>
         
            
            <label for="email">Email address</label>
            <span class="error">valid email required</span> <br>

            <input id="email" type="email" placeholder="email@company.com" name="email">

            <input id="submit" type="submit" value="Subscribe to monthly newsletter">            
              
            
          </form>
```
```js
    myForm.on('submit', function(e) {
        
        e.preventDefault();

        const emailValue = input[0].value.trim();
        
        if (!emailValue.match(validRegex)){

            
            invalidEmail.css({'display': 'inline'});
            input.attr("class", "error-input");
            e.preventDefault();

        } else {

            submit.click(function () {
                userEmail.textContent = input[0].value
                signUp.css({'display': 'none'});
                success.css({'display': 'inline'});
            });
        }
    })
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

improvement in javascript
**Note: Delete this note and the content within this section and replace with your own plans for continued development.**


## Author

- Frontend Mentor - [@Raymond023](https://www.frontendmentor.io/profile/raymond023)
