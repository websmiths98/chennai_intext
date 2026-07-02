from django.db import models

class Inquiry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True, null=True)
    company = models.CharField(max_length=100, blank=True, null=True)
    project_type = models.CharField(max_length=50, choices=[('residential', 'residential'), ('commercial', 'commercial'), ('industrial', 'industrial'), ('infrastructure', 'infrastructure'), ('renovation', 'renovation'), ('other', 'other')])
    budget = models.CharField(max_length=50, choices=[('under-10k', 'under-10k'), ('10k-50k', '10k-50k'), ('50k-100k', '50k-100k'), ('100k-500k', '100k-500k'), ('over-500k', 'over-500k'), ('discuss', 'discuss')], default='discuss')
    timeline = models.CharField(max_length=50, choices=[('asap', 'asap'), ('1-3-months', '1-3-months'), ('3-6-months', '3-6-months'), ('6-12-months', '6-12-months'), ('over-1-year', 'over-1-year'), ('discuss', 'discuss')], default='discuss')
    message = models.TextField(max_length=2000)
    location = models.JSONField(default=dict, blank=True)
    preferred_contact = models.CharField(max_length=20, choices=[('email', 'email'), ('phone', 'phone')], default='email')
    status = models.CharField(max_length=20, choices=[('new', 'new'), ('in-review', 'in-review'), ('responded', 'responded'), ('closed', 'closed')], default='new')
    source = models.CharField(max_length=50, default='website')
    notes = models.TextField(max_length=1000, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.email} - {self.project_type}"

class AdminInquiry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True, null=True)
    company = models.CharField(max_length=100, blank=True, null=True)
    project_type = models.CharField(max_length=50, choices=[('residential', 'residential'), ('commercial', 'commercial'), ('industrial', 'industrial'), ('infrastructure', 'infrastructure'), ('renovation', 'renovation'), ('other', 'other')])
    budget = models.CharField(max_length=50, choices=[('under-10k', 'under-10k'), ('10k-50k', '10k-50k'), ('50k-100k', '50k-100k'), ('100k-500k', '100k-500k'), ('over-500k', 'over-500k'), ('discuss', 'discuss')], default='discuss')
    timeline = models.CharField(max_length=50, choices=[('asap', 'asap'), ('1-3-months', '1-3-months'), ('3-6-months', '3-6-months'), ('6-12-months', '6-12-months'), ('over-1-year', 'over-1-year'), ('discuss', 'discuss')], default='discuss')
    message = models.TextField(max_length=2000)
    location = models.JSONField(default=dict, blank=True)
    preferred_contact = models.CharField(max_length=20, choices=[('email', 'email'), ('phone', 'phone')], default='email')
    status = models.CharField(max_length=20, choices=[('new', 'new'), ('in-review', 'in-review'), ('responded', 'responded'), ('closed', 'closed')], default='new')
    source = models.CharField(max_length=50, default='website')
    notes = models.TextField(max_length=1000, blank=True, null=True)
    admin_notes = models.TextField(max_length=1000, blank=True, null=True)
    priority = models.CharField(max_length=20, choices=[('low', 'low'), ('medium', 'medium'), ('high', 'high')], default='medium')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.email} - {self.priority}"
