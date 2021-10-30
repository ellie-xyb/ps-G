from django.shortcuts import render
from django.http import HttpResponse
import json
import string
import random


def generated_password(length, uppercase_check, lowercase_check, numbers_check, symbols_check):
    # characters = list(string.ascii_letters + string.digits + "!@#$%^&*()")
    upper_list = string.ascii_uppercase if uppercase_check else ''
    lower_list = string.ascii_lowercase if lowercase_check else ''
    numbers_list = string.digits if numbers_check else ''
    symbols_list = "!@#$%^&*()" if symbols_check else ''
    characters = list(upper_list + lower_list + numbers_list + symbols_list)
    random.shuffle(characters)
    password = []
    for i in range(length):
        password.append(random.choice(characters))
    random.shuffle(password)

    return "".join(password)


def gather_options(request):
    if request.method == 'POST':
        dic = {}
        json_data = json.loads(request.body)
        print(request.body)
        if json_data:
            length = json_data.get('length')
            if length:
                uppercase_check = json_data.get('uppercase')
                lowercase_check = json_data.get('lowercase')
                numbers_check = json_data.get('numbers')
                symbols_check = json_data.get('symbols')
                print(uppercase_check)
                password = generated_password(
                    length, uppercase_check, lowercase_check, numbers_check, symbols_check)
                dic['password'] = password
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
