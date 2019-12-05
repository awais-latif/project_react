from rest_framework import serializers
from .models import tax_info, billing_address, expenses


class TaxInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = tax_info
        fields = ('id', 'Country', 'Tax_id', 'Name', 'Address_line1',
                  'Address_line2', 'City', 'Region', 'Zip_code')


class BillingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = billing_address
        fields = ('id', 'Country', 'Business_name', 'Name', 'Address',
                  'City', 'State', 'Zip_code', 'Send_voice_Email')


class ExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = expenses
        fields = ('id', 'Total_amount', 'Date', 'Category', 'Note',
                  'Attached_file')
