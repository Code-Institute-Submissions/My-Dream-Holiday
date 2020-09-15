function sendMail(contactForm) {
  //this function sends an email
  emailjs
    .send("gmail", "my-dream-holiday", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      from_tripsummary: contactForm.tripsummary.value,
      from_address: contactForm.address.value,
      from_mobile: contactForm.mobile.value,
      from_city: contactForm.city.value,
      from_hotel: contactForm.hotel.value,
      from_destination: contactForm.destination.value,
      from_fromDate: contactForm.fromDate.value,
      from_toDate: contactForm.toDate.value,
      from_noOfP: contactForm.noOfP.value,
      from_noOfD: contactForm.noOfD.value,
      from_guideY: contactForm.guideY.value,
      from_guideN: contactForm.guideN.value,
    })
    .then(
      // if the funciton is successful
      function (response) {
        location.reload();
        alert("Your Message was sent successfully,start pack your back");
      },
      // if the funciton has a problem
      function (error) {
        alert(
          "There was a problem with the server. Please re-submit your email."
        );
      }
    );
  return false; // To block from loading a new page
}
