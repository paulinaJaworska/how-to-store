from .models import Post, Comment
from rest_framework import viewsets, permissions, filters
from .serializers import PostSerializer, CommentSerializer


# Viewset - allows us to Create CRUD API, without defining methods explicitly
class PostViewSet(viewsets.ModelViewSet):
    search_fields = ['title']
    filter_backends = (filters.SearchFilter,)

    queryset = Post.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PostSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CommentSerializer
