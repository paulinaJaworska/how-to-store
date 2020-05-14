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
    serializer_class = CommentSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.model.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
