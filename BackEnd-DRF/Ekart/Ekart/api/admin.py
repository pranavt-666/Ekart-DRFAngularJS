from django.contrib import admin
from .models import Product, Cart, Category, Review

# Register your models here.
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Review)
admin.site.register(Category)
