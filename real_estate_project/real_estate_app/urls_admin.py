from django.urls import path
from . import admin_dashboard

urlpatterns = [
    path('admin_base',admin_dashboard.admin_base,name="admin_base"),
    path('dashboard/',admin_dashboard.dashboard,name="dashboard"),
    path('admin_properties_categories',admin_dashboard.admin_properties_categories,name="admin_properties_categories"),
    path('admin_client_details',admin_dashboard.admin_client_details,name="admin_client_details"),
    path('admin_properties_list/<property_type>',admin_dashboard.admin_properties_list,name="admin_properties_list"),
    path('admin_properties_list/<property_type>/view/<customer_id>',admin_dashboard.admin_properties_list,name="admin_properties_list"),
    path('admin_customer_details_view/<id>',admin_dashboard.admin_customer_details_view,name="admin_customer_details_view")
]
