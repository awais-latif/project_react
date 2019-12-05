from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import TaxInfoSerializer, BillingAddressSerializer, ExpensesSerializer      # add this
from .models import tax_info, billing_address, expenses                     # add this


class TaxInfoView(viewsets.ModelViewSet):       # add this
    serializer_class = TaxInfoSerializer          # add this
    queryset = tax_info.objects.all()


class BillingAddressView(viewsets.ModelViewSet):       # add this
    serializer_class = BillingAddressSerializer          # add this
    queryset = billing_address.objects.all()


class ExpensesView(viewsets.ModelViewSet):       # add this
    serializer_class = ExpensesSerializer          # add this
    queryset = expenses.objects.all()
