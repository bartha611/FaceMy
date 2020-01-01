from django.urls import include, path
from rest_framework.routers import DefaultRouter
from Posts import api


urlpatterns = [
    path('api/posts/', api.PostList.as_view()),
]
