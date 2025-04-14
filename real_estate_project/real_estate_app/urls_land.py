from django.urls import path
from . import databases,views,show_properties

urlpatterns = [
    path('land_rent_form',views.land_rent_form,name="land_rent_form"),
    path('land_resale_form',views.land_resale_form,name='land_resale_form'),
    path('land_lease_form',views.land_lease_form,name="land_lease_form"),

    #These codes are connect into database
    path('land_rent_create/',databases.land_rent_create, name='land_rent_create'),
    path('land_resale_create/',databases.land_resale_create,name="land_resale_create"),
    path('land_lease_create/',databases.land_lease_create,name="land_lease_create"),
    #viewed
    path('land_properties_show',show_properties.land_properties_show,name='land_properties_show'),
    path('land_view/<property_id>',show_properties.land_view, name='land_view'),

    
]