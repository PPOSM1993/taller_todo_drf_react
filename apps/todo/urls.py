from django.urls import path
from rest_framework.routers import DefaultRouter
from .import views

urlpatterns = [
]

router = DefaultRouter()
router.register('todos', views.TodosViewSet),
urlpatterns += router.urls