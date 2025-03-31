// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

function calculateVolumeOfPyramid() {
  const lengthOfPyramid = parseFloat(document.getElementById('length-of-pyramid').value)
  const widthOfPyramid = parseFloat(document.getElementById('width-of-pyramid').value)
  const heightOfPyramid = parseFloat(document.getElementById('height-of-pyramid').value)

  const volumeOfPyramid = (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3

  document.getElementById('volume').innerHTML = 'Volume is: ' + volumeOfPyramid.toFixed(2) + ' mm³'
}
