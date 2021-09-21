from django.urls import path
from . import views

urlpatterns = [
    path('', views.ItemList.as_view(), name='item_list'),
    # path('add', views.ItemAdd.as_view(), name='item_add'),
]
