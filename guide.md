# Netflix-Clone Guide

This document serves as guidance to the process of creating this app. It it built with React and uses Firebase and Stripe. It fetches data from The Movie Database API. It details the packages installed, VSCode Extensions used and any other cool stuff I wish to remember for future projects. 
***

## Packages Installed:


***
## VSCode Extensions Used:
- ES7 React/Redux/GraphQL/React-Native Snippets

***

## Deployment:
- Used Firebase Hosting. 

***

### React Stuff:
  - **Nav Bar:**
    - Using `useEffect`, I declare an event listening to the scroll of the page. After a certain px, the show variable is set true with useState and it changes the css className of the div that cointains the Navbar. 
  
  - **Weird If conditionals:**
    - `string?.length > n ? string.substr(0, n - 1) + "..." : string;`: In this case, I'm saying if there is a string (with the ?), if the lenght is greater than n, then use string.substr() + '...', else, use regular string.

  - **Weird Or conditional:**
    - `{movie?.title || movie?.name || movie?.original_name}`: The ? symbol says if there is a movie, use the title, or the name or original_name.

***
### CSS Stuff:
  - `object-fit: contain;`:
    - It keeps the aspect regardless of what it is inside. If it has a bigger image, it keeps the aspect ratio. 
  
  - `banner--fadeBottom;`:
    - It is an self containing empty div styled to give a fading appearence.

  - `.row__posters::-webkit-scrollbar`
    - In the CSS file, it removes the scroll bar from the row component
***
