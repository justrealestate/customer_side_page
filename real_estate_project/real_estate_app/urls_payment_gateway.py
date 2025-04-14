from django.urls import path
from . import payment_gateway 

urlpatterns = [
    path('subscription/',payment_gateway.subscription,name='subscription')
]