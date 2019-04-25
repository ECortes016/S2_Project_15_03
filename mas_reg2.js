"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

   Author:  
   Date:    


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form
*/
// When the window is loaded up the function writeSessionValues will be ran
window.onload = writeSessionValues;

function writeSessionValues() {
      document.getElementById("regName").textContent = sessionStorage.confName;
      document.getElementById("regGroup").textContent = sessionStorage.confGroup;
      document.getElementById("regEmail").textContent = sessionStorage.confMail;
      document.getElementById("regPhone").textContent = sessionStorage.confPhone;
      document.getElementById("regSession").textContent = sessionStorage.confSession;
      document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;
      document.getElementById("regPack").textContent = sessionStorage.confPack;
      document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
}