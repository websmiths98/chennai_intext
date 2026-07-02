from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from projects.views import ProjectViewSet, DetailedProjectViewSet, ConstructionProjectViewSet, PortfolioProjectViewSet
from services.views import ServiceViewSet, NewServiceViewSet
from contact.views import InquiryViewSet, AdminInquiryViewSet
from company.views import CompanyInfoViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'detailed-projects', DetailedProjectViewSet)
router.register(r'construction-projects', ConstructionProjectViewSet)
router.register(r'portfolio-projects', PortfolioProjectViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'new-services', NewServiceViewSet)
router.register(r'contact', InquiryViewSet, basename='inquiry')
router.register(r'admin-contact', AdminInquiryViewSet)
router.register(r'company', CompanyInfoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
