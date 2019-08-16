from rest_framework import generics,request
from django.shortcuts import redirect

# Create your views here.

class ProxyView(generics.GenericAPIView):

    def get(self, request):
        print(request.build_absolute_uri().split('/?redirect=')[1])
        target_url = request.build_absolute_uri().split('/?redirect=')[1]
        return redirect(target_url)