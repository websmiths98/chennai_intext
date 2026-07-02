from django.contrib import admin
from .models import Project, DetailedProject, ConstructionProject, PortfolioProject

admin.site.register(Project)
admin.site.register(DetailedProject)
admin.site.register(ConstructionProject)
admin.site.register(PortfolioProject)
