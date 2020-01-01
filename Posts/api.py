from rest_framework import generics
from .models import Post
from .serializers import PostListSerializer
from rest_framework.permissions import IsAuthenticated


class PostList(generics.ListCreateAPIView):
    serializer_class = PostListSerializer
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Post.objects.all()
        username = self.request.query_params.get('username', None)
        if username != None:
            queryset = Post.objects.filter(author=username)
        return queryset

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = Post
    permission_classes = [IsAuthenticated]
