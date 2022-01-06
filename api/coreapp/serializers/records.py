
from rest_framework import serializers
from api.coreapp.models import Record, Category


class CategoryModelSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Category
        fields = '__all__'
        
class RecordModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'
        
class RecordRetrieveSerializer(serializers.ModelSerializer):
    category = CategoryModelSerializer()
    class Meta:
        model = Record
        fields = '__all__'
