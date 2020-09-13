from django.shortcuts import render
from django.http import JsonResponse
from django.views import View


# Create your views here.
class Papaya(View):
    def get(self, request):
        return JsonResponse({'status': 'ok'})
    def post(self, request):
        return JsonResponse({'status': 'ok'})

class PapayaDetails(View):
    def get(self, request, papaya_id):
        return JsonResponse({'status': 'ok'})
    def put(self, request, papaya_id):
        return JsonResponse({'status': 'ok'})
    def delete(self, request, papaya_id):
        return JsonResponse({'status': 'ok'})