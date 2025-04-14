function validatePhoneNumber() {
    let regex = /^[6-9]\d{9}$/;
    let PrimaryNumber = document.getElementById('PrimaryNumber').value;
    let SecondaryNumber = document.getElementById('SecondaryNumber').value;

    if (PrimaryNumber == SecondaryNumber) {
        alert('Both Mobile Numbers Are Same')
    }
    else {
        if (regex.test(PrimaryNumber)) {
            alert("✅ Valid Mobile Number");
        } else {
            alert("❌ Invalid Mobile Number");
        }
    }
}
