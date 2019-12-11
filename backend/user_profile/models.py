from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    """
    User profile model.

    Extends functionality of default django user model and adds some additional fields.

    """

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')

    class Meta:
        verbose_name = 'User profile'


    def __str__(self):
        """Get user string representation."""
        return f'[ID={self.id}] User profile: {self.user}'


