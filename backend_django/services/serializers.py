from rest_framework import serializers
from .models import Service, NewService

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class NewServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewService
        fields = '__all__'
