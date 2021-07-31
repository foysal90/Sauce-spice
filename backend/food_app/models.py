from django.db import models

# Create your models here.
from django.db import models
from cloudinary.models import CloudinaryField
# Create your models here.

class Food(models.Model):
    class Meta(object):
        db_table = 'food'

    name = models.CharField(
        'name', blank=False, null=False, max_length=120, db_index=True, default='anonymous'
    )  
    price = models.PositiveIntegerField(
        'price', default=0, blank=True
    ) 
    image = CloudinaryField(
        'image', blank=True, null=True 
    ) 
    status= models.CharField(
        'status', blank=False, null=False, max_length=14, db_index=True, default='anonymous'
    ) 

    created_at = models.DateTimeField(
        'created DateTime', blank=True, auto_now_add=True
    ) 
    updated_at = models.DateTimeField(
        'updated DateTime', blank=True, auto_now_add=True
    )
  
