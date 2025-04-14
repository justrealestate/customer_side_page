from django.shortcuts import render,redirect
from .models import *

def subscription(request):
    return render(request,"subscription.html")