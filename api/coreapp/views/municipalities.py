
# Django REST Framework
from rest_framework import mixins, viewsets

# Permissions
from rest_framework.permissions import (	    
    IsAuthenticated
)

# Serializers
from api.coreapp.serializers import CollegeModelSerializer, MunicipalityRetrieveSerializer, MunicipalityModelSerializer

# Models
from api.coreapp.models import College, Municipality
from django_filters import rest_framework as filters




class CollegeViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.CreateModelMixin,
                mixins.UpdateModelMixin,
                mixins.DestroyModelMixin,
                mixins.RetrieveModelMixin):
    
    queryset = College.objects.all().order_by('-created')    
    lookup_field = 'id'    
    serializer_class = CollegeModelSerializer
    permission_classes = [IsAuthenticated]      
    filter_backends = (filters.DjangoFilterBackend,)       
    

class MunicipalityViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.CreateModelMixin,
                mixins.UpdateModelMixin,
                mixins.DestroyModelMixin,
                mixins.RetrieveModelMixin):
    
    queryset = Municipality.objects.all().order_by('-created')    
    lookup_field = 'id'    
    serializer_class = MunicipalityModelSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = (filters.DjangoFilterBackend,)       

    def get_serializer_class(self):        
        if self.action == 'retrieve':
            return MunicipalityRetrieveSerializer
        elif self.action == 'list':
            return MunicipalityRetrieveSerializer
        else:
            return MunicipalityModelSerializer