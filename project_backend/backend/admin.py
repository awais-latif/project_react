from django.contrib import admin
from .models import tax_info  # add this


class TodoAdmin(admin.ModelAdmin):  # add this
    list_display = ('Country', 'Name', 'City')  # add this


# Register your models here.
admin.site.register(tax_info, TodoAdmin)  # add this
