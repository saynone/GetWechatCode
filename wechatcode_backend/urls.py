from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.ProxyView.as_view(), name='wx'),
]
