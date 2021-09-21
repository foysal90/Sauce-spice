# Generated by Django 3.2 on 2021-09-20 20:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0003_alter_item_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('hot', 'Hot'), ('cold', 'Cold'), ('bagel', 'Bagel')], db_index=True, default='others', max_length=14, verbose_name='Category'),
        ),
    ]
