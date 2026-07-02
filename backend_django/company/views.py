from rest_framework import viewsets
from .models import CompanyInfo
from .serializers import CompanyInfoSerializer

class CompanyInfoViewSet(viewsets.ModelViewSet):
    queryset = CompanyInfo.objects.all()
    serializer_class = CompanyInfoSerializer
