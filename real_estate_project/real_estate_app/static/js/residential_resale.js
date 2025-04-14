


function Calculate() {
    //For House
    var HouseLength = parseFloat(document.getElementById('HouseLength').value) || 0;
    var HouseWidth = parseFloat(document.getElementById('HouseWidth').value) || 0;

    var HousePlotArea = HouseLength * HouseWidth;
    var HouseCent = HousePlotArea / 436;

    document.getElementById('HousePlotArea').value = HousePlotArea.toFixed(2);
    document.getElementById('HouseCent').value = HouseCent.toFixed(2);
    //For Land
    var LandLength = parseFloat(document.getElementById('LandLength').value) || 0;
    var LandWidth = parseFloat(document.getElementById('LandWidth').value) || 0;

    var LandPlotArea = LandLength * LandWidth;
    var LandCent = LandPlotArea / 436;

    document.getElementById('LandPlotArea').value = LandPlotArea.toFixed(2);
    document.getElementById('LandCent').value = LandCent.toFixed(2);
}
document.addEventListener("DOMContentLoaded", function () {
    const residentialResaleForm = document.getElementById("residentialResaleForm");

    residentialResaleForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let BhkTypeInput = document.getElementById("BhkType");
        let BhkTypeLabel = document.querySelector("label[for='BhkType']");
        let BhkTypeAlert = document.getElementById("BhkTypeAlert");

        let TotalFloorInput = document.getElementById('TotalFloor');
        let FloorLabel = document.querySelector("label[for='Floor']");
        let FloorAlert = document.getElementById("FloorAlert");

        let PropertyAgeInput = document.getElementById('PropertyAge');
        let HouseLengthInput = document.getElementById('HouseLength');
        let HouseWidthInput = document.getElementById('HouseWidth');
        let HousePlotAreaInput = document.getElementById('HousePlotArea');
        let HouseCentInput = document.getElementById('HouseCent');
        let LandLengthInput = document.getElementById('LandLength');
        let LandWidthInput = document.getElementById('LandWidth');
        let LandPlotAreaInput = document.getElementById('LandPlotArea');
        let LandCentInput = document.getElementById('LandCent');
        let ExpectedPriceInput = document.getElementById('ExpectedPrice');




        let ParkingInput = document.getElementById('Parking');
        let ParkingLabel = document.querySelector("label[for='Parking']");
        let ParkingAlert = document.getElementById("ParkingAlert");

        let TerraceInput = document.getElementById('Terrace');
        let TerraceLabel = document.querySelector("label[for='Terrace']");
        let TerraceAlert = document.getElementById("TerraceAlert");

        let HallInput = document.getElementById('Hall');
        let HallLabel = document.querySelector("label[for='Hall']");
        let HallAlert = document.getElementById("HallAlert");

        let BedroomInput = document.getElementById('Bedroom');
        let BedroomLabel = document.querySelector("label[for='Bedroom']");
        let BedroomAlert = document.getElementById("BedroomAlert");

        let BathroomInput = document.getElementById('Bathroom');
        let BathroomLabel = document.querySelector("label[for='Bathroom']");
        let BathroomAlert = document.getElementById("BathroomAlert");

        let DistrictInput = document.getElementById('District');
        let DistrictLabel = document.querySelector("label[for='District']");
        let DistrictAlert = document.getElementById("DistrictAlert");

        let TownInput = document.getElementById('Town');
        let TownLabel = document.querySelector("label[for='Town']");
        let TownAlert = document.getElementById("TownAlert");

        let StreetInput = document.getElementById('Street');
        let StreetLabel = document.querySelector("label[for='Street']");
        let StreetAlert = document.getElementById("StreetAlert");

        let DescriptionInput = document.getElementById('Description');
        let TermsLabel = document.querySelector("label[for='Terms']");
        let TermsAlert = document.getElementById("TermsAlert");

        let PrimaryNumberInput = document.getElementById('PrimaryNumber');
        let PrimaryNumberLabel = document.querySelector("label[for='PrimaryNumber']");
        let PrimaryNumberAlert = document.getElementById("PrimaryNumberAlert");

        let SecondaryNumberInput = document.getElementById('SecondaryNumber');
        let SecondaryNumberLabel = document.querySelector("label[for='SecondaryNumber']");
        let SecondaryNumberAlert = document.getElementById("SecondaryNumberAlert");

        const formData = new FormData();
        formData.append('BhkType', BhkTypeInput.value);
        formData.append('TotalFloor', TotalFloorInput.value);
        formData.append('PropertyAge', PropertyAgeInput.value);
        formData.append('HouseLength', HouseLengthInput.value);
        formData.append('HouseWidth', HouseWidthInput.value);
        formData.append('HousePlotArea', HousePlotAreaInput.value);
        formData.append('HouseCent', HouseCentInput.value);
        formData.append('LandLength', LandLengthInput.value);
        formData.append('LandWidth', LandWidthInput.value);
        formData.append('LandPlotArea', LandPlotAreaInput.value);
        formData.append('LandCent', LandCentInput.value);
        formData.append('ExpectedPrice', ExpectedPriceInput.value);
        formData.append('Description', DescriptionInput.value);
        formData.append('Parking', ParkingInput.value);
        formData.append('Terrace', TerraceInput.value);
        formData.append('Hall', HallInput.value);
        formData.append('Bedroom', BedroomInput.value);
        formData.append('Bathroom', BathroomInput.value);
        formData.append('District', DistrictInput.value);
        formData.append('Town', TownInput.value);
        formData.append('Street', StreetInput.value);
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

        fetch("residential_resale_create/", {
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


if (BhkType == "" || TotalFloor == "" || PropertyAge == "" || HouseLength == "" || HouseWidth == "" || LandLength == "" || LandWidth == "" ||
    Parking == "" || Terrace == "" || Hall == "" || Bedroom == "" || Bathroom == "" || District == "" || Town == "" || Street == "" || ExpectedPrice == "" ||
    Description == "" || PrimaryNumber == "" || SecondaryNumber == "") {
    alert("Please fill the Required Field🥺")
}
