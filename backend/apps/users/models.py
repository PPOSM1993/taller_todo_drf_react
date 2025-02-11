from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    phone = models.CharField(max_length=15, blank=True)
    address = models.TextField(blank=True)
    role = models.CharField(max_length=20, choices=[
        ('admin', 'Administrador'),
        ('employee', 'Empleado'),
        ('manager', 'Gerente')
    ]) 