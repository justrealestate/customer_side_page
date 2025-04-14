document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('properties').addEventListener('click', myFunction);
  document.getElementById('comingsoon1').addEventListener('click', myFunction);
  document.getElementById('comingsoon2').addEventListener('click', myFunction);

});

function myFunction(event) {
  const selectedId = event.target.id;

  // Hide all content sections
  document.getElementById("content1").style.display = "none";
  document.getElementById("content2").style.display = "none";
  document.getElementById("content3").style.display = "none";

  // Show the corresponding content section
  if (selectedId === "properties") {
    document.getElementById("content1").style.display = "block";
  } else if (selectedId === "comingsoon1") {
    document.getElementById("content2").style.display = "block";
  } else if (selectedId === "comingsoon2") {
    document.getElementById("content3").style.display = "block";
  }
}

// Layer 2

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('land').addEventListener('click', myFunction1);
  document.getElementById('residential').addEventListener('click', myFunction1);
  document.getElementById('commercial').addEventListener('click', myFunction1);

});

function myFunction1(event) {
  const selectedId = event.target.id;

  // Hide all content sections
  document.getElementById("content11").style.display = "none";
  document.getElementById("content22").style.display = "none";
  document.getElementById("content33").style.display = "none";

  // Show the corresponding content section
  if (selectedId === "land") {
    document.getElementById("content11").style.display = "block";
  } else if (selectedId === "residential") {
    document.getElementById("content22").style.display = "block";
  } else if (selectedId === "commercial") {
    document.getElementById("content33").style.display = "block";
  }
}



