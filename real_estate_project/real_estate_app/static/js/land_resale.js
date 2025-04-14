function calculate() {
    var Length = parseFloat(document.getElementById('Length').value) || 0;
    var Width = parseFloat(document.getElementById('Width').value) || 0;
    var PricePerCent = parseFloat(document.getElementById('PricePerCent').value) || 0;
    var PlotArea = Length * Width;
    var Cent = PlotArea / 436;
    var Acre = Cent / 100;
    var TotalPrice = Cent * PricePerCent;
    var PricePerSquareFeet = TotalPrice / PlotArea;

    document.getElementById('PlotArea').value = PlotArea.toFixed(2);
    document.getElementById('Cent').value = Cent.toFixed(2);
    document.getElementById('Acre').value = Acre.toFixed(2);
    document.getElementById('TotalPrice').value = TotalPrice.toFixed(2);
    document.getElementById('PricePerSquareFeet').value = PricePerSquareFeet.toFixed(2);
}
document.addEventListener("DOMContentLoaded", function () {
    const landResaleForm = document.getElementById("landResaleForm");

    landResaleForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let Length = document.getElementById('Length').value;
        let Width = document.getElementById('Width').value;
        let PlotArea = document.getElementById('PlotArea').value;
        let Cent = document.getElementById('Cent').value;
        let Acre = document.getElementById('Acre').value;
        let District = document.getElementById('District').value;
        let Town = document.getElementById('Town').value;
        let Street = document.getElementById('Street').value;
        let PricePerCent = document.getElementById('PricePerCent').value;
        let TotalPrice = document.getElementById('TotalPrice').value;
        let PricePerSquareFeet = document.getElementById('PricePerSquareFeet').value;
        let Description = document.getElementById('Description').value;
        let PrimaryNumber = document.getElementById('PrimaryNumber').value;
        let SecondaryNumber = document.getElementById('SecondaryNumber').value;

        if (Length == "" || Width == "" || District == "" || Town == "" || Street == "" || PricePerCent == "" ||
            Description == "" || PrimaryNumber == "" || SecondaryNumber == "") {
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
            formData.append('PricePerCent', PricePerCent);
            formData.append('TotalPrice', TotalPrice);
            formData.append('PricePerSquareFeet', PricePerSquareFeet);
            formData.append('Description', Description);
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

            fetch("land_resale_create/", {
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



// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.view').forEach(function (element) {
//         element.addEventListener('click', function () {
//             var id = this.getAttribute('name');
//             window.location.href = "land_view/" + id;
//         });
//     });
// });