from django.db import models

# Create your models here.


# add this
class tax_info(models.Model):
    Country = models.CharField(max_length=120)
    Tax_id = models.CharField(max_length=40)
    Name = models.CharField(max_length=120)
    Address_line1 = models.CharField(max_length=120)
    Address_line2 = models.CharField(max_length=120)
    City = models.CharField(max_length=50)
    Region = models.CharField(max_length=50)
    Zip_code = models.IntegerField(max_length=50)

    def _str_(self):
        return self.Name


class billing_address(models.Model):
    Country = models.CharField(max_length=120)
    Business_name = models.CharField(max_length=120)
    Name = models.CharField(max_length=120)
    Address = models.CharField(max_length=120)
    City = models.CharField(max_length=50)
    State = models.CharField(max_length=50)
    Zip_code = models.IntegerField(max_length=50)
    Send_voice_Email = models.BooleanField(default=False)

    def _str_(self):
        return self.Name


class expenses(models.Model):
    Total_amount = models.IntegerField()
    Date = models.CharField(max_length=30)
    Category = models.CharField(max_length=40)
    Note = models.CharField(max_length=120)
    Attached_file = models.CharField(max_length=120)

    def _str_(self):
        return self.Total_amount
