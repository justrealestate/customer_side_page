from django.shortcuts import render,redirect
from .models import *

district = Places.objects.all().values('District').distinct().order_by('District')
subDivision = Places.objects.all().values('Sub_Division').distinct().order_by('Sub_Division')
street = Places.objects.all().values('Street').distinct().order_by('Street')
context = {
    'district':district,
    'subDivision':subDivision,
    'street' : street
}

def base(request):
    mobileNumber = request.session['mobileNumber']
    content = {
        'mobileNumber' : mobileNumber,
    }
    return render(request,'base.html',content)



def welcome(request):
    return render(request,"welcome.html")

def post_property(request):
    return render(request,'post_property.html')

#residential

def residential_rent_form(request):
    if 'mobileNumber' in request.session:
        data = {
            'Primary_number' : request.session['mobileNumber']
        }
        return render(request,"residential_rent_form.html",data)
    
    else:
        return redirect('login')
    
    

def residential_resale_form(request):
    if 'mobileNumber' in request.session:
        district = Places.objects.raw('SELECT * FROM places')
        content = {
            'district' : district
        }
        return render(request,"residential_resale_form.html",context)
    else:
        return redirect('login')

def residential_lease_form(request):
    if 'mobileNumber' in request.session:
        return render(request,"residential_lease_form.html")
    else:
        return redirect('login')

#commercial

def commercial_rent_form(request):
    if 'mobileNumber' in request.session:
        return render(request,"commercial_rent_form.html")
    else:
        return redirect('login')

def commercial_sale_form(request):
    if 'mobileNumber' in request.session:
        return render(request,"commercial_sale_form.html")
    else:
        return redirect('login')
    
def commercial_lease_form(request):
    if 'mobileNumber' in request.session:
        return render(request,"commercial_lease_form.html")
    else:
        return redirect('login')

#land

def land_rent_form(request):
    if 'mobileNumber' in request.session:
        return render(request,"land_rent_form.html")
    else:
        return redirect('login')

def land_resale_form(request):
    if 'mobileNumber' in request.session:
        return render(request,'land_resale_form.html')
    else:
        return redirect('login')

def land_lease_form(request):
    if 'mobileNumber' in request.session:
        return render(request,"land_lease_form.html")
    else:
        return redirect('login')

def profile(request):
    mobileNumber = request.session['mobileNumber']
    user_data = SignupDetails.objects.raw('SELECT * FROM signup_details WHERE MobileNumber =%s',[mobileNumber])
    user_land_data = Land.objects.raw('SELECT * FROM land_records WHERE MobileNumber =%s',[mobileNumber])
    user_residential_data = Residential.objects.raw('SELECT * FROM residential_records WHERE MobileNumber =%s',[mobileNumber])
    #user_commercial_data = Com
    context = {
        'user_data' : user_data,
        'user_land_data' : user_land_data,
        'user_residential_data' : user_residential_data
    }
    for i in user_land_data:
        print(i)
    return render(request,"profile.html",context)

def example(request):
    return render(request,"example.html")

def land_properties_view(request):
    return render(request,"land_properties_view.html")

def property_view(request):
    return render(request,"property_view.html")

def data_processing(request):
    return render(request,"data_processing.html")

def plans(request):
    return render(request,"plans.html")



def login(request):
    return render(request,"login.html")

