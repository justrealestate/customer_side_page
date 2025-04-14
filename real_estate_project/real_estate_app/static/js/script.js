// Function to toggle visibility based on radio button selection
function toggleVisibility(option) {
    let leaseholdRadio = option;
    let lease_hidden = document.getElementById('lease_hidden');

    if (leaseholdRadio !== 'leaseholdRadio') {
        lease_hidden.style.display = "none";
    } else {
        lease_hidden.style.display = "block";
    }
}

$(document).ready(function() {
    // Function to toggle visibility of elements based on selected radio button
    $('input[name="rentalType"]').change(function() {
        // Check which radio button is selected
        if ($(this).attr('id') === 'rentalOnly') {
            // Show elements related to rent
            $('#expectedRent').closest('.form-group').show();
            $('#expectedDeposit').closest('.form-group').show();
            
            // Hide elements related to lease
            $('#expectedLeaseAmount').closest('.form-group').hide();
        } else if ($(this).attr('id') === 'leaseOnly') {
            // Show elements related to lease
            $('#expectedLeaseAmount').closest('.form-group').show();
            
            // Hide elements related to rent
            $('#expectedRent').closest('.form-group').hide();
            $('#expectedDeposit').closest('.form-group').hide();
        }
    });


    // Handler for change event on the "Anyone" checkbox
    $('#anyone').change(function() {
        // Get the checked status of the "Anyone" checkbox
        var isChecked = $(this).prop('checked');
        // Set the checked status and disabled status of all checkboxes based on the "Anyone" checkbox
        $('.form-check-input').not(this).prop({
            checked: isChecked,
            disabled: isChecked
        });
    });
});


