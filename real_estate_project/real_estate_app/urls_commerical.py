from django.urls import path
from . import databases,views

urlpatterns = [
    path('commercial_rent_form',views.commercial_rent_form ,name='commercial_rent_form'),
    path('commercial_sale_form',views.commercial_sale_form ,name='commercial_sale_form'),
]