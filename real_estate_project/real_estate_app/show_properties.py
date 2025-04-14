from django.shortcuts import render,redirect
from .models import *

def index(request):
    land = Land.objects.all()[:3]
    residential = Residential.objects.all()[:3]
    # commercial = Commercial.objects.all()[:3]
    context = {'land' : land,
               'residential' : residential,
            #    'commercial' : commercial
            }
    return render(request,'index.html',context)


def land_view(request, property_id):
    land = Land.objects.filter(Property_Id = property_id)
    land_images = []
    for i in land:
        land_images.append(i)
    
    for land_individual in land:
        break
    context = {'land_individual': land_individual,
               'land_images' : land_images}
    return render(request, 'land_view.html', context)

def land_properties_show(request):
    land_data = []
    land_images = []
    land_properties_listout = Land.objects.values_list('Property_Id', flat=True).distinct()
    print(len(land_properties_listout))
    for land in land_properties_listout:
        land_datas = Land.objects.filter(Property_Id = land)
        land_data.append(land_datas)
        land_images.append(land.Image)
    return render(request,'land_properties_show.html',{'land_images':land_images,'land_data' : land_data})

def residential_properties_show(request):  
    residential_properties = Residential.objects.values_list('Property_Id', flat=True).distinct()       
    return render(request,"residential_properties_show.html",{'residential_properties':residential_properties})

def property_view(request):
    property_view = LandResale.objects.all()
    return render(request,'property_view.html',{'property_view':property_view})


