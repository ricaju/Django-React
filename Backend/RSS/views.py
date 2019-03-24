from django.shortcuts import render
from .models import RSSfeed
from .serializers import RSSfeedSerializer
from rest_framework import generics
from django.db.models import Q


class ChanelAll(generics.ListCreateAPIView): #createAPIVies je za post i get, staviti samo get?
	queryset = RSSfeed.objects.all()
	serializer_class = RSSfeedSerializer

class NewsFeeds(generics.ListCreateAPIView):
	queryset = RSSfeed.objects.filter(category="Vijesti")
	serializer_class = RSSfeedSerializer

class SportFeeds(generics.ListCreateAPIView):
	queryset = RSSfeed.objects.filter(category="Sport")
	serializer_class = RSSfeedSerializer

class ShowFeeds(generics.ListCreateAPIView):
	queryset = RSSfeed.objects.filter(category="Show")
	serializer_class = RSSfeedSerializer

class TechFeeds(generics.ListCreateAPIView):
	queryset = RSSfeed.objects.filter(category="Tech")
	serializer_class = RSSfeedSerializer

class SearchPost(generics.ListAPIView):
	serializer_class = RSSfeedSerializer
	model = serializer_class.Meta.model
	def get_queryset(self):
		query = self.kwargs['q']  #u reactu se doći atribut s name="q"
		if query:
			return self.model.objects.filter(
				Q(category=query)|   #Q LOOKUP u djangu
				Q(title=query)|
				Q(creator=query)
				).distinct()
		return None
