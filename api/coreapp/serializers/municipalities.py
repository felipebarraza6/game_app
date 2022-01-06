from rest_framework import serializers
from api.coreapp.models import College, Municipality, Workland


class CollegeModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = '__all__'

class MunicipalityModelSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Municipality
        fields = '__all__'

class WorklandModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workland
        fields = '__all__' 

class MunicipalityRetrieveSerializer(serializers.ModelSerializer):
    college = CollegeModelSerializer()
    worklands = serializers.SerializerMethodField('get_worklands')

    def get_worklands(self, x):
        qs = Workland.objects.filter(municipality=x.id)
        serializer = WorklandModelSerializer(instance=qs, many=True)
        return serializer.data
        
    class Meta:
        model = Municipality
        fields = '__all__'

