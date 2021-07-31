from rest_framework import generics
from .serializers import FoodSerializer
from django.http import JsonResponse
from .models import Food

# from django.shortcuts import render
# from .models import Food
# from rest_framework import viewsets
# from rest_framework import permissions
# from food_app.serializers import FoodSerializer


# class FoodViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = Food.objects.all().order_by('created_at')
#     serializer_class = FoodSerializer
#     permission_classes = [permissions.IsAuthenticated]


class FoodList(generics.ListAPIView):
    # Get all posts, limit = 20
    queryset = Food.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = FoodSerializer


class FoodAdd(generics.CreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer


class FoodDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer


class FoodDelete(generics.DestroyAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
