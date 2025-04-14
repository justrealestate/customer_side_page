from django.shortcuts import render,redirect
from django.http import JsonResponse
from .models import *
from datetime import datetime 
import random


num = str(random.randint(10000, 99999))
customer_month = str(datetime.now().month)
customer_year = str(datetime.now().year)



def signup(request):
    return render(request,"signup.html")

def signup_verification(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        mobileNumber = request.POST.get('mobileNumber')
        password = request.POST.get('password')
        customer_id = 'CUS' + num + customer_month + customer_year   
        
        if SignupDetails.objects.filter(MobileNumber = mobileNumber):
            return JsonResponse({'success': False, 'message': 'Username already exists'}, status=409)
        
        else:
            signup = SignupDetails(
                Username = username,
                MobileNumber = mobileNumber,
                Password = password,
                Customer_id =  customer_id
            )
            signup.save()
            
            return JsonResponse({'success': True, 'message': 'Registration successful'}, status=200)
            

    else:
        return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)
        


def login(request):
    return render(request,"login.html")


def login_verification(request):
    if request.method == 'POST':
        mobileNumber = request.POST.get('mobileNumber')
        password = request.POST.get('password')

        check = SignupDetails.objects.filter(MobileNumber = mobileNumber,Password = password)
        if check:
            login = LoginDetails(
                MobileNumber = mobileNumber,
                Password = password
            )
            login.save()
            request.session['mobileNumber'] = mobileNumber
            return JsonResponse({'success': True, 'message': 'Login successful'}, status=200)
        
        else:
            return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)
            
    else:
        return JsonResponse({'success': False, 'message': 'Invalid request method'}, status=405)