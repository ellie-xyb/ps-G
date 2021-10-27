from django.shortcuts import render
from django.http import HttpResponse
import json
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
        dic = {}
        if request.POST:
            length = request.POST.get('length')
            if length:
                password = generated_password(length)
                dic['length'] = password
                dic = json.dumps(dic)
                return HttpResponse(dic)
            else:
                return HttpResponse('There is no length')
        else:
            return HttpResponse('It is empty')
    else:
        return HttpResponse('Wrong action')


def index(request):
    return render(request, 'polls/index.html')
