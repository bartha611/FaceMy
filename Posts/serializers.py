from rest_framework import serializers
from .models import Post, Comment
from django.contrib.auth import get_user_model


class PostListSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Post
        fields = ('id', 'username', 'message', 'created_at', 'author')


class PostDetailSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Post
        fields = ['id', 'author', 'message',
                  'created_at', 'author', 'username']
