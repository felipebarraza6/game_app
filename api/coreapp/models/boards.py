""" Municipalities Models. """

from django.db import models
from .utils import APIModel
from .records import Record
from .municipalities import Municipality 
import uuid


class Board(APIModel, models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    muni1 = models.ForeignKey('Municipality', on_delete=models.CASCADE, related_name='board_muni1')
    muni2 = models.ForeignKey('Municipality', on_delete=models.CASCADE, related_name='board_muni2')
    date = models.DateField(verbose_name='Fecha')
    title = models.CharField(max_length=300, verbose_name='Titulo')
    recordsm1 = models.ManyToManyField('Record', related_name='board_recordsm1', blank=True, verbose_name='Fichas muni1')
    recordsm2 = models.ManyToManyField('Record', related_name='board_recordsm2', blank=True, verbose_name='Fichas muni2')
    report = models.TextField(max_length=1000, blank=True, null=True, verbose_name='Reporte')
    zoom_link= models.TextField(max_length=1000, blank=True, null=True)

    class Meta:
       verbose_name = 'Tablero'
       verbose_name_plural = 'Tableros'    
    
    
    def __str__(self):
        return str(self.title)

class Exchange(APIModel, models.Model):
    board = models.ForeignKey('Board', on_delete=models.CASCADE)
    record1 = models.ForeignKey('Record', on_delete=models.CASCADE, related_name='exchange_record1')
    record2 = models.ForeignKey('Record', on_delete=models.CASCADE, related_name='exchange_record2')

    class Meta:
           verbose_name = 'Intercambio'
           verbose_name_plural = 'Intercambios'    
    
    
    def __str__(self):
        return str(self.board)