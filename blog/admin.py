from django.contrib import admin
from .models import Post, Comment


def approve_comments(modeladmin, request, queryset):
    queryset.update(active=True)


class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'author', 'content', 'date_posted', 'reply_to')
    list_filter = ('active', 'date_posted')
    search_fields = ('post', 'author', 'content')
    actions = [approve_comments]


admin.site.register(Post)
admin.site.register(Comment, CommentAdmin)
