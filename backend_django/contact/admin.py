from django.contrib import admin
from .models import Inquiry, AdminInquiry

# Even though Inquiry is now emailed, we register the model if it exists in DB schema
# AdminInquiry is definitely stored
admin.site.register(Inquiry)
admin.site.register(AdminInquiry)
