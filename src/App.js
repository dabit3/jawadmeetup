import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data'

console.log("DAATTATA:", data)

const { results } = data

console.log('results:', results)

// Default Parameters

// Rest and Spread Parameters

// Template Literals

// Multi-line Strings

// Destructuring Assignment

// Enhanced Object Literals

// Arrow Functions

/* 

var wait1000 =  new Promise((resolve, reject)=> {
  setTimeout(resolve, 1000)
}).then(()=> {
  console.log('Yay!')
})

*/

// Block-Scoped Constructs: Let and Const

/*


function calculateTotalAmount (vip) {
  var amount = 0
  if (vip) {
    var amount = 1
  }
  { // more crazy blocks!
    var amount = 100
    {
      var amount = 1000
      }
  }  
  return amount
}

console.log(calculateTotalAmount(true))


function calculateTotalAmount (vip) {
  var amount = 0 // probably should also be let, but you can mix var and let
  if (vip) {
    let amount = 1 // first amount is still 0
  } 
  { // more crazy blocks!
    let amount = 100 // first amount is still 0
    {
      let amount = 1000 // first amount is still 0
      }
  }  
  return amount
}

console.log(calculateTotalAmount(true))

*/

// modules

/* ES5

module.exports = {
  port: 3000,
  getAccounts: function() {
    ...
  }
}

var service = require('module.js')
console.log(service.port) // 3000

ES6

export var port = 3000
export function getAccounts(url) {
  ...
}

import {} from './'

*/

// 

/*

12. Fo of Comprehensions

var books = ['Express', 'React', 'React Native'] 

for (let key in books){
  console.log(books[key])
}

*/

class App extends Component {

  // componentDidMount() {
  //   fetch('http://swapi.co/api/planets/')
  //     .then(res => res.json())
  //     .then(data => console.log('data:', data))
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Modern JS</h2>
        </div>
      </div>
    );
  }
}

export default App;
