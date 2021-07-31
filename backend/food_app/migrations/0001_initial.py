# Generated by Django 3.2 on 2021-07-21 02:59

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, default='anonymous', max_length=120, verbose_name='name')),
                ('price', models.PositiveIntegerField(blank=True, default=0, verbose_name='price')),
                ('image', cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='image')),
                ('status', models.CharField(db_index=True, default='anonymous', max_length=14, verbose_name='status')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created DateTime')),
                ('updated_at', models.DateTimeField(auto_now_add=True, verbose_name='updated DateTime')),
            ],
            options={
                'db_table': 'food',
            },
        ),
    ]