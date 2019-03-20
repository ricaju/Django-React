from django.urls import path
from . import views

urlpatterns = [
	path('api/ChannelList', views.ChannelList.as_view()),
	path('api/AllFeeds', views.AllFeeds.as_view()),
	path('api/SportFeeds', views.SportFeeds.as_view()),
	path('api/ShowFeeds', views.ShowFeeds.as_view()),
	path('api/TechFeeds', views.TechFeeds.as_view()),
]