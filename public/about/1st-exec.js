'use strict'

const frontElem = document.getElementsByClassName('frontend')[0];

frontElem.addEventListener('mouseover', () => { 
    
    console.log('over');
    
    frontElem.style.opacity = 0; }
)

frontElem.addEventListener('mouseleave', () => { 
    
    console.log('leave');

    frontElem.style.opacity = 1; }
)

