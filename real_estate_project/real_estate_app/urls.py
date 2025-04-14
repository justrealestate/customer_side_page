from django.urls import path
from . import email_verification


urlpatterns = [
    path('send_email/', email_verification.email_login, name='send_email_form'),
    path('send_email/send/', email_verification.send_email, name='send_email'),
    path('send_email/otp/',email_verification.email_login_otp,name='email_login_otp'),
    path('send_email/otp_verification/',email_verification.otp_verification,name="otp_verification")
]
