from .models import RSSfeed
from rest_framework import serializers

class RSSfeedSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = RSSfeed
		fields = ('category', 'title', 'creator', 'description', 'link', 'pubDate', 'img')