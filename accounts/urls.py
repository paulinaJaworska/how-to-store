from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('', include('knox.urls')),
    path('register/', RegisterAPI.as_view()),
    path('login/', LoginAPI.as_view()),
    path('user/', UserAPI.as_view()),
    # Logout invalidates token. It should be done on backend and frontend
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout')
]
