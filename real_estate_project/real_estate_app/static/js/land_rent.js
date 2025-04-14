function calculate() {
    let Length = parseFloat(document.getElementById('Length').value);
    let Width = parseFloat(document.getElementById('Width').value);

    let PlotArea = Length * Width;
    let Cent = PlotArea / 436;
    let Acre = Cent / 100;

    document.getElementById('PlotArea').value = PlotArea.toFixed(2);
    document.getElementById('Cent').value = Cent.toFixed(2);
    document.getElementById('Acre').value = Acre.toFixed(2);
}

function RentCalculator() {
    let ExpectedRent = parseInt(document.getElementById('ExpectedRent').value);
    let ExpectedDepositMonths = parseInt(document.getElementById('ExpectedDepositMonths').value);
    document.getElementById('ExpectedDeposit').value = ExpectedRent * ExpectedDepositMonths;

}

document.addEventListener('DOMContentLoaded', function () {
    const landRentForm = this.document.getElementById("landRentForm");

    landRentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let LengthInput = document.getElementById('Length');
        let WidthInput = document.getElementById('Width');
        let PlotAreaInput = document.getElementById('PlotArea');
        let CentInput = document.getElementById('Cent');
        let AcreInput = document.getElementById('Acre');
        let DistrictInput = document.getElementById('District');
        let TownInput = document.getElementById('Town');
        let StreetInput = document.getElementById('Street');
        let ExpectedRentInput = document.getElementById('ExpectedRent');
        let ExpectedDepositMonthsInput = document.getElementById('ExpectedDepositMonths');
        let ExpectedDepositInput = document.getElementById('ExpectedDeposit');
        let TermsInput = document.getElementById('Terms');
        let PrimaryNumberInput = document.getElementById('PrimaryNumber');
        let SecondaryNumberInput = document.getElementById('SecondaryNumber');

        
        const formData = new FormData();
        formData.append('Length', LengthInput.value);
        formData.append('Width', WidthInput.value);
        formData.append('PlotArea', PlotAreaInput.value);
        formData.append('Cent', CentInput.value);
        formData.append('Acre', AcreInput.value);
        formData.append('District', DistrictInput.value);
        formData.append('Town', TownInput.value);
        formData.append('Street', StreetInput.value);
        formData.append('ExpectedRent', ExpectedRentInput.value);
        formData.append('ExpectedDepositMonths', ExpectedDepositMonthsInput.value);
        formData.append('ExpectedDeposit', ExpectedDepositInput.value);
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

        fetch("land_rent_create/", {
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

    // document.querySelectorAll('.view').forEach(function (element) {
    //     element.addEventListener('click', function () {
    //         var id = this.getAttribute('name');
    //         window.location.href = "land_view/" + id;
    //     });
    // });
});

