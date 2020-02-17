from django.http import HttpResponse
from django.shortcuts import render

posts = [
    {
        'title': 'skdjfhksjf',
        'content': 'sdfgsdfgsdl',
    },
    {
        'title': 'bbbbb',
        'content': 'aaaaa',
    },
]


def home(request):
    context = {
        'posts': posts,
        'title': 'Home'
    }
    return render(request, 'blog/home.html', context)
