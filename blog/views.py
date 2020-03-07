from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.urls import reverse
from django.views.generic import (ListView,
                                  DetailView,
                                  CreateView,
                                  UpdateView,
                                  DeleteView)

from .models import Post, Comment


class PostListView(ListView):
    """
        Displays maximum 5 posts with our items. Pass them to template in a reversed order.
    """
    model = Post
    template_name = 'blog/home.html'
    context_object_name = 'posts'
    ordering = ['-date_posted']
    paginate_by = 5


class PostDetailView(DetailView):
    """ Displays page with post's details. """
    model = Post


class PostCreateView(LoginRequiredMixin, CreateView):
    """ Form creating a new post. Requires to be logged in. Redirects to detail view."""
    model = Post
    fields = ['title', 'season', 'ripeness', 'storage', 'image']


class PostUpdateView(LoginRequiredMixin, UpdateView):
    """ Form updating a new post. Requires to be logged in. Redirects to detail view. """
    model = Post
    fields = ['title', 'season', 'ripeness', 'storage', 'image']


class PostDeleteView(LoginRequiredMixin, DeleteView):
    """ Delete post, directs to home page. Requires to be logged in. """
    model = Post
    success_url = '/'


class CommentCreateView(LoginRequiredMixin, CreateView):
    """
    Adds new comment. Automatically adds logged in user and post id before saving it. Redirects to detail view.
    """
    model = Comment
    fields = ['content']

    def get_success_url(self):
        """ Redirects to post detail page after the form is submitted"""
        post = self.object.post.pk
        return reverse('post-detail', kwargs={'pk': post})

    def form_valid(self, form):
        form.instance.author = self.request.user
        form.instance.post = Post.objects.get(pk=self.kwargs['pk'])
        return super().form_valid(form)


class CommentUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    """ Form updating a comment. Requires to be logged in. Redirects to detail view. """
    model = Comment
    fields = ['content']

    def test_func(self):
        comment = self.get_object()
        if self.request.user == comment.author:
            return True
        return False

    def get_success_url(self):
        """ Redirects to post detail page after the form is submitted"""
        post = self.object.post.pk
        return reverse('post-detail', kwargs={'pk': post})


class CommentDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    """ Deletes a comment. """
    model = Comment

    def test_func(self):
        comment = self.get_object()
        if self.request.user == comment.author:
            return True
        return False

    def get_success_url(self):
        post = self.object.post.pk
        return reverse('post-detail', kwargs={'pk': post})



class CommentAnswerCreateView(LoginRequiredMixin, CreateView):
    """ Adds answer to the comment under a post."""
    model = Comment

    def get_success_url(self):
        """ Redirects to post detail page after the form is submitted"""
        post = self.object.post.pk
        return reverse('post-detail', kwargs={'pk': post})

    def form_valid(self, form):
        form.instance.author = self.request.user
        form.instance.post = Post.objects.get(pk=self.kwargs['pk'])
        # comment to which this answer is a reply
        form.instance.reply_to = Comment.objects.get(pk=self.kwargs['comment'])
        return super().form_valid(form)
