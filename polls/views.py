from django.shortcuts import render
from django.http import HttpResponse
import string
import random


def generate_password(request):
    characters = list(string.ascii_letters + string.digits + "!@#$%^&*()")

    length = int("5")
    random.shuffle(characters)
    password = []
    for i in range(length):
        password.append(random.choice(characters))
    random.shuffle(password)

    return HttpResponse("".join(password))


def index(request):
    return render(request, 'polls/index.html')
