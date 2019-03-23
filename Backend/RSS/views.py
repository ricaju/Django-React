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

class SearchPost(generics.ListCreateAPIView):
	serializer_class = RSSfeedSerializer
	def search(request):
		query = request.GET.get("q")  #u reactu se doći atribut s name="q"
		if query:
			queryset = RSSfeed.objects.filter(
				Q(category_icontains=query)|   #Q LOOKUP u djangu
				Q(title_icontains=query)|
				Q(creator_icontains=query)
				).distinct()
