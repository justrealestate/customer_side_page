from django.urls import path
from . import databases,views,show_properties

urlpatterns = [
    path('residential_rent_form',views.residential_rent_form ,name='residential_rent_form'),
    path('residential_resale_form',views.residential_resale_form ,name='residential_resale_form'),
    path('residential_lease_form',views.residential_lease_form ,name='residential_lease_form'),

    #These codes are connect into database
    path('residential_rent_create/',databases.residential_rent_create,name = 'residential_rent_create'),
    path('residential_resale_create/',databases.residential_resale_create, name = 'residential_resale_create'),
    path('residential_lease_create/',databases.residential_lease_create,name="residential_lease_create"),

    #Views
    path('residential_properties_show',show_properties.residential_properties_show,name='residential_properties_show'),

]