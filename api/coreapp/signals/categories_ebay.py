# Signals

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from api.coreapp.models import CategoryEbay, CloneCategoryEbay


@receiver(post_save, sender=CategoryEbay)
def create_clone_category(sender, instance, created, **kwargs):
    if(created):
        CloneCategoryEbay.objects.create(
            best_offer_enabled = instance.best_offer_enabled,
            auto_pay_enabled = instance.auto_pay_enabled,
            category_id = instance.category_id,
            category_level = instance.category_level,
            category_name = instance.category_name,
            category_parent_id = instance.category_parent_id,
            leaf_category = instance.leaf_category,
            lsd = instance.lsd 
        )

@receiver(post_delete, sender=CategoryEbay)
def delete_clone_category(sender, instance, **kwargs):
    CloneCategoryEbay.objects.filter(category_id=instance.category_id).delete()