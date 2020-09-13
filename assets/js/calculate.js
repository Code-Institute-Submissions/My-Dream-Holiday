let citySelected;
let hotelSelected;
// selecte city function
function selectCity() {
    let city = document.getElementById("inputcity");
    citySelected = city.options[city.selectedIndex].value;
    console.log(citySelected);
}

// selecte Hotel function
function selectHotel(){
    let hotel = document.getElementById("inputHotel");
    hotelSelected = hotel.options[hotel.selectedIndex].value;

    console.log("hotel: " + hotelSelected);
}

// calculate the cost
function calculate(event){
    let persons = document.getElementById("inputNoOfPersons").value;
    let days = document.getElementById("inputNoOfdays").value;
    let result = parseFloat(persons) * parseFloat(days)* parseFloat(citySelected)* parseFloat(hotelSelected) ;
    console.log(days);
    console.log(citySelected);
    console.log(result);
    console.log(hotelSelected);
    document.getElementById("CalculateTheCost").value = result ;
    }
