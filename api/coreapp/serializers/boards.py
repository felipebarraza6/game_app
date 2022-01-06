from django.db.models import fields
from rest_framework import serializers
from api.coreapp.models import Board, Exchange
from api.coreapp.serializers import RecordRetrieveSerializer, MunicipalityRetrieveSerializer

class BoardModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = '__all__'

class ExchangeModelSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Exchange
        fields = '__all__'

class ExchangeRetrieveSerializer(serializers.ModelSerializer):
    record1 = RecordRetrieveSerializer() 
    record2 = RecordRetrieveSerializer()
    class Meta:
        model = Exchange
        fields = '__all__' 

class BoardRetrieveSerializer(serializers.ModelSerializer):
    muni1 = MunicipalityRetrieveSerializer() 
    muni2 = MunicipalityRetrieveSerializer()
    #recordsm1 = RecordRetrieveSerializer()
    
    #recordsm1 = serializers.SlugRelatedField(
    #    many=True,
    #    read_only=True,
    #    slug_field='name'
    # )
    recordsm2 = RecordRetrieveSerializer(read_only=True, many=True)
    recordsm1 = RecordRetrieveSerializer(read_only=True, many=True)
         
    exchanges = serializers.SerializerMethodField('get_exchanges')

    def get_exchanges(self, x):
        qs = Exchange.objects.filter(board=x.uuid)
        serializer = ExchangeRetrieveSerializer(instance=qs, many=True)
        return serializer.data

    class Meta:
        model = Board
        fields = '__all__'


