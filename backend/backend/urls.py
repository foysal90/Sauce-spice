# from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('foods/', include('food_app.urls')),
# ]
from django.urls import path
from food_app import views
# from . import views
urlpatterns = [
    path('foods/', views.FoodList.as_view(), name='food_list'),
    path('add/', views.FoodAdd.as_view(), name='food_add'),
    # path('delete/<int:pk>/', views.FoodDelete.as_view(), name='food_delete'),
]
