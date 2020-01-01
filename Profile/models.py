from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from .managers import CustomUserManager

# Create your models here.


class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=50, null=False)
    last_name = models.CharField(max_length=50, null=False)
    email = models.EmailField(unique=True)

    REQUIRED_FIELDS = ['first_name', 'last_name']
    USERNAME_FIELD = 'email'
    objects = CustomUserManager()

    def __str__(self):
        return self.email
