from rest_framework import viewsets
from .models import Project, DetailedProject, ConstructionProject, PortfolioProject
from .serializers import ProjectSerializer, DetailedProjectSerializer, ConstructionProjectSerializer, PortfolioProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class DetailedProjectViewSet(viewsets.ModelViewSet):
    queryset = DetailedProject.objects.all()
    serializer_class = DetailedProjectSerializer

class ConstructionProjectViewSet(viewsets.ModelViewSet):
    queryset = ConstructionProject.objects.all()
    serializer_class = ConstructionProjectSerializer

class PortfolioProjectViewSet(viewsets.ModelViewSet):
    queryset = PortfolioProject.objects.all()
    serializer_class = PortfolioProjectSerializer
