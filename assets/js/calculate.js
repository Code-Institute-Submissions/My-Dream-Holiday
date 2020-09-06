
let citySelected;
let hotelSelected;
// selecte city function
function selectCity() {
let city = document.getElementById("inputcity");
let citySelected = city.options[city.selectedIndex].value;

console.log(citySelected);

}
// selecte Hotel function
function selectHotel(){
let hotel = document.getElementById("inputHotel");
let hotelSelected = hotel.options[hotel.selectedIndex].value;

console.log(hotelSelected);

}


function calculate(){
    let persons = document.getElementById("inputNoOfPersons").value;
    let days = document.getElementById("inputNoOfdays").value;
    let result = parseFloat(persons) * parseFloat(days);
    console.log(days);
    console.log(result);
    document.getElementById("CalculateTheCost").innerHTML= result;
    }
