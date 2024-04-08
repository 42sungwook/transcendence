from django.shortcuts import render

def home(request):
    return render(request, 'testapp/home.html')

def user(request):
    return render(request, 'testapp/user.html')