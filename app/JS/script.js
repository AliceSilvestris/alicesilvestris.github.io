import "bootstrap";
import { Dropdown } from "bootstrap";
import "../public/SCSS/style";

const btnhamburger = document.querySelector('#btnhamburger');
const Dropdown = document.querySelector('#btnhamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems= document.querySelectorAll('.has-fade');

Dropdown.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){//menu closed
        header.classList.remove('open');
        body.classList.add('noscroll');
        fadeElems.forEach(function(element){
         element.classList.remove('fade-in');
         element.classList.add('fade-out');
        });
    }
    else{                                 //menue opened
        header.classList.add('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });

    }
    
});

$(function(){
    $('#datepicker').datepicker();
  });

  const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
  // Attach observer to every [data-inviewport] element:
  document.querySelectorAll('[data-inviewport]').forEach(el => {
    Obs.observe(el, obsOptions);
  });
