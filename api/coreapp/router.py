"""AFLORE Routers."""

# Django
from django.urls import include, path

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Views
from api.coreapp import views

router = DefaultRouter()

# Users
router.register(r'users', views.UserViewSet, basename='users')
router.register(r'records', views.RecordViewSet, basename='records')
router.register(r'categories', views.CategoryViewSet, basename='categories')
router.register(r'colleges', views.CollegeViewSet, basename='college')
router.register(r'municipalities', views.MunicipalityViewSet, basename='municipalities')
router.register(r'boards', views.BoardViewSet, basename='boards')
router.register(r'exchange', views.ExchangeViewSet, basename='exchanges')


urlpatterns = [
    path('', include(router.urls))    
]