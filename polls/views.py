from django.shortcuts import render
import string
import random


def index(request):
    characters = list(string.ascii_letters + string.digits + "!@#$%^&*()")

    length = int("5")
    random.shuffle(characters)
    password = []
    for i in range(length):
        password.append(random.choice(characters))
    random.shuffle(password)
    password = "".join(password)

    return render(request, 'polls/index.html', {'password': password})
