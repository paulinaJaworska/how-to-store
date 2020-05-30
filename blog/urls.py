from rest_framework import routers

from .api import PostViewSet, CommentViewSet

router = routers.DefaultRouter()
# params: URL prefix, viewset, basename
router.register('posts', PostViewSet, 'posts-list')
router.register('comments', CommentViewSet, 'comments-list')


urlpatterns = router.urls
