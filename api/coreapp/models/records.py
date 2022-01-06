""" Records Models. """

from django.db import models
from .utils import APIModel


class NameCategoryField(models.CharField):
    def __init__(self, *args, **kwargs):
        super(NameCategoryField, self).__init__(*args, **kwargs)
        
    def get_prep_values(self):
        return str(value).upper


class Category(APIModel, models.Model):
    name = NameCategoryField(max_length=300)
       
    class Meta:
       verbose_name = 'Categoria'
       verbose_name_plural = 'Categorias'    
    
    
    def __str__(self):
        return self.name


class Record(APIModel, models.Model):
    name = models.CharField(max_length=300, verbose_name='Nombre')
    quantity = models.IntegerField(verbose_name='Cantidad')
    image = models.ImageField(verbose_name='Imagen')
    category = models.ForeignKey('Category', on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
           verbose_name = 'Ficha'
           verbose_name_plural = 'Fichas'    
    
    
    def __str__(self):
        return str(('{}').format(self.name))