"use strict";

const fs = require('fs');
const os = require('os');



let newNames = ['Doug', 'Anthony', 'Avitus'];

let charAssignment = function(array){
  let dec = [];
  for (let a = 0; a < array.length; a++){
    const newArr = [];
    for (let b = 0; b < array[a].length; b++){
      newArr.push(array[a].charCodeAt(b));
    }
    dec.push(newArr);
  }
  console.log(dec);
  return dec;
};

charAssignment(newNames);