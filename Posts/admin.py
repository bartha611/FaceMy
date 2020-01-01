from django.contrib import admin
from .models import Post, Comment


# Register your models here.

class postsAdmin(admin.ModelAdmin):
    pass


class commentAdmin(admin.ModelAdmin):
    pass


admin.site.register(Post, postsAdmin)
admin.site.register(Comment, commentAdmin)
