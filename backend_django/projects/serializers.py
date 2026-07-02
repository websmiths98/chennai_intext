from rest_framework import serializers
from .models import Project, DetailedProject, ConstructionProject, PortfolioProject

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class DetailedProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailedProject
        fields = '__all__'

class ConstructionProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConstructionProject
        fields = '__all__'

class PortfolioProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioProject
        fields = '__all__'
