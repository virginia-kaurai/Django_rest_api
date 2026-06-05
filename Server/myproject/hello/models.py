from django.db import models

# Create your models here.
class Teacher(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    teacher = models.ForeignKey(Teacher, on_delete=models.PROTECT)