from django.urls import path

from .views import (PostListView,
                    PostDetailView,
                    CommentCreateView,
                    CommentAnswerCreateView,
                    CommentUpdateView,
                    CommentDeleteView
                    )

urlpatterns = [
    path('', PostListView.as_view(), name='blog-home'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/<int:pk>/comment/new/', CommentCreateView.as_view(), name='comment-create'),
    # path like 'post/<int:pk>/comment/<int:pk>/update/' won't work
    path('comment/<int:pk>/update/', CommentUpdateView.as_view(), name='comment-update'),
    path('comment/<int:pk>/delete/', CommentDeleteView.as_view(), name='comment-delete'),
    path('comment/<int:pk>/answer/new/', CommentAnswerCreateView.as_view(), name='answer-create'),
]
