document.addEventListener("DOMContentLoaded", function () {
    const residentialLeaseForm = document.getElementById("residentialLeaseForm");

    residentialLeaseForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let BhkTypeInput = document.getElementById('BhkType');
        let FloorInput = document.getElementById('Floor');
        let HouseTypeInput = document.getElementById('HouseType');
        let ParkingInput = document.getElementById('Parking');
        let TerraceInput = document.getElementById('Terrace');
        let HallInput = document.getElementById('Hall');
        let BedroomInput = document.getElementById('Bedroom');
        let BathroomInput = document.getElementById('Bathroom');
        let DistrictInput = document.getElementById('District');
        let TownInput = document.getElementById('Town');
        let StreetInput = document.getElementById('Street');
        let ExpectedLeaseInput = document.getElementById('ExpectedLease');
        let ExpectedLeaseDurationInput = document.getElementById('ExpectedLeaseDuration');
        let MaintenanceInput = document.getElementById('Maintenance');
        let TermsInput = document.getElementById('Terms');
        let PrimaryNumberInput = document.getElementById('PrimaryNumber');
        let SecondaryNumberInput = document.getElementById('SecondaryNumber');

        const formData = new FormData();
        formData.append('BhkType', BhkTypeInput.value);
        formData.append('Floor', FloorInput.value);
        formData.append('HouseType', HouseTypeInput.value);
        formData.append('Parking', ParkingInput.value);
        formData.append('Terrace', TerraceInput.value);
        formData.append('Hall', HallInput.value);
        formData.append('Bedroom', BedroomInput.value);
        formData.append('Bathroom', BathroomInput.value);
        formData.append('District', DistrictInput.value);
        formData.append('Town', TownInput.value);
        formData.append('Street', StreetInput.value);
        formData.append('ExpectedLease', ExpectedLeaseInput.value);
        formData.append('ExpectedLeaseDuration', ExpectedLeaseDurationInput.value);
        formData.append('Maintenance', MaintenanceInput.value);
        formData.append('Terms', TermsInput.value);
        formData.append('PrimaryNumber', PrimaryNumberInput.value);
        formData.append('SecondaryNumber', SecondaryNumberInput.value);

        //Append files if selected
        let images = $('#imageInput')[0].files;
        if (images.length > 0) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }
        }

        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

        fetch("residential_lease_create/", {
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
                    window.location.href = "/profile";
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            });

    });
});
