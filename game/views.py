from django.http import HttpResponse

def index (request):
    return HttpResponse("伟大的史诗级巨著")
