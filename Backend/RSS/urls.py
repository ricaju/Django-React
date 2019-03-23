from django.urls import path
from . import views

urlpatterns = [
	path('api/ChanelAll', views.ChanelAll.as_view()),
	path('api/NewsFeeds', views.NewsFeeds.as_view()),
	path('api/SportFeeds', views.SportFeeds.as_view()),
	path('api/ShowFeeds', views.ShowFeeds.as_view()),
	path('api/TechFeeds', views.TechFeeds.as_view()),
	path('api/SearchPost', views.SearchPost.as_view()),
]