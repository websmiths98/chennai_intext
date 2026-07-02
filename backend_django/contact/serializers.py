from rest_framework import serializers
from .models import Inquiry, AdminInquiry

class InquirySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=50, required=False, allow_blank=True)
    company = serializers.CharField(max_length=100, required=False, allow_blank=True)
    project_type = serializers.ChoiceField(choices=[('Residential', 'Residential'), ('Commercial', 'Commercial'), ('Industrial', 'Industrial'), ('Hospitality', 'Hospitality'), ('Renovation', 'Renovation'), ('Other', 'Other')], default='Other')
    budget = serializers.ChoiceField(choices=[('Under 5 Lakhs', 'Under 5 Lakhs'), ('5-10 Lakhs', '5-10 Lakhs'), ('10-25 Lakhs', '10-25 Lakhs'), ('25-50 Lakhs', '25-50 Lakhs'), ('Above 50 Lakhs', 'Above 50 Lakhs'), ('Not Sure', 'Not Sure')], default='Not Sure')
    timeline = serializers.ChoiceField(choices=[('Immediate', 'Immediate'), ('1-3 months', '1-3 months'), ('3-6 months', '3-6 months'), ('6+ months', '6+ months'), ('Just exploring', 'Just exploring')], default='Just exploring')
    message = serializers.CharField(max_length=2000)
    preferred_contact = serializers.ChoiceField(choices=[('phone', 'Phone Call'), ('whatsapp', 'WhatsApp'), ('email', 'Email')], default='email')
    source = serializers.CharField(max_length=50, default='website')

class AdminInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminInquiry
        fields = '__all__'
