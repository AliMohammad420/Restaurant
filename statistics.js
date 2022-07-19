"use strict";

let foodId = 0, foodAll = [], Price = [], Food = [], types = [];
let fill = ["ID", "Name", "Type", "Price"];
let Types = ["Fruit and vegetables", "Starchy food", "Dairy", "Protein", "Fat"];

function foodGenerator(id, name, type, price) {
    this.ID = id;
    this.Name = name;
    this.Type = type;
    this.Price = price;
    foodAll.push(this)
}

const firstRow = new foodGenerator("ID", "Name", "Type", "Price")
const table = document.getElementById("table")
const tableForm = document.createElement('table')
table.append(tableForm)

createFirstRow()
getData();

function getData() {
    let retrievedMenu = localStorage.getItem("foodAll");
    let parsedMenu = JSON.parse(retrievedMenu)

    if (parsedMenu != null) {
        parsedMenu.map(a => new foodGenerator(foodId += 1, a.Name, a.Type, a.Price));
    }

    createTable(parsedMenu);

    barsChartsData(parsedMenu);
    getTypeCount(parsedMenu);
}

function createFirstRow() {
    for (let i = 0; i < 1; i++) {
        const raw = document.createElement('tr')
        tableForm.append(raw)
        for (let j = 0; j < fill.length; j++) {
            const tableClm = document.createElement("th")
            raw.append(tableClm)
            tableClm.textContent = `${foodAll[0][fill[j]]}`;
        }
    }
}

function createTable(parsedMenu) {
    for (let i = 0; i < parsedMenu.length; i++) {
        const raw = document.createElement('tr')
        tableForm.append(raw)
        for (let j = 0; j < fill.length - 1; j++) {
            const tableClm = document.createElement("th")
            raw.append(tableClm)
            tableClm.textContent = `${parsedMenu[i][fill[j]]}`;
        }
        const tableClm = document.createElement("th")
        raw.append(tableClm)
    }
}

function barsChartsData(parsedMenu) {
    return parsedMenu.map(food => Price.push(food.Price) && Food.push(food.Name))
}

function getTypeCount(parsedMenu) {
    let typeFilter = parsedMenu.map(a => a.Type);
    return Types.map(main => types.push(typeFilter.filter((foodType) => (foodType === main)).length));
}

let data = {
    labels: Food,
    datasets: [{
        label: 'Price in JD:',
        backgroundColor: 'red',
        borderColor: 'blue',
        data: Price,
    }]
};

let config = {
    type: 'bar',
    data: data,
    options: {}
};

let myChart = new Chart(
    document.getElementById('barChart'),
    config
);

data = {
    labels: Types,
    datasets: [{
        label: 'My First Dataset',
        data: typesCount,
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 120, 20)',
            'rgb(200, 50, 130)',
            'rgb(54, 162, 235)',
            'rgb(280, 15, 9)'
        ],
        hoverOffset: 10,
        borderWidth: 2
    }]
};
config = {
    type: 'doughnut',
    data: data,
};
myChart = new Chart(
    document.getElementById('doughnutChart'),
    config
);