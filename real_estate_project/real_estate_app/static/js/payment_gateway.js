document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('option1').addEventListener('click', myFunction);
    document.getElementById('option2').addEventListener('click', myFunction);
    document.getElementById('option3').addEventListener('click', myFunction);

    init();
  });

  function myFunction(event) {
    const selectedId = event.target.id;

    // Hide all content sections
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";

    // Show the corresponding content section
    if (selectedId === "option1") {
      document.getElementById("content1").style.display = "block";
    } else if (selectedId === "option2") {
      document.getElementById("content2").style.display = "block";
    } else if (selectedId === "option3") {
      document.getElementById("content3").style.display = "block";
    }
  }



  // function init() {
  //   const checkedRadio = document.querySelector('input[name="option"]:checked');
  //   if (checkedRadio) {
  //     alert("You selected: " + checkedRadio.value);
  //   }
  // }