import "bootstrap";
import { Dropdown } from "bootstrap";
import "Style";
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
