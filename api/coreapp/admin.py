from django.contrib import admin
from api.coreapp.models import (User, Record, Category, 
                                College, Municipality, Board, 
                                Exchange, Workland)
from import_export.admin import ImportExportActionModelAdmin
from import_export import resources
from import_export.results import RowResult

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'created', 'modified')

@admin.register(Record)
class RecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'quantity', 'category', 'created', 'modified')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created', 'modified')

@admin.register(College)
class CollegeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'region', 'commune', 'province', 'created', 'modified')

@admin.register(Municipality)
class MunicipalityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'college', 'created', 'modified')

@admin.register(Board)
class MunicipalityAdmin(admin.ModelAdmin):
    list_display = ('uuid', 'date', 'title', 'created', 'modified')

@admin.register(Exchange)
class MunicipalityAdmin(admin.ModelAdmin):
    list_display = ('id', 'record1', 'record2', 'created', 'modified') 

@admin.register(Workland)
class WorklandlityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name_workland', 'name_person', 'created', 'modified') 
        