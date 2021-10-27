from django.shortcuts import render
from django.http import HttpResponse
import string
import random


def generated_password(length):
    characters = list(string.ascii_letters + string.digits + "!@#$%^&*()")

    # length = int("5")
    random.shuffle(characters)
    password = []
    for i in range(length):
        password.append(random.choice(characters))
    random.shuffle(password)

    return "".join(password)


def gather_options(request):
    if request.method == 'POST':
        if request.POST:
            length = request.POST.get('length')
            if length:
                password = generated_password(length)
                return HttpResponse(password)
            else:
                return HttpResponse('Try again')
        else:
            return HttpResponse('Try again')
    else:
        return HttpResponse('Wrong action')


def index(request):
    return render(request, 'polls/index.html')
