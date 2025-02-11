from django.shortcuts import render
from rest_framework import generics, viewsets
#from .serializers import TodoSerializer
from .models import *
from apps.todo import serializers

# Create your views here.

"""class TodosAPIView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = serializers.TodoSerializer

class TodoAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = serializers.TodoSerializer
"""

#Cambiar las vistas genericas por vistas conjunto de vistas

class TodosViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.order_by('-id')
    #serialiizer_class = serializers.TodoSerializer
    
    def get_serializer_class(self):
        serialiizer_class = serializers.TodoSerializer
        return serialiizer_class