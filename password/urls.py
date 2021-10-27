from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('generated-password', views.generated_password, name='generated_password'),
    path('options', views.gather_options, name='options'),
]
