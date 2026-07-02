from django.db import models

class CompanyInfo(models.Model):
    name = models.CharField(max_length=100)
    tagline = models.CharField(max_length=150, blank=True, null=True)
    description = models.TextField(max_length=2000)
    long_description = models.TextField(max_length=5000, blank=True, null=True)
    founded_year = models.IntegerField(blank=True, null=True)
    employees = models.CharField(max_length=50, choices=[('1-10', '1-10'), ('11-50', '11-50'), ('51-200', '51-200'), ('201-500', '201-500'), ('500+', '500+')], blank=True, null=True)
    
    headquarters = models.JSONField(default=dict, blank=True)
    contact = models.JSONField(default=dict, blank=True)
    social_media = models.JSONField(default=dict, blank=True)
    
    licenses = models.JSONField(default=list, blank=True)
    certifications = models.JSONField(default=list, blank=True)
    awards = models.JSONField(default=list, blank=True)
    values = models.JSONField(default=list, blank=True)
    
    mission = models.TextField(max_length=500, blank=True, null=True)
    vision = models.TextField(max_length=500, blank=True, null=True)
    
    logo = models.CharField(max_length=255, blank=True, null=True)
    cover_image = models.CharField(max_length=255, blank=True, null=True)
    gallery = models.JSONField(default=list, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
