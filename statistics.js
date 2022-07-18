let FoodAll = getFromLocal();


var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx = document.getElementById('myChart').getContext('2d');

let FruitandV = 0;
let Starchy = 0;
let Dairy = 0;
let Protein = 0;
let Fat = 0;

const label = [];
const data = [];
const foodName = [];
const foodPrice = [];

function fillcounter(arr) {
    arr.forEach(obj => {
        foodName.push(obj.foodName);
        foodPrice.push(obj.price);
        switch (obj.type) {
            case 'Starchy food':
                ++Starchy;
                break;
            case 'Protein':
                ++Protein;
                break;
            case 'Fruit and vegetables':
                FruitandV++;
                break;
            case 'Fat':
                Fat++;
                break;
            case 'Dairy':
                Dairy++;
                break;
        }

    });

    if (FruitandV) {
        label.push('Fruit and vegetables');
        data.push(FruitandV);
    }
    if (Starchy) {
        label.push('Starchy food');
        data.push(Starchy);
    }
    if (Dairy) {
        label.push('Dairy');
        data.push(Dairy);
    }
    if (Protein) {
        label.push('Protein');
        data.push(Protein);
    }
    if (Fat) {
        label.push('Fat');
        data.push(Fat);
    }


}


if (FoodAll) {
 
fillcounter(FoodAll);   
}

function print(tab) {

    let foodMain = document.getElementById('tableF');
    let tF = document.createElement("table");
    foodMain.appendChild(tF);
    let tRow = document.createElement("tr");
    tF.appendChild(tRow);
    let tID = document.createElement('th');
    tRow.appendChild(tID);
    tID.textContent = "ID";
    let tName = document.createElement('th');
    tRow.appendChild(tName);
    tName.textContent = "Name";
    let tType = document.createElement('th');
    tRow.appendChild(tType);
    tType.textContent = "Type";
    let tPrice = document.createElement('th');
    tRow.appendChild(tPrice);
    tPrice.textContent = "Price";
    if(arr===null){
    let tRow = document.createElement("tr");
    tF.appendChild(tRow);
    let enptyT =document.createElement('td');
    tRow.appendChild(enptyT);
    enptyT.textContent="The Table is Enpty ";
    enptyT.colSpan="4";
    enptyT.style.textAlign="center";
}
else{

    for (let i = 0; i < tab.length; i++) {
        let tRow = document.createElement("tr");
        tF.appendChild(tRow);
        let tID = document.createElement('td');
        tRow.appendChild(tID);
        tID.textContent = arr[i]['foodId'];
        let tName = document.createElement('td');
        tRow.appendChild(tName);
        tName.textContent = arr[i]['foodName'];
        let tType = document.createElement('td');
        tRow.appendChild(tType);
        tType.textContent = arr[i]['type'];
        let tPrice = document.createElement('td');
        tRow.appendChild(tPrice);
        tPrice.textContent = `${arr[i]['price']} $`;
    }
    }
    getData();

}


function getData(){
    let retriveData = localStorage.clear("Food");
    console.log(retriveData);
    console.log(typeof retriveData);
    let parsedData = JSON.parse(retriveData);
        console.log(parsedData);
        console.log(typeof parsedData);

}

getData();

let clear = document.createElement('button');
clear.setAttribute('id', 'clearbtn');

clear.textContent = 'Clear';

clear.onclick = function () {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't return this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.localStorage.clear();
            Swal.fire(
                'Deleted!',
                'Your file has been deleted. the page is going to reload',
                'success'
            )
            window.setTimeout(function () {
               
            window.location.reload(true); 
            }, 3000);
        }
        else {
            Swal.fire(
                'Cancelled'                
            )
        }
    })

}

divresult.appendChild(clear);

const labels = foodName;
const data2 = {
    labels: labels,
    datasets: [{
        label: 'Food Prices',
        data: foodPrice,
        backgroundColor: [
            'blue'
        ],
        borderColor: [
            'blue'
        ],
        borderWidth: 1
    }]
};
const config = {
    type: 'bar',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                steps: 10,
                stepValue: 10,
                max: 60,
                ticks: {
                    stepSize: 10
                }
            }
        }
    },
};

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: label,

        datasets: [{
            label: 'My First Dataset',
            data: data,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(150, 155, 86)',
                'rgb(200, 50, 10)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 30
        }]

    }, options: {
        responsive: false,
        onClick: function (_evt, _element) {
        }
    }
});



const myChar2 = new Chart(ctx2, config);