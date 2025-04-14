from django.shortcuts import render,redirect 
from django.http import JsonResponse
from .models import *
from datetime import datetime
import random


num = str(random.randint(1000, 9999))
property_month = str(datetime.now().month)
property_year = str(datetime.now().year)
property_registration = num + property_month + property_year


def land_rent_create(request):  
    if request.method == 'POST':
        try:
            # Retrieve images from request
            images = request.FILES.getlist('images')
            mobileNumber = request.session.get('mobileNumber')
            
            # Check if essential session keys and post data exist
            if not mobileNumber or not images:
                return JsonResponse({"error": "Missing session or file data."}, status=400)
            
            for image in images:
                land_rent = LandRent(
                        Property_Id = 'LRE' + property_registration,
                        Customer_Id = request.session['customer_id'],
                        MobileNumber = request.session['mobileNumber'],
                        Length = request.POST.get('Length'), 
                        Width = request.POST.get('Width'),
                        PlotArea = request.POST.get('PlotArea'),
                        Cent = request.POST.get('Cent'),
                        Acre = request.POST.get('Acre'),
                        District = request.POST.get('District'),
                        Town = request.POST.get('Town'),
                        Street = request.POST.get('Street'),
                        ExpectedRent = request.POST.get('ExpectedRent'),
                        ExpectedDepositMonths = request.POST.get('ExpectedDepositMonths'),
                        ExpectedDeposit = request.POST.get('ExpectedDeposit'),
                        Terms = request.POST.get('Terms'),
                        PrimaryNumber = request.POST.get('PrimaryNumber'),
                        SecondaryNumber = request.POST.get('SecondaryNumber'),
                        Image = image
                    )
                land_rent.save()
                land = Land(
                        Property_Id = 'LRE' + property_registration,
                        Customer_Id = 'testing',
                        MobileNumber = request.session['mobileNumber'],
                        Length=request.POST.get('Length'), 
                        Width = request.POST.get('Width'),
                        PlotArea = request.POST.get('PlotArea'),
                        Cent = request.POST.get('Cent'),
                        Acre = request.POST.get('Acre'),
                        District = request.POST.get('District'),
                        Town = request.POST.get('Town'),
                        Street = request.POST.get('Street'),
                        ExpectedRent = request.POST.get('ExpectedRent'),
                        ExpectedDepositMonths = request.POST.get('ExpectedDepositMonths'),
                        ExpectedDeposit = request.POST.get('ExpectedDeposit'),
                        Terms = request.POST.get('Terms'),
                        Type = 'Rent',
                        PrimaryNumber = request.POST.get('PrimaryNumber'),
                        SecondaryNumber = request.POST.get('SecondaryNumber'),
                        Image = image
                    )
                
                land.save()
            return JsonResponse({"message": "Land Rent created successfully."}, status=201)

        except Exception as e:
            # Log or handle the exception as needed
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"message": "Error"},status=400)
    
def land_resale_create(request):
    if request.method == 'POST':
        try:
            # Retrieve images from request
            images = request.FILES.getlist('images')
            mobileNumber = request.session.get('mobileNumber')  # Safely retrieve mobileNumber from session
            
            # Check if essential session keys and post data exist
            if not mobileNumber or not images:
                return JsonResponse({"error": "Missing session or file data."}, status=400)
            for image in images:
                land_resale = LandResale(
                    Customer_Id = request.session['customer_id'],
                    Property_Id = 'LRES' + property_registration,
                    MobileNumber = request.session['mobileNumber'],
                    Length = request.POST.get('Length'), 
                    Width = request.POST.get('Width'),
                    PlotArea = request.POST.get('PlotArea'),
                    Cent = request.POST.get('Cent'),
                    Acre = request.POST.get('Acre'),
                    District = request.POST.get('District'),
                    Town = request.POST.get('Town'),
                    Street = request.POST.get('Street'),
                    PricePerCent = request.POST.get('PricePerCent'),
                    TotalPrice = request.POST.get('TotalPrice'),
                    PricePerSquareFeet = request.POST.get('PricePerSquareFeet'),
                    Description = request.POST.get('Description'),
                    Image = image,
                    PrimaryNumber = request.POST.get('PrimaryNumber'),
                    SecondaryNumber = request.POST.get('SecondaryNumber')
                )
                land_resale.save()
                land = Land(
                    Customer_Id = request.session['customer_id'],
                    Property_Id = 'LRES' + property_registration,
                    MobileNumber = request.session['mobileNumber'],
                    Length = request.POST.get('Length'), 
                    Width = request.POST.get('Width'),
                    PlotArea = request.POST.get('PlotArea'),
                    Cent = request.POST.get('Cent'),
                    Acre = request.POST.get('Acre'),
                    District = request.POST.get('District'),
                    Town = request.POST.get('Town'),
                    Street = request.POST.get('Street'),
                    PricePerCent = request.POST.get('PricePerCent'),
                    TotalPrice = request.POST.get('TotalPrice'),
                    PricePerSquareFeet = request.POST.get('PricePerSquareFeet'),
                    Description = request.POST.get('Description'),
                    Type = 'Resale',
                    Image = image,
                    PrimaryNumber = request.POST.get('PrimaryNumber'),
                    SecondaryNumber = request.POST.get('SecondaryNumber')
                )
                
                land.save()
            return JsonResponse({"message": "Land Resale created successfully."}, status=201)

        except Exception as e:
            # Log or handle the exception as needed
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"message": "Error"},status=400)
        
    

def land_lease_create(request):
    if request.method == 'POST':
        try:
            # Retrieve images from request
            images = request.FILES.getlist('images')
            mobileNumber = request.session.get('mobileNumber')  # Safely retrieve mobileNumber from session
            
            # Check if essential session keys and post data exist
            if not mobileNumber or not images:
                return JsonResponse({"error": "Missing session or file data."}, status=400)
            for image in images:
                land_lease = LandLease(
                    Property_Id = 'LL' + property_registration,
                    Customer_Id = 'rt',
                    MobileNumber = request.session['mobileNumber'],
                    Length=request.POST.get('Length'), 
                    Width = request.POST.get('Width'),
                    PlotArea = request.POST.get('PlotArea'),
                    Cent = request.POST.get('Cent'),
                    Acre = request.POST.get('Acre'),
                    District = request.POST.get('District'),
                    Town = request.POST.get('Town'),
                    Street = request.POST.get('Street'),
                    ExpectedLease = request.POST.get('ExpectedLease'),
                    ExpectedLeaseDuration = request.POST.get('ExpectedLeaseDuration'),
                    Maintenance = request.POST.get('Maintenance'),
                    Terms = request.POST.get('Terms'),
                    Image = image,
                    PrimaryNumber = request.POST.get('PrimaryNumber'),
                    SecondaryNumber = request.POST.get('SecondaryNumber')
                )
                land_lease.save()
                land = Land(
                    Property_Id = 'LL' + property_registration,
                    Customer_Id = 'rt',
                    MobileNumber = request.session['mobileNumber'],
                    Length=request.POST.get('Length'), 
                    Width = request.POST.get('Width'),
                    PlotArea = request.POST.get('PlotArea'),
                    Cent = request.POST.get('Cent'),
                    Acre = request.POST.get('Acre'),
                    District = request.POST.get('District'),
                    Town = request.POST.get('Town'),
                    Street = request.POST.get('Street'),
                    ExpectedLease = request.POST.get('ExpectedLease'),
                    ExpectedLeaseDuration = request.POST.get('ExpectedLeaseDuration'),
                    Maintenance = request.POST.get('Maintenance'),
                    Terms = request.POST.get('Terms'),
                    Type = 'Lease',
                    Image = image,
                    PrimaryNumber = request.POST.get('PrimaryNumber'),
                    SecondaryNumber = request.POST.get('SecondaryNumber')
                )
                land.save()
            return JsonResponse({"message": "Land Lease created successfully."}, status=201)

        except Exception as e:
            # Log or handle the exception as needed
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"message": "Error"},status=400)
        
    
def residential_rent_create(request):
    if request.method == 'POST':
        try:
            # Retrieve images from request
            images = request.FILES.getlist('images')
            mobileNumber = request.session.get('mobileNumber') 
            customerId_query = SignupDetails.objects.filter(MobileNumber = mobileNumber).values('Customer_id')
            
            # Check if essential session keys and post data exist
            if not mobileNumber or not images:
                return JsonResponse({"error": "Missing session or file data."}, status=400)
            
            # Create and save ResidentialRent objects for each image
            for image in images:
                residential_rent = ResidentialRent(
                    Customer_Id = customerId_query,
                    Property_Id = 'RRE' + property_registration,
                    MobileNumber = mobileNumber,
                    BhkType=request.POST.get('BhkType'),
                    Floor=request.POST.get('Floor'),
                    HouseType=request.POST.get('HouseType'),
                    Parking=request.POST.get('Parking'),
                    Terrace=request.POST.get('Terrace'),
                    Hall=request.POST.get('Hall'),
                    Bedroom=request.POST.get('Bedroom'),
                    Bathroom=request.POST.get('Bathroom'),
                    District=request.POST.get('District'),
                    Town=request.POST.get('Town'),
                    Street=request.POST.get('Street'),
                    ExpectedRent=request.POST.get('ExpectedRent'),
                    ExpectedDepositMonths=request.POST.get('ExpectedDepositMonths'),
                    ExpectedDeposit=request.POST.get('ExpectedDeposit'),
                    Maintenance=request.POST.get('Maintenance'),
                    PreferredTenants=request.POST.get('PreferredTenants'),
                    Terms=request.POST.get('Terms'),
                    PrimaryNumber=request.POST.get('PrimaryNumber'),
                    SecondaryNumber=request.POST.get('SecondaryNumber'),
                    Image=image  # Assign image to Image field
                )
                residential_rent.save()

            # Create and save a single Residential object with details
                residential = Residential(
                    Customer_Id='prakash1234',
                    Property_Id='RRE' + property_registration,
                    MobileNumber = mobileNumber,
                    BhkType=request.POST.get('BhkType'),
                    Floor=request.POST.get('Floor'),
                    HouseType=request.POST.get('HouseType'),
                    Parking=request.POST.get('Parking'),
                    Terrace=request.POST.get('Terrace'),
                    Hall=request.POST.get('Hall'),
                    Bedroom=request.POST.get('Bedroom'),
                    Bathroom=request.POST.get('Bathroom'),
                    District=request.POST.get('District'),
                    Town=request.POST.get('Town'),
                    Street=request.POST.get('Street'),
                    ExpectedRent=request.POST.get('ExpectedRent'),
                    ExpectedDepositMonths=request.POST.get('ExpectedDepositMonths'),
                    ExpectedDeposit=request.POST.get('ExpectedDeposit'),
                    Maintenance=request.POST.get('Maintenance'),
                    PreferredTenants=request.POST.get('PreferredTenants'),
                    Terms=request.POST.get('Terms'),
                    Type='Rent',
                    PrimaryNumber=request.POST.get('PrimaryNumber'),
                    SecondaryNumber=request.POST.get('SecondaryNumber'),
                    # Assign one image from the images list or set a default image
                    Image=image
                )
                residential.save()

            return JsonResponse({"message": "Residential Rent created successfully."}, status=201)

        except Exception as e:
            # Log or handle the exception as needed
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"message": "Error"},status=400)
    

def residential_resale_create(request):
    if request.method == 'POST':
        try:
            # Retrieve images from request
            images = request.FILES.getlist('images')
            mobileNumber = request.session.get('mobileNumber')  # Safely retrieve mobileNumber from session
            
            # Check if essential session keys and post data exist
            if not mobileNumber or not images:
                return JsonResponse({"error": "Missing session or file data."}, status=400)
        
            for image in images:
                residential_resale = ResidentialResale(
                        Customer_Id='prakash1234',
                        Property_Id='RRES' + property_registration,
                        MobileNumber = request.session['mobileNumber'],
                        BhkType = request.POST.get('BhkType'),
                        TotalFloor = request.POST.get('TotalFloor'),
                        PropertyAge = request.POST.get('PropertyAge'),
                        HouseLength = request.POST.get('HouseLength'),
                        HouseWidth = request.POST.get('HouseWidth'),
                        HousePlotArea = request.POST.get('HousePlotArea'),
                        HouseCent = request.POST.get('HouseCent'),
                        LandLength = request.POST.get('LandLength'),
                        LandWidth = request.POST.get('LandWidth'),
                        LandPlotArea = request.POST.get('LandPlotArea'),
                        LandCent = request.POST.get('LandCent'),
                        Parking = request.POST.get('Parking'),
                        Terrace = request.POST.get('Terrace'),
                        Hall = request.POST.get('Hall'),
                        Bedroom = request.POST.get('Bedroom'),
                        Bathroom = request.POST.get('Bathroom'),
                        District = request.POST.get('District'),
                        Town = request.POST.get('Town'),
                        Street = request.POST.get('Street'),
                        ExpectedPrice = request.POST.get('ExpectedPrice'),
                        Description = request.POST.get('Description'),        
                        PrimaryNumber = request.POST.get('PrimaryNumber'),
                        SecondaryNumber = request.POST.get('SecondaryNumber'),
                        Image = image
                    )
                residential_resale.save()
                residential = Residential(
                        Customer_Id='prakash1234',
                        Property_Id='RRES' + property_registration,
                        MobileNumber = request.session['mobileNumber'],
                        BhkType = request.POST.get('BhkType'),
                        TotalFloor = request.POST.get('TotalFloor'),
                        PropertyAge = request.POST.get('PropertyAge'),
                        HouseLength = request.POST.get('HouseLength'),
                        HouseWidth = request.POST.get('HouseWidth'),
                        HousePlotArea = request.POST.get('HousePlotArea'),
                        HouseCent = request.POST.get('HouseCent'),
                        LandLength = request.POST.get('LandLength'),
                        LandWidth = request.POST.get('LandWidth'),
                        LandPlotArea = request.POST.get('LandPlotArea'),
                        LandCent = request.POST.get('LandCent'),
                        Parking = request.POST.get('Parking'),
                        Terrace = request.POST.get('Terrace'),
                        Hall = request.POST.get('Hall'),
                        Bedroom = request.POST.get('Bedroom'),
                        Bathroom = request.POST.get('Bathroom'),
                        District = request.POST.get('District'),
                        Town = request.POST.get('Town'),
                        Street = request.POST.get('Street'),
                        ExpectedPrice = request.POST.get('ExpectedPrice'),
                        Description = request.POST.get('Description'),  
                        Type = 'Resale',      
                        PrimaryNumber = request.POST.get('PrimaryNumber'),
                        SecondaryNumber = request.POST.get('SecondaryNumber'),
                        Image = image
                    )
                residential.save()
            
            return JsonResponse({"message": "Residential Resale created successfully."}, status=201)

        except Exception as e:
            # Log or handle the exception as needed
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"message": "Error"},status=400)
        

def residential_lease_create(request):
    if request.method == "POST":
        try:
            # Retrieve images from request
            images = request.FILES.getlist('images')
            mobileNumber = request.session.get('mobileNumber')  # Safely retrieve mobileNumber from session
            
            # Check if essential session keys and post data exist
            if not mobileNumber or not images:
                return JsonResponse({"error": "Missing session or file data."}, status=400)
            for image in images:
                residential_lease = ResidentialLease(
                    Customer_Id='prakash1234',
                    Property_Id='RL' + property_registration,
                    MobileNumber = request.session['mobileNumber'],
                    BhkType = request.POST.get('BhkType'),
                    Floor = request.POST.get('Floor'),
                    HouseType = request.POST.get('HouseType'),
                    Parking = request.POST.get('Parking'),
                    Terrace = request.POST.get('Terrace'),
                    Hall = request.POST.get('Hall'),
                    Bedroom = request.POST.get('Bedroom'),
                    Bathroom = request.POST.get('Bathroom'),
                    District = request.POST.get('District'),
                    Town = request.POST.get('Town'),
                    Street = request.POST.get('Street'),
                    ExpectedLease = request.POST.get('ExpectedLease'),
                    ExpectedLeaseDuration = request.POST.get('ExpectedLeaseDuration'),
                    Maintenance = request.POST.get('Maintenance'),
                    Terms = request.POST.get('Terms'),
                    PrimaryNumber = request.POST.get('PrimaryNumber'),
                    SecondaryNumber = request.POST.get('SecondaryNumber'),
                    Image = image
                )
                residential_lease.save()
                residential = Residential(
                    Customer_Id='prakash1234',
                    Property_Id='RL' + property_registration,
                    MobileNumber = request.session['mobileNumber'],
                    BhkType = request.POST.get('BhkType'),
                    Floor = request.POST.get('Floor'),
                    HouseType = request.POST.get('HouseType'),
                    Parking = request.POST.get('Parking'),
                    Terrace = request.POST.get('Terrace'),
                    Hall = request.POST.get('Hall'),
                    Bedroom = request.POST.get('Bedroom'),
                    Bathroom = request.POST.get('Bathroom'),
                    District = request.POST.get('District'),
                    Town = request.POST.get('Town'),
                    Street = request.POST.get('Street'),
                    ExpectedLease = request.POST.get('ExpectedLease'),
                    ExpectedLeaseDuration = request.POST.get('ExpectedLeaseDuration'),
                    Maintenance = request.POST.get('Maintenance'),
                    Type = 'Lease',
                    Terms = request.POST.get('Terms'),
                    PrimaryNumber = request.POST.get('PrimaryNumber'),
                    SecondaryNumber = request.POST.get('SecondaryNumber'),
                    Image = image
                )
                residential.save()
        
            return JsonResponse({"message": "Residential Lease created successfully."}, status=201)

        except Exception as e:
            # Log or handle the exception as needed
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"message": "Error"},status=400)




def display_data(request):
    # Fetch data from MySQL database
    records = LandResale.objects.all()

    # Render the template with data
    return render(request, 'data_display.html', {'records': records}) 