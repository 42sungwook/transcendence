from django.apps import AppConfig
from django.urls import path, include


class TestappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'testapp'

urlpatterns = [
    path('', include('testapp.urls')),
]