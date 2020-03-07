from django.urls import path

from .views import (PostListView,
                    PostDetailView,
                    PostCreateView,
                    PostUpdateView,
                    PostDeleteView,
                    CommentCreateView,
                    CommentAnswerCreateView
                    )

urlpatterns = [
    path('', PostListView.as_view(), name='blog-home'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/new/', PostCreateView.as_view(), name='post-create'),
    path('post/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    path('post/<int:pk>/comment/new/', CommentCreateView.as_view(), name='comment-create'),
    path('post/<int:pk>/comment/<int:comment>/answer/new', CommentAnswerCreateView.as_view(), name='answer-create'),
]
