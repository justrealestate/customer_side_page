document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username");
        const usernameLabel = document.querySelector("label[for='username']");
        const usernameAlert = document.getElementById("usernameAlert");

        const mobileNumberInput = document.getElementById("mobileNumber");
        const mobileNumberLabel = document.querySelector("label[for='mobileNumber']");
        const mobileNumberAlert = document.getElementById("mobileNumberAlert");

        const passwordInput = document.getElementById("password");
        const passwordLabel = document.querySelector("label[for='password']");
        const passwordAlert = document.getElementById("passwordAlert");

        const ConfirmpasswordInput = document.getElementById("confirm_password");
        const ConfirmpasswordLabel = document.querySelector("label[for='confirm_password']");
        const ConfirmpasswordAlert = document.getElementById("confirm_passwordAlert");



        let isValid = true;

        // Username validation
        if (!usernameInput.value.trim()) {
            usernameInput.style.border = "2px solid red";
            usernameLabel.style.color = "red";
            usernameAlert.hidden = false;
            isValid = false;
        } else {
            usernameInput.style.border = "";
            usernameLabel.style.color = "";
            usernameAlert.hidden = true;
        }

        // mobileNumber validation
        if (!mobileNumberInput.value.trim()) {
            mobileNumberInput.style.border = "2px solid red";
            mobileNumberLabel.style.color = "red";
            mobileNumberAlert.hidden = false;
            isValid = false;
        } else {
            mobileNumberInput.style.border = "";
            mobileNumberLabel.style.color = "";
            mobileNumberAlert.hidden = true;
        }

        // Password validation
        if (!passwordInput.value.trim()) {
            passwordInput.style.border = "2px solid red";
            passwordLabel.style.color = "red";
            passwordAlert.hidden = false;
            isValid = false;
        } else {
            passwordInput.style.border = "";
            passwordLabel.style.color = "";
            passwordAlert.hidden = true;
        }

        if (!ConfirmpasswordInput.value.trim()) {
            ConfirmpasswordInput.style.border = "2px solid red";
            ConfirmpasswordLabel.style.color = "red";
            ConfirmpasswordAlert.hidden = false;
            isValid = false;
        } else {
            ConfirmpasswordInput.style.border = "";
            ConfirmpasswordLabel.style.color = "";
            ConfirmpasswordAlert.hidden = true;
        }

        // Only proceed with AJAX if all fields are valid
        if (isValid) {
            if (passwordInput.value == ConfirmpasswordInput.value) {
                const formData = new FormData();
                formData.append("username", usernameInput.value);
                formData.append("mobileNumber", mobileNumberInput.value);
                formData.append("password", passwordInput.value);

                const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

                fetch("verification", {
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
                            window.location.href = "/registration/login";
                        } else {
                            alert(data.message);
                        }
                    })

                    .catch(error => {
                        console.error("Error:", error);
                        alert("An error occurred. Please try again.");
                    });

            } else {
                alert("Confirm Password Must be Same");
            }
        }
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("loginForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();


        const mobileNumberInput = document.getElementById("mobileNumber");
        const mobileNumberLabel = document.querySelector("label[for='mobileNumber']");
        const mobileNumberAlert = document.getElementById("mobileNumberAlert");

        const passwordInput = document.getElementById("password");
        const passwordLabel = document.querySelector("label[for='password']");
        const passwordAlert = document.getElementById("passwordAlert");

        let isValid = true;


        // mobileNumber validation
        if (!mobileNumberInput.value.trim()) {
            mobileNumberInput.style.border = "2px solid red";
            mobileNumberLabel.style.color = "red";
            mobileNumberAlert.hidden = false;
            isValid = false;
        } else {
            mobileNumberInput.style.border = "";
            mobileNumberLabel.style.color = "";
            mobileNumberAlert.hidden = true;
        }

        // Password validation
        if (!passwordInput.value.trim()) {
            passwordInput.style.border = "2px solid red";
            passwordLabel.style.color = "red";
            passwordAlert.hidden = false;
            isValid = false;
        } else {
            passwordInput.style.border = "";
            passwordLabel.style.color = "";
            passwordAlert.hidden = true;
        }

        // Only proceed with AJAX if all fields are valid
        if (isValid) {
            const formData = new FormData();
            formData.append("mobileNumber", mobileNumberInput.value);
            formData.append("password", passwordInput.value);

            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

            fetch("verification", {
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
        }
    });
});










