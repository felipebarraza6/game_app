"""Users views."""

# Django REST Framework
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

# Permissions
from rest_framework.permissions import (	
    AllowAny,
    IsAuthenticated
)

# Serializers
from api.coreapp.serializers import (UserModelSerializer, LoginSerializer, SignUpSerializer)

# Models
from api.coreapp.models import User



class UserViewSet(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.RetrieveModelMixin):
    
    queryset = User.objects.all()    
    lookup_field = 'username'    
    serializer_class = UserModelSerializer

    def get_permissions(self):
        if self.action in ['login', 'signup']:
            permissions = [AllowAny]
        else:
            permissions = [IsAuthenticated]
        return [p() for p in permissions]


    @action(detail=False, methods=['post'])
    def signup(self, request):
        """User sign up."""
        serializer = SignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)           
   
            
    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': UserModelSerializer(user).data,
            'access_token': token
        }
        return Response(data, status=status.HTTP_200_OK)
        
