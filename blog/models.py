from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=100)
    season = models.TextField(blank=True)
    ripeness = models.TextField(blank=True)
    storage = models.TextField(blank=True)
    freezer = models.BooleanField(blank=True, default=False)
    date_posted = models.DateTimeField(default=timezone.now)
    date_modified = models.DateTimeField(auto_now=True)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})

    @property
    def comments(self):
        instance = self
        return Comment.objects.filter_by_instance(instance)


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    reply = models.ForeignKey('self', null=True, related_name='replies', on_delete=models.CASCADE)

    def __str__(self):
        return f'User {self.author.username} commented {self.content}'

