from .models import Food
from rest_framework import serializers


class FoodSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(allow_null=True)
    class Meta:
        model = Food
        fields = ['id','name', 'price','image', 'status', 'created_at', 'updated_at']
