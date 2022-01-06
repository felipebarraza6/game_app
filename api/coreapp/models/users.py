"User Model."
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from .utils import APIModel
        

class User(APIModel, AbstractUser):
    
    email = models.EmailField(
        'email',
        unique = True
    )    
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
        'username', 
        'first_name', 
        'last_name', 
    ]


    def __str__(self):
        """Return username."""
        return self.username