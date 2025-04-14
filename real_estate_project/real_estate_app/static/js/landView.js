$(document).on('click', '.view', function(){
    $id = $(this).attr('name');
    window.location = "land_view/" + $id;
  });