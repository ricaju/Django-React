from django.shortcuts import render
from .models import RSSfeed
from .serializers import RSSfeedSerializer
from rest_framework import generics

class ChannelList(generics.ListCreateAPIView): 
	queryset = RSSfeed.objects.get(category="Sport", "Show")  #nije dobro
	serializer_class = RSSfeedSerializer

class AllFeeds(generics.ListCreateAPIView):
	queryset = RSSfeed.objects.all()
	serializer_class = RSSfeedSerializer
