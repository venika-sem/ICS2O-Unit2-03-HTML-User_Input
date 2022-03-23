// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street number and street name and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = parseInt(document.getElementById("street-name").value)

  // output
  document.getElementById("address").innerHTML =
    "Your adress is: " + streetNumber + "440 Longfields " + streetName + "."
}
