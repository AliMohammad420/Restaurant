let FoodAll = getFromLocal();



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
