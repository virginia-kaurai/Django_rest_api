from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import TeacherSerializer,StudentsSerializer
from .models import Teacher ,Students
from rest_framework import generics


class TeacheView(APIView):
    def get (self,request):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers,many=True)
        return Response(serializer.data)
    
    def post (self,request):
        serializer = TeacherSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
class StudentView(generics.ListCreateAPIView):
    queryset = Students.objects.all()
    serializer_class= StudentsSerializer

