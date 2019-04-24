"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  
   Date:    
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form
*/

window.onload = function () {
      document.getElementById("regSubmit").onclick = sessionTest;
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;
      document.getElementById("sessionBox").onchange = calcCart;
      document.getElementById("mediaCB").onclick = calcCart;
      calcCart();
}

// Provides a validation test for the conference session selection list (Carey)
function sessionTest() {
      var sessionBox = document.getElementById("sessionBox");

      if (sessionBox !== -1) {
            sessionBox.setCustomValidity("Select a Session Package!");
      } else {
            sessionBox.setCustomValidity("");
      }
}

// The purpose of this function is to calculate the registration cost and to save information about the customer’s choices in session storage. (Carey)

function calcCart() {
      var confName = document.getElementById("fnBox").value + document.getElementById("lnBox");
      var confGroup = document.getElementById("groupBox").value;
      var confMail = document.getElementById("mailBox").value;
      var confPhone = document.getElementById("phoneBox").value;
      var confBanquet = document.getElementById("banquetBox").value;

      var confBanquetCost = confBanquet * 55;

      if () {

      } else {

      }
}