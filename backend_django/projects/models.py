from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField(max_length=500)
    featured = models.BooleanField(default=False)
    image_url = models.CharField(max_length=255, blank=True, null=True)
    project_url = models.CharField(max_length=255, blank=True, null=True)
    tags = models.JSONField(default=list, blank=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class DetailedProject(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=2000)
    short_description = models.CharField(max_length=300, blank=True, null=True)
    status = models.CharField(max_length=50, choices=[('planning', 'planning'), ('in-progress', 'in-progress'), ('completed', 'completed'), ('on-hold', 'on-hold')], default='planning')
    start_date = models.DateTimeField(blank=True, null=True)
    end_date = models.DateTimeField(blank=True, null=True)
    budget = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    
    location = models.JSONField(default=dict, blank=True)
    client = models.JSONField(default=dict, blank=True)
    contractor = models.JSONField(default=dict, blank=True)
    
    tags = models.JSONField(default=list, blank=True)
    images = models.JSONField(default=list, blank=True)
    documents = models.JSONField(default=list, blank=True)
    
    featured = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ConstructionProject(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    status = models.CharField(max_length=50, choices=[('planning', 'planning'), ('in-progress', 'in-progress'), ('completed', 'completed'), ('on-hold', 'on-hold')], default='planning')
    start_date = models.DateTimeField(blank=True, null=True)
    end_date = models.DateTimeField(blank=True, null=True)
    budget = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    
    location = models.JSONField(default=dict, blank=True)
    contractor = models.JSONField(default=dict, blank=True)
    
    tags = models.JSONField(default=list, blank=True)
    images = models.JSONField(default=list, blank=True)
    
    featured = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class PortfolioProject(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=2000)
    short_description = models.CharField(max_length=300, blank=True, null=True)
    category = models.CharField(max_length=50, choices=[('residential', 'residential'), ('commercial', 'commercial'), ('industrial', 'industrial'), ('infrastructure', 'infrastructure'), ('renovation', 'renovation')])
    status = models.CharField(max_length=50, choices=[('planning', 'planning'), ('in-progress', 'in-progress'), ('completed', 'completed'), ('on-hold', 'on-hold')], default='planning')
    start_date = models.DateTimeField(blank=True, null=True)
    end_date = models.DateTimeField(blank=True, null=True)
    budget = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    
    location = models.JSONField(default=dict, blank=True)
    client = models.JSONField(default=dict, blank=True)
    contractor = models.JSONField(default=dict, blank=True)
    
    tags = models.JSONField(default=list, blank=True)
    images = models.JSONField(default=list, blank=True)
    documents = models.JSONField(default=list, blank=True)
    
    featured = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
