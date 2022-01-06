
# Django REST Framework
from rest_framework import mixins, viewsets

# Permissions
from rest_framework.permissions import (	    
    IsAuthenticated
)

# Serializers
from api.coreapp.serializers import BoardModelSerializer, BoardRetrieveSerializer, ExchangeModelSerializer, ExchangeRetrieveSerializer

# Models
from api.coreapp.models import Board, Exchange
from django_filters import rest_framework as filters




class BoardViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.CreateModelMixin,
                mixins.UpdateModelMixin,
                mixins.DestroyModelMixin,
                mixins.RetrieveModelMixin):
    
    queryset = Board.objects.all().order_by('-created')    
    lookup_field = 'uuid'    
    serializer_class = BoardModelSerializer
    permission_classes = [IsAuthenticated]      
    filter_backends = (filters.DjangoFilterBackend,)       
    
    def get_serializer_class(self):        
        if self.action == 'retrieve':
            return BoardRetrieveSerializer
        elif self.action == 'list':
            return BoardRetrieveSerializer
        else:
            return BoardModelSerializer
    

class ExchangeViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.CreateModelMixin,
                mixins.UpdateModelMixin,
                mixins.DestroyModelMixin,
                mixins.RetrieveModelMixin):
    
    queryset = Exchange.objects.all().order_by('-created')    
    lookup_field = 'id'    
    serializer_class = ExchangeModelSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = (filters.DjangoFilterBackend,)       

    def get_serializer_class(self):        
        if self.action == 'retrieve':
            return ExchangeRetrieveSerializer
        elif self.action == 'list':
            return ExchangeRetrieveSerializer
        else:
            return ExchangeModelSerializer