"use strict";

// declare an array to save instances in, an integer for the id and an array to save date from the form in it
let foodAll = [], foodId = 0, foodArr = [];
// create constructor for the menu
function menuGenerator(id, name, type, price) {
    this.ID = id;
    this.Name = name;
    this.Type = type;
    this.Price = price;
    foodAll.push(this)
}

// get the form and add event listener to it
const foodFrom = document.getElementById("foodForm");
foodFrom.addEventListener("submit", handleFood);

// create the event listener function to push our data into foodArray each time the user press submit
function handleFood(event) {
    event.preventDefault();
    let newType = new foodGenerator(foodId += 1, `${event.target.foodName.value}`, `${event.target.foodTypes.value}`, `${event.target.price.value}`)
    foodArr.push(newType)
    saveData()
}

// create function to save data from the form into it as .json
function saveData() {
    let stringifiedFood = JSON.stringify(foodArr);
    localStorage.setItem("foodAll", stringifiedFood);
}

