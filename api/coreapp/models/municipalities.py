""" Municipalities Models. """

from django.db import models
from .utils import APIModel


class College(APIModel, models.Model):
    name = models.CharField(max_length=300, verbose_name='Nombre')
    region = models.CharField(max_length=300, verbose_name='Region')
    commune = models.CharField(max_length=300, verbose_name='Comuna')
    province = models.CharField(max_length=300, verbose_name='Provincia')


    class Meta:
       verbose_name = 'Colegio'
       verbose_name_plural = 'Colegios'    
        
    def __str__(self):
        return self.name


class Municipality(APIModel, models.Model):
    name = models.CharField(max_length=300, verbose_name='Nombre')
    description = models.TextField(max_length=1000, verbose_name='Descripcion', blank=True, null=True)    
    grade = models.CharField(max_length=25, verbose_name='Curso' , blank=True, null=True)
    college = models.ForeignKey('College', on_delete=models.CASCADE, verbose_name='Colegio')    


    class Meta:
        verbose_name = 'Municipalidad'
        verbose_name_plural = 'Municipalidades'    
    
    def __str__(self):
        return self.name

class Workland(APIModel, models.Model):
    name_workland = models.CharField(max_length=300, verbose_name='Nombre cargo')
    name_person = models.CharField(max_length=300, verbose_name='Nombre person/a')
    municipality = models.ForeignKey('Municipality', on_delete=models.CASCADE, verbose_name='Municipalidad')
    
    class Meta: 
        verbose_name = 'Cargo de tabajo'
        verbose_name_plural = 'Cargos de trabajo'

    def __str__(self):
        return str(self.name_workland)