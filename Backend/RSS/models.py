from django.db import models

class RSSfeed(models.Model):
	category = models.CharField(max_length=200)
	title = models.CharField(max_length=200)
	creator = models.CharField(max_length=200)
	description = models.TextField()
	link = models.CharField(max_length=300)
	pubDate = models.CharField(max_length=300, null=True)
	img = models.CharField(max_length=400)

