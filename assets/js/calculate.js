let citySelected;
let hotelSelected;
// select city function
function selectCity() {
  let city = document.getElementById("inputcity");
  citySelected = city.options[city.selectedIndex].value;
}

// select Hotel function
function selectHotel() {
  let hotel = document.getElementById("inputHotel");
  hotelSelected = hotel.options[hotel.selectedIndex].value;
}

// calculate the cost
function calculate(event) {
  let persons = document.getElementById("inputNoOfPersons").value;
  let days = document.getElementById("inputNoOfdays").value;
  let result =
    parseFloat(persons) *
    parseFloat(days) *
    parseFloat(citySelected) *
    parseFloat(hotelSelected);
  document.getElementById("CalculateTheCost").value = result;
}
