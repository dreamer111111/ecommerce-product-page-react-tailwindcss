# Frontend Mentor - E-commerce product page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./design/desktop-preview.jpg)


### Links

- Solution URL: [https://github.com/dreamer111111/ecommerce-product-page-using-react-tailwindcss]
- Live Site URL: [https://ecommerce-product-page-using-react.vercel.app/]

## My process


### Built with

- React 19 - For UI and state management.

- Tailwind CSS v4 - Using the new @theme configuration and CSS variables.

- React Context API - To manage global shopping cart state.

- Flexbox & Grid - For responsive layouts.

- Mobile-first workflow - Ensuring a seamless experience on all devices.


### What I learned


```css
/* Tailwind v4 custom theme setup */
@theme {
  --color-orange: hsl(26, 100%, 55%);
  --color-very-dark-blue: hsl(220, 13%, 13%);
  --font-kumbh-sans: "Kumbh Sans", sans-serif;
}
```
```js
const handleOpenLightbox = () => {
  if (window.innerWidth >= 768) {
    setIsLightboxOpen(true);
  }
};
}
```


### Continued development

In future projects, I want to explore:

- Framer Motion: To add smooth transitions when the Cart Modal and Mobile Sidebar open/close.

- LocalStorage: To persist the cart items so they don't disappear on page refresh.

- Unit Testing: Testing the addItem and removeItem functions in the Cart Context.



### Useful resources

- [Create Context](https://react.dev/reference/react/createContext) - This helped me for createContext. 


### AI Collaboration
Gemini


## Author

- Website - [creating]
- Frontend Mentor - [https://www.frontendmentor.io/profile/dreamer111111]
- Twitter - [https://x.com/royrudro032]
- LinkedIn - [https://www.linkedin.com/in/rudro-roy-aa9b16298/]




