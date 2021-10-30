from django.shortcuts import render
from django.http import HttpResponse
import json
import string
import random


def generated_password(length, up, low, num, sym):
    upper_list = string.ascii_uppercase if up else ''
    lower_list = string.ascii_lowercase if low else ''
    numbers_list = string.digits if num else ''
    symbols_list = "!@#$%^&*()" if sym else ''
    characters_list = upper_list + lower_list + numbers_list + symbols_list
    if length == 0:
        return "Select rules first"
    elif characters_list == '':
        return "Select rules first"
    else:
        characters = list(characters_list)
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
                up_check = json_data.get('uppercase')
                low_check = json_data.get('lowercase')
                num_check = json_data.get('numbers')
                sym_check = json_data.get('symbols')
                password = generated_password(
                    length, up_check, low_check, num_check, sym_check)
                print(password)
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
