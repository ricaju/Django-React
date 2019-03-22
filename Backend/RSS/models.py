from django.db import models
import requests
from bs4 import BeautifulSoup
import html.parser

news = requests.get('https://www.24sata.hr/feeds/news.xml')
sport = requests.get('https://www.24sata.hr/feeds/sport.xml')
show = requests.get('https://www.24sata.hr/feeds/show.xml')
tech = requests.get('https://www.24sata.hr/feeds/tech.xml')


class RSSfeed(models.Model):
	category = models.CharField(max_length=200)
	title = models.CharField(max_length=200)
	creator = models.CharField(max_length=200)
	description = models.TextField()
	link = models.CharField(max_length=300)
	pubDate = models.DateTimeField(blank=True, null=True, auto_now_add = True)
	img = models.CharField(max_length=400)

soupSport = BeautifulSoup(sport.content, features="xml")
items = soupSport.findAll('item')
for item in items:
    category = item.category.text
    title = item.title.text
    creator = item.creator.text
    description = item.description.text
    link = item.link.text
    pubDate = item.pubDate.text
    h = html.parser.HTMLParser()
    i = BeautifulSoup(h.unescape(item.description.string))
    img = i.img['src']
    a = RSSfeed.objects.create(category=category, title=title, creator=creator, description=description, link=link, pubDate=pubDate, img=img)
    a.save()

soupNews = BeautifulSoup(news.content, features="xml")
items = soupNews.findAll('item')
for item in items:
    category = item.category.text
    title = item.title.text
    creator = item.creator.text
    description = item.description.text
    link = item.link.text
    pubDate = item.pubDate.text
    h = html.parser.HTMLParser()
    i = BeautifulSoup(h.unescape(item.description.string))
    img = i.img['src']
    b = RSSfeed.objects.create(category=category, title=title, creator=creator, description=description, link=link, pubDate=pubDate, img=img)
    b.save()

soupShow = BeautifulSoup(show.content, features="xml")
items = soupShow.findAll('item')
for item in items:
    category = item.category.text
    title = item.title.text
    creator = item.creator.text
    description = item.description.text
    link = item.link.text
    pubDate = item.pubDate.text
    h = html.parser.HTMLParser()
    i = BeautifulSoup(h.unescape(item.description.string))
    img = i.img['src']
    c = RSSfeed.objects.create(category=category, title=title, creator=creator, description=description, link=link, pubDate=pubDate, img=img)
    c.save()

soupTech = BeautifulSoup(tech.content, features="xml")
items = soupTech.findAll('item')
for item in items:
    category = item.category.text
    title = item.title.text
    creator = item.creator.text
    description = item.description.text
    link = item.link.text
    pubDate = item.pubDate.text
    h = html.parser.HTMLParser()
    i = BeautifulSoup(h.unescape(item.description.string))
    img = i.img['src']
    d = RSSfeed.objects.create(category=category, title=title, creator=creator, description=description, link=link, pubDate=pubDate, img=img)
    d.save()