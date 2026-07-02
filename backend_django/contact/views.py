from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .serializers import InquirySerializer, AdminInquirySerializer
from .models import AdminInquiry # Only AdminInquiry uses DB now if needed, typically Inquiry doesn't.

class InquiryViewSet(viewsets.ViewSet):
    """
    A ViewSet for handling contact inquiries.
    Sends email directly, does not save to DB.
    """
    serializer_class = InquirySerializer

    def create(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            
            # Construct Email
            subject = f"New Project Inquiry from {data['name']} - {data['project_type']}"
            message = f"""
            New Inquiry Received:
            
            Name: {data['name']}
            Email: {data['email']}
            Phone: {data.get('phone', 'N/A')}
            Company: {data.get('company', 'N/A')}
            
            Project Type: {data['project_type']}
            Budget: {data['budget']}
            Timeline: {data['timeline']}
            
            Message:
            {data['message']}
            
            Preferred Contact: {data['preferred_contact']}
            Source: {data['source']}
            """
            
            recipient_list = [settings.CONTACT_RECIPIENT_EMAIL] if settings.CONTACT_RECIPIENT_EMAIL else []
            if not recipient_list:
                # Fallback or error if no recipient configured
                print("Warning: CONTACT_RECIPIENT_EMAIL not set.")
            
            print(f"Attempting to send email from {settings.EMAIL_HOST_USER} to {recipient_list}")

            try:
                send_mail(
                    subject,
                    message,
                    settings.EMAIL_HOST_USER, # From email
                    recipient_list,
                    fail_silently=False,
                )
                return Response({"message": "Inquiry sent successfully!"}, status=status.HTTP_200_OK)
            except Exception as e:
                print(f"Email Error: {e}")
                return Response({"error": "Failed to send email. Please try again later."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminInquiryViewSet(viewsets.ModelViewSet):
    queryset = AdminInquiry.objects.all()
    serializer_class = AdminInquirySerializer
