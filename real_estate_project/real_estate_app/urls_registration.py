from django.urls import path
from . import registration


urlpatterns = [
    path('signup/',registration.signup,name="signup"),
    path('signup/verification',registration.signup_verification,name="signup_verification"),
    path('login/',registration.login,name="login"),
    path('login/verification',registration.login_verification,name="login_verification")
]