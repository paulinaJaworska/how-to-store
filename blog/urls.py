from django.urls import path
from rest_framework import routers

from .views import (PostListView,
                    PostDetailView,
                    CommentCreateView,
                    CommentAnswerCreateView,
                    CommentUpdateView,
                    CommentDeleteView
                    )
from .api import PostViewSet, CommentViewSet


router = routers.DefaultRouter()
# params: URL prefix, viewset, basename
router.register('api/posts', PostViewSet, 'posts-list')
router.register('api/comments', CommentViewSet, 'comments-list')

urlpatterns = [
    path('', PostListView.as_view(), name='blog-home'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/<int:pk>/comment/new/', CommentCreateView.as_view(), name='comment-create'),
    # path like 'post/<int:pk>/comment/<int:pk>/update/' won't work
    path('comment/<int:pk>/update/', CommentUpdateView.as_view(), name='comment-update'),
    path('comment/<int:pk>/delete/', CommentDeleteView.as_view(), name='comment-delete'),
    path('comment/<int:pk>/answer/new/', CommentAnswerCreateView.as_view(), name='answer-create'),
]

# routers has to be added to urls this way to existing path's list. Otherwise there is an error.
urlpatterns += router.urls