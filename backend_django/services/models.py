from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    short_description = models.CharField(max_length=200, blank=True, null=True)
    category = models.CharField(max_length=50, choices=[('general-contracting', 'general-contracting'), ('design-build', 'design-build'), ('construction-management', 'construction-management'), ('pre-construction', 'pre-construction'), ('renovation', 'renovation'), ('specialty-services', 'specialty-services')])
    icon = models.CharField(max_length=100, blank=True, null=True)
    image_url = models.CharField(max_length=255, blank=True, null=True)
    tags = models.JSONField(default=list, blank=True)
    features = models.JSONField(default=list, blank=True)
    pricing = models.JSONField(default=dict, blank=True)
    duration = models.CharField(max_length=100, blank=True, null=True)
    active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class NewService(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    short_description = models.CharField(max_length=200, blank=True, null=True)
    category = models.CharField(max_length=50, choices=[('general-contracting', 'general-contracting'), ('design-build', 'design-build'), ('construction-management', 'construction-management'), ('pre-construction', 'pre-construction'), ('renovation', 'renovation'), ('specialty-services', 'specialty-services')])
    icon = models.CharField(max_length=100, blank=True, null=True)
    image_url = models.CharField(max_length=255, blank=True, null=True)
    tags = models.JSONField(default=list, blank=True)
    features = models.JSONField(default=list, blank=True)
    pricing = models.JSONField(default=dict, blank=True)
    duration = models.CharField(max_length=100, blank=True, null=True)
    active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
