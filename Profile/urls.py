from django.urls import path, include
from Profile import api

urlpatterns = [
    path('api/auth/', include('knox.urls')),
    path('api/auth/login', api.LoginApi.as_view())
]
