"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author: Emmanuel Cortes Castaneda
   Date: 04.24.19
   
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
      // For elements with the onblur event handler the calcCart function will be ran including the element with the mediaCB id.
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

// Provides a validation test for the conference session selection list
function sessionTest() {
      // Stores the element with the id of sessionBox
      var sessionBox = document.getElementById("sessionBox");
      // If the value of sessionBox is set to -1, meaning the user has not selected an option then the validity message will appear, if they did choose one then no meassage will appear
      if (sessionBox === -1) {
            sessionBox.setCustomValidity("Select a Session Package!");
      } else {
            sessionBox.setCustomValidity("");
      }
}

// The purpose of this function is to calculate the registration cost and to save information about the customer’s choices in session storage.
function calcCart() {
      // Stores information of what the user has filled out inside of the form
      sessionStorage.confName = document.forms.regForm.elements.firstName.value + " " + document.forms.regForm.elements.lastName.value;
      sessionStorage.confGroup = document.forms.regForm.elements.group.value;
      sessionStorage.confMail = document.forms.regForm.elements.email.value;
      sessionStorage.confPhone = document.forms.regForm.elements.phoneNumber.value;
      sessionStorage.confBanquet = document.forms.regForm.elements.banquetGuests.value;
      // Calculates the value of the confBanquet variable and multiplies it by 55 to get a total
      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;

      var selectedIndex = document.getElementById("sessionBox").selectedIndex;
      if (selectedIndex !== -1) {
            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text
            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox[selectedIndex].value
      } else {
            sessionStorage.confSession = "";
            sessionStorage.confSessionCost = 0;
      }
      if (document.forms.regForm.elements.mediaCB.checked) {
            sessionStorage.confPack = "yes";
            sessionStorage.confPackCost = 115;
      } else {
            sessionStorage.confPack = "no";
            sessionStorage.confPackCost = 0;
      }
      sessionStorage.confTotal = parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confPackCost);
      writeSessionValues();
}

// The span elements' text content will be set to the value of the input which the user has filled in
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