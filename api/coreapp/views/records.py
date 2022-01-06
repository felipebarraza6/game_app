
# Django REST Framework
from rest_framework import mixins, viewsets

# Permissions
from rest_framework.permissions import (	    
    IsAuthenticated
)

# Serializers
from api.coreapp.serializers import CategoryModelSerializer, RecordModelSerializer, RecordRetrieveSerializer

# Models
from api.coreapp.models import Record, Category
from django_filters import rest_framework as filters




class RecordViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.CreateModelMixin,
                mixins.UpdateModelMixin,
                mixins.DestroyModelMixin,
                mixins.RetrieveModelMixin):
    
    queryset = Record.objects.all().order_by('-created')    
    lookup_field = 'id'    
    serializer_class = RecordModelSerializer
    permission_classes = [IsAuthenticated]
      
    filter_backends = (filters.DjangoFilterBackend,)       
    
    def get_serializer_class(self):        
        if self.action == 'retrieve':
            return RecordRetrieveSerializer
        elif self.action == 'list':
            return RecordRetrieveSerializer
        else:
            return RecordModelSerializer
    
class CategoryViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.CreateModelMixin,
                mixins.UpdateModelMixin,
                mixins.DestroyModelMixin,
                mixins.RetrieveModelMixin):
    
    queryset = Category.objects.all().order_by('-created')    
    lookup_field = 'id'        
    serializer_class = CategoryModelSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = (filters.DjangoFilterBackend,)       