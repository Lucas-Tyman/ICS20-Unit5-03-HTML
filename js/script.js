// Created by: Lucas Tyman
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-HTML/sw.js", {
    scope: "/ICS2O-Unit5-03-HTML/",
  })
}

'use strict'

/**
 * This function displays an alert.
 */
function Verify() {
  // input
  const adult = document.getElementById("adult-age").checked
  const teen = document.getElementById("teen-age").checked
  const child = document.getElementById("child-age").checked

  // process and output
  if (adult == true) {
    document.getElementById("check").innerHTML = 'You can see a R rated movie alone.'
  } else if (teen == true) {
    document.getElementById("check").innerHTML = 'You can see a PG-13 rated movie alone.'
  } else if (child == true) {
    document.getElementById("check").innerHTML = 'You can see a G or PG rated movie alone.'
  } else {
    document.getElementById("check").innerHTML = 'You are too young too watch a movie alone. Sorry!'
  }
}