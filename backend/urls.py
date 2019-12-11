from django.contrib import admin
from django.urls import path, include



urlpatterns = [

    # http://localhost:8000/api/admin/
    path('api/admin/', admin.site.urls),
]


