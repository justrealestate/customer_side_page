from django.shortcuts import render,redirect
from django.contrib.auth import logout

def view(request):
    emailId = request.session.get('emailId')
    content =  {'emailId': emailId}
    return render(request, 'index.html',content)

def logout(request):
    request.session.flush()
    return redirect('index')