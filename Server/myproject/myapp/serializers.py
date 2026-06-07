from rest_framework import serializers
from .models import Teacher,Students

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields ='__all__'

class StudentsSerializer(serializers.ModelSerializer):
    teacher= TeacherSerializer()
    class Meta:
        model= Students
        fields ='__all__'
