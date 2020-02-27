from django.db import models
from django.utils import timezone
from django.urls import reverse


class Post(models.Model):
    title = models.CharField(max_length=100)
    season = models.TextField(null=True, blank=True)
    ripeness = models.TextField(null=True, blank=True)
    storage = models.TextField(null=True, blank=True)
    date_posted = models.DateTimeField(default=timezone.now)
    date_modified = models.DateTimeField(auto_now=True)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})
