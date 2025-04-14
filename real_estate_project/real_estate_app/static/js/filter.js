function LandFilter(){
    let Resale = document.getElementById('Resale');
    let Rent = document.getElementById('Rent');
    let Lease = document.getElementById('Lease');

    let CheckedResale = Resale.checked;
    let CheckedRent = Rent.checked;
    let CheckedLease = Lease.checked;

    let ValueResale = Resale.value;
    let ValueRent = Rent.value;
    let ValueLease = Lease.value;

    alert(ValueResale);
    alert(ValueRent);
    alert(ValueLease);
}