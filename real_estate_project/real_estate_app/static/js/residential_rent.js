function RentCalculator() {
  let ExpectedRent = parseInt(document.getElementById('ExpectedRent').value);
  let ExpectedDepositMonths = parseInt(document.getElementById('ExpectedDepositMonths').value);
  document.getElementById('ExpectedDeposit').value = ExpectedRent * ExpectedDepositMonths;
}

document.addEventListener("DOMContentLoaded", function () {
  const residentialRentForm = document.getElementById("residentialRentForm");

  residentialRentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Grab all input values
    let BhkTypeInput = document.getElementById("BhkType").value;
    let FloorInput = document.getElementById('Floor').value;
    let HouseTypeInput = document.getElementById('HouseType').value;
    let ParkingInput = document.getElementById('Parking').value;
    let TerraceInput = document.getElementById('Terrace').value;
    let HallInput = document.getElementById('Hall').value;
    let BedroomInput = document.getElementById('Bedroom').value;
    let BathroomInput = document.getElementById('Bathroom').value;
    let DistrictInput = document.getElementById('District').value;
    let TownInput = document.getElementById('Town').value;
    let StreetInput = document.getElementById('Street').value;
    let ExpectedRentInput = document.getElementById('ExpectedRent').value;
    let ExpectedDepositMonthsInput = document.getElementById('ExpectedDepositMonths').value;
    let ExpectedDepositInput = document.getElementById('ExpectedDeposit').value;
    let MaintenanceInput = document.getElementById('Maintenance').value;
    let PreferredTenantsInput = document.getElementById('PreferredTenants').value;
    let TermsInput = document.getElementById('Terms').value;
    let PrimaryNumberInput = document.getElementById('PrimaryNumber').value;
    let SecondaryNumberInput = document.getElementById('SecondaryNumber').value;

    if (!BhkTypeInput || !FloorInput || !HouseTypeInput || !ParkingInput || !TerraceInput ||
      !HallInput || !BedroomInput || !BathroomInput || !DistrictInput || !TownInput || !StreetInput ||
      !ExpectedRentInput || !ExpectedDepositMonthsInput || !ExpectedDepositInput || !MaintenanceInput ||
      !PreferredTenantsInput || !TermsInput || !PrimaryNumberInput || !SecondaryNumberInput) {

      alert("Please fill in all required fields.");
      return;
    }

    // Ensure Primary and Secondary numbers are different
    if (PrimaryNumberInput === SecondaryNumberInput) {
      alert("Primary and Secondary numbers must be different.");
      return;
    }

    // Confirm the form submission before sending the data
    let confirmUpload = confirm("Are you sure you want to upload the property?");
    if (!confirmUpload) {
      return; // Stop submission if not confirmed
    }

    // Collect form data for submission
    const formData = new FormData();
    formData.append('BhkType', BhkTypeInput);
    formData.append('Floor', FloorInput);
    formData.append('HouseType', HouseTypeInput);
    formData.append('Parking', ParkingInput);
    formData.append('Terrace', TerraceInput);
    formData.append('Hall', HallInput);
    formData.append('Bedroom', BedroomInput);
    formData.append('Bathroom', BathroomInput);
    formData.append('District', DistrictInput);
    formData.append('Town', TownInput);
    formData.append('Street', StreetInput);
    formData.append('ExpectedRent', ExpectedRentInput);
    formData.append('ExpectedDepositMonths', ExpectedDepositMonthsInput);
    formData.append('ExpectedDeposit', ExpectedDepositInput);
    formData.append('Maintenance', MaintenanceInput);
    formData.append('PreferredTenants', PreferredTenantsInput);
    formData.append('Terms', TermsInput);
    formData.append('PrimaryNumber', PrimaryNumberInput);
    formData.append('SecondaryNumber', SecondaryNumberInput);

    // Handle file uploads if any
    let images = document.getElementById('imageInput').files;
    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }

    // Example of sending data using Fetch API
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    fetch("residential_rent_create/", {
      method: "POST",
      headers: {
        "X-CSRFToken": csrftoken,
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(data.message);
          window.location.href = "/profile";
        } else {
          alert(data.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  });
});
