from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User


class Post(models.Model):
    """ Stores details about how to store fruits and vegetables. """
    title = models.CharField(max_length=100)
    season = models.TextField(blank=True)
    ripeness = models.TextField(blank=True)
    storage = models.TextField(blank=True)
    freezer = models.BooleanField(blank=True, default=False)
    date_posted = models.DateTimeField(default=timezone.now)
    date_modified = models.DateTimeField(auto_now=True)
    image = models.ImageField(default='post_default.jpg', upload_to='post_pics')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})

    @property
    def comments(self):
        """ It helps to display only comments that are not replies. """
        return Comment.objects.filter(reply_to__isnull=True, post=self)


class Comment(models.Model):
    """ Users comments amd answers to comments(self reference) under each post. """
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    reply_to = models.ForeignKey('self', null=True, related_name='replies', on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.content
