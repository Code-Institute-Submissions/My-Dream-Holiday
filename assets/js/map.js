let mymap = L.map("map").setView([30, 32], 5);
      L.tileLayer(
        "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=OEqb4t9xFZMBBiD1tVXZ",
        {
          attribution:
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }
      ).addTo(mymap);
      let marker = L.marker([30.2, 31.14]).addTo(mymap);
      let marker2 = L.marker([31.12, 29.55]).addTo(mymap);
      let marker3 = L.marker([25.41, 32.39]).addTo(mymap);
      let marker4 = L.marker([27.5444, 34.1947]).addTo(mymap);
      let marker5 = L.marker([30.1941, 35.26]).addTo(mymap);
      let marker6 = L.marker([25.1547, 55.175]).addTo(mymap);
      let marker7 = L.marker([28.2935, 34.3017]).addTo(mymap);
      let marker8 = L.marker([27.1528, 33.4842]).addTo(mymap);
      marker.bindPopup("<b> Welcome to Cairo</b>").openPopup();
      marker2.bindPopup("<b>Alexandaria</b>").openPopup();
      marker3.bindPopup("<b> Here is Loxur</b>").openPopup();
      marker4.bindPopup("<b> Here is Sharm El Sheikh</b>").openPopup();
      marker5.bindPopup("<b> Welcome to Petra</b>").openPopup();
      marker7.bindPopup("<b> Dahab is waiting for you</b>").openPopup();
      marker8.bindPopup("<b> Hurghada is waiting for you</b>").openPopup();
      marker6.bindPopup("<b> Dubai is waiting for you</b>").openPopup();