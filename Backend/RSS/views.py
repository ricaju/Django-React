from django.shortcuts import render
from .models import RSSfeed
from .serializers import RSSfeedSerializer
from rest_framework import generics
from django.db.models import Q
import requests
from bs4 import BeautifulSoup
import html.parser

news = requests.get('https://www.24sata.hr/feeds/news.xml')
sport = requests.get('https://www.24sata.hr/feeds/sport.xml')
show = requests.get('https://www.24sata.hr/feeds/show.xml')
tech = requests.get('https://www.24sata.hr/feeds/tech.xml')

soupSport = BeautifulSoup(sport.content, features="xml")
items = soupSport.findAll('item')
for item in items:
    category = item.category.text
    title = item.title.text
    creator = item.creator.text
    description_soup = BeautifulSoup(item.description.text, features="xml")
    description = description_soup.text
    link = item.link.text
    pubDate = item.pubDate.text
    h = html.parser.HTMLParser()
    i = BeautifulSoup(h.unescape(item.description.string), features="xml")
    img = i.img['src']
    a = RSSfeed.objects.create(category=category, title=title, creator=creator, description=description, link=link, pubDate=pubDate, img=img)
    a.save()

soupNews = BeautifulSoup(news.content, features="xml")
items = soupNews.findAll('item')
for item in items:
    category = item.category.text
    title = item.title.text
    creator = item.creator.text
    description_soup = BeautifulSoup(item.description.text, features="xml")
    description = description_soup.text
    link = item.link.text
    pubDate = item.pubDate.text
    h = html.parser.HTMLParser()
    i = BeautifulSoup(h.unescape(item.description.string), features="xml")
    img = i.img['src']
    b = RSSfeed.objects.create(category=category, title=title, creator=creator, description=description, link=link, pubDate=pubDate, img=img)
    b.save()

soupShow = BeautifulSoup(show.content, features="xml")
items = soupShow.findAll('item')
for item in items:
    category = item.category.text
    title = item.title.text
    creator = item.creator.text
    description_soup = BeautifulSoup(item.description.text, features="xml")
    description = description_soup.text
    link = item.link.text
    pubDate = item.pubDate.text
    h = html.parser.HTMLParser()
    i = BeautifulSoup(h.unescape(item.description.string), features="xml")
    img = i.img['src']
    c = RSSfeed.objects.create(category=category, title=title, creator=creator, description=description, link=link, pubDate=pubDate, img=img)
    c.save()

soupTech = BeautifulSoup(tech.content, features="xml")
items = soupTech.findAll('item')
for item in items:
    category = item.category.text
    title = item.title.text
    creator = item.creator.text
    description_soup = BeautifulSoup(item.description.text, features="xml")
    description = description_soup.text
    link = item.link.text
    pubDate = item.pubDate.text
    h = html.parser.HTMLParser()
    i = BeautifulSoup(h.unescape(item.description.string), features="xml")
    img = i.img['src']
    d = RSSfeed.objects.create(category=category, title=title, creator=creator, description=description, link=link, pubDate=pubDate, img=img)
    d.save()


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
	paginate_by = 100
	def get_queryset(self):
		query = self.kwargs.get('q')  #u reactu se doći atribut s name="q"
		if query:
			return self.model.objects.filter(
				Q(category=query)|   #Q LOOKUP u djangu
				Q(title=query)|
				Q(creator=query)
				).distinct()
		return None
