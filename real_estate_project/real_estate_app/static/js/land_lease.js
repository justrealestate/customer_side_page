function calculate() {
    var Length = parseFloat(document.getElementById('Length').value) || 0;
    var Width = parseFloat(document.getElementById('Width').value) || 0;

    var PlotArea = Length * Width;
    var Cent = PlotArea / 436;
    var Acre = Cent / 100;

    document.getElementById('PlotArea').value = PlotArea.toFixed(2);
    document.getElementById('Cent').value = Cent.toFixed(2);
    document.getElementById('Acre').value = Acre.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    const landLeaseForm = document.getElementById("landLeaseForm");

    landLeaseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let Length = document.getElementById('Length').value;
        let Width = document.getElementById('Width').value;
        let PlotArea = document.getElementById('PlotArea').value;
        let Cent = document.getElementById('Cent').value;
        let Acre = document.getElementById('Acre').value;
        let District = document.getElementById('District').value;
        let Town = document.getElementById('Town').value;
        let Street = document.getElementById('Street').value;
        let ExpectedLease = document.getElementById('ExpectedLease').value;
        let ExpectedLeaseDuration = document.getElementById('ExpectedLeaseDuration').value;
        let Maintenance = document.getElementById('Maintenance').value;
        let Terms = document.getElementById('Terms').value;
        let PrimaryNumber = document.getElementById('PrimaryNumber').value;
        let SecondaryNumber = document.getElementById('SecondaryNumber').value;

        if (Length == "" || Width == "" || PlotArea == "" || Cent == "" ||
            Acre == "" || District == "" || Town == "" || Street == "" || ExpectedLease == "" || ExpectedLeaseDuration == "" ||
            Maintenance == "" || Terms == "" || PrimaryNumber == "" || SecondaryNumber == "") {
            alert("Please fill the Required fields");
        }
        else {
            const formData = new FormData();
            formData.append('Length', Length);
            formData.append('Width', Width);
            formData.append('PlotArea', PlotArea);
            formData.append('Cent', Cent);
            formData.append('Acre', Acre);
            formData.append('District', District);
            formData.append('Town', Town);
            formData.append('Street', Street);
            formData.append('ExpectedLease', ExpectedLease);
            formData.append('TotalPrice', TotalPrice);
            formData.append('ExpectedLeaseDuration', ExpectedLeaseDuration);
            formData.append('Maintenance', Maintenance);
            formData.append('Terms', Terms);
            formData.append('PrimaryNumber', PrimaryNumber);
            formData.append('SecondaryNumber', SecondaryNumber);

            //Append files if selected
            let images = $('#imageInput')[0].files;
            if (images.length > 0) {
                for (let i = 0; i < images.length; i++) {
                    formData.append('images', images[i]);
                }
            }

            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

            fetch("land_lease_create/", {
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

        }
    });
});


