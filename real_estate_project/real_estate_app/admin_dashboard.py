from django.shortcuts import render,redirect
from .models import *

def admin_base(request):
    return render(request,"admin_base.html")

def dashboard(request):
    return render(request,"admin_dashboard.html")

def admin_properties_categories(request):
    return render(request,"admin_properties_categories.html")

def admin_client_details(request):
    data = SignupDetails.objects.all()
    content = {
        'data' : data
    }
    return render(request,"admin_client_details.html",content)

def admin_properties_list(request,property_type):
    land = Land.objects.all()
    land_rent = LandRent.objects.all()
    land_resale = LandResale.objects.all()
    land_lease = LandLease.objects.all()
    residential = Residential.objects.all()
    residential_rent = ResidentialRent.objects.all()
    residential_resale = ResidentialResale.objects.all()
    residential_lease = ResidentialLease.objects.all()
    content = {
        'land' : land,
        'land_rent' : land_rent,
        'land_resale' : land_resale,
        'land_lease' : land_lease,
        'residential' : residential,
        'residential_rent' : residential_rent,
        'residential_resale' : residential_resale,
        'residential_lease' : residential_lease,
        'property_type' : property_type
    }
    return render(request,'admin_properties_list.html',content)

def admin_customer_details_view(request,id):
    customer_data = SignupDetails.objects.raw("SELECT * FROM signup_details WHERE id=%s",[id])
    content = {
        'customer_data' : customer_data
    }
    
    return render(request,'admin_customer_details_view.html',content)