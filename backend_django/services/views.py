from rest_framework import viewsets
from .models import Service, NewService
from .serializers import ServiceSerializer, NewServiceSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class NewServiceViewSet(viewsets.ModelViewSet):
    queryset = NewService.objects.all()
    serializer_class = NewServiceSerializer
