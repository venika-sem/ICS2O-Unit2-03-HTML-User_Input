// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and street number and shows it back to user.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("street-number").value)
  
  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + streetName + "Longfields " + streetNumber + "440 + "."
