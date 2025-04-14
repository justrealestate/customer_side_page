from django.contrib import admin
from django.conf.urls.static import settings
from django.urls import path,include
from real_estate_app import views,show_properties,session
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.welcome,name='welcome'),
    path('base',views.base,name='base'),
    path('index',show_properties.index, name = 'index'),
    path('profile/',views.profile, name = 'profile'),
    path('post_property',views.post_property, name='post_property'),
    path('property_view',show_properties.property_view,name='property_view'),
    path('registration/',include('real_estate_app.urls_registration')),
    path('land/',include('real_estate_app.urls_land')),
    path('residential/',include('real_estate_app.urls_residential')),
    path('commercial/',include('real_estate_app.urls_commerical')),
    path('plans/',views.plans,name="plans"),
    path('data_processing',views.data_processing,name='data_processing'),
    path('logout',session.logout,name='logout'),
    path('payment_gateway/',include('real_estate_app.urls_payment_gateway')),



    #admin

    path('admin_page/',include('real_estate_app.urls_admin')),
    

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

