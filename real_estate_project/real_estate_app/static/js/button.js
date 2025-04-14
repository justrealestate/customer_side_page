function Logout() {
    let result = confirm("Are you sure you want to logout?");
    if (result) {
        window.location = "/logout";
    } else {
        console.log("Logout canceled.");
    }
}