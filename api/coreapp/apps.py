from django.apps import AppConfig


class AppcoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api.coreapp'

    def ready(self):
        import api.coreapp.signals

