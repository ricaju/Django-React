from django.shortcuts import render
from .models import RSSfeed
from .serializers import RSSfeedSerializer
from rest_framework import generics

class ChannelList(generics.ListCreateAPIView): 
	queryset = RSSfeed.objects.values('category') #nije dobro
	serializer_class = RSSfeedSerializer

class AllFeeds(generics.ListCreateAPIView):
	queryset = RSSfeed.objects.all()
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

# def SearchPost(request):
# 	queryset = RSSfeed.object.active()
# 	query = request.GET.get("q")  #u reactu se doći atribut s name="q"
# 	if query:
# 		queryset = queryset.filter(
# 			Q(category_icontains=query)|   #Q LOOKUP u djangu
# 			Q(title_icontains=query)|
# 			Q(creator_icontains=query)
# 			).distinct()                  #return?