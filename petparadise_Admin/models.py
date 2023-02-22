from django.db import models

# Create your models here.
class area(models.Model):
    area_id = models.AutoField(primary_key=True)
    area_name = models.CharField(max_length=20)


    class Meta:
        db_table = "area"



class customer(models.Model):
    c_id = models.AutoField(primary_key=True)
    c_name = models.CharField(max_length=20)
    c_email = models.EmailField(unique=True)
    c_contact = models.CharField(max_length=20)
    c_address = models.CharField(max_length=200)
    c_password = models.CharField(max_length=20)
    is_admin = models.IntegerField()
    c_otp = models.CharField(max_length=10, null=True)
    c_otp_used = models.IntegerField(null=True)
    area_id=models.ForeignKey(area,on_delete=models.CASCADE)


    class Meta:
        db_table = "customer"

class shelter_home(models.Model):
    shelter_id = models.AutoField(primary_key=True)
    shelter_name = models.CharField(max_length=20)
    owner_name = models.CharField(max_length=20)
    shelter_email = models.EmailField(unique=True)
    shelter_contact = models.CharField(max_length=20)
    shelter_address = models.CharField(max_length=200)
    shelter_location = models.CharField(max_length=200)
    shelter_password = models.CharField(max_length=20)
    shelter_image = models.CharField(max_length=200)

    class Meta:
        db_table = "shelter_home"


class doctor(models.Model):
    doctor_id = models.AutoField(primary_key=True)
    doctor_name = models.CharField(max_length=20)
    doctor_email = models.EmailField(unique=True)
    doctor_password = models.CharField(max_length=20)
    doctor_contact = models.CharField(max_length=20)
    doctor_address = models.CharField(max_length=200)
    doctor_image = models.CharField(max_length=200)

    class Meta:
        db_table = "doctor"

class category(models.Model):
    category_id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=20)
    category_descripation = models.CharField(max_length=200)

    class Meta:
        db_table = "category"


class sub_category(models.Model):
    sub_category_id = models.AutoField(primary_key=True)
    sub_category_name = models.CharField(max_length=20)
    sub_category_descripation = models.CharField(max_length=200)
    category_id = models.ForeignKey(category, on_delete=models.CASCADE)

    class Meta:
        db_table = "sub_category"

class product(models.Model):
    product_id = models.AutoField(primary_key=True)
    sub_category_id = models.ForeignKey(sub_category,on_delete=models.CASCADE)
    product_name = models.CharField(max_length=50)
    product_description = models.CharField(max_length=400)
    product_price = models.FloatField()
    product_quantity = models.IntegerField()
    product_image = models.CharField(max_length=200)

    class Meta:
        db_table= "product"

class cart(models.Model):
    cart_id = models.AutoField(primary_key=True)
    product_id = models.ForeignKey(product, on_delete=models.CASCADE)
    c_id = models.ForeignKey(customer, on_delete=models.CASCADE)
    c_date = models.DateField()
    c_qty = models.IntegerField()
    total_amt = models.IntegerField()

    class Meta:
        db_table= "cart"

class wishlist(models.Model):
    wishlist_id = models.AutoField(primary_key=True)
    product_id = models.ForeignKey(product, on_delete=models.CASCADE)
    c_id = models.ForeignKey(customer, on_delete=models.CASCADE)
    w_date = models.DateField()

    class Meta:
        db_table = "wishlist"


class order(models.Model):
    order_id = models.AutoField(primary_key=True)
    order_date = models.DateField()
    c_id = models.ForeignKey(customer,on_delete=models.CASCADE)
    total_amount = models.FloatField()
    order_status = models.CharField(max_length=50)
    payment_status = models.IntegerField()

    class Meta:
        db_table= "order"

class order_item(models.Model):
    order_item_id = models.AutoField(primary_key=True)
    order_id = models.ForeignKey(order,on_delete=models.CASCADE)
    product_id = models.ForeignKey(product,on_delete=models.CASCADE)
    qty_id = models.CharField(max_length=100)
    product_price = models.FloatField()
    total_amount = models.FloatField()


    class Meta:
        db_table= "order_item"

class gallery(models.Model):
    gallery_id = models.AutoField(primary_key=True)
    image_path = models.CharField(max_length=200)
    product_id = models.ForeignKey(product,on_delete=models.CASCADE)

    class Meta:
        db_table= "gallery"

class feedback(models.Model):
    feedback_id = models.AutoField(primary_key=True)
    c_id = models.ForeignKey(customer,on_delete=models.CASCADE)
    product_id = models.ForeignKey(product,on_delete=models.CASCADE)
    feedback_message = models.CharField(max_length=100)
    feedback_date = models.DateField()
    rate = models.IntegerField()

    class Meta:
        db_table= "feedback"


class appointment(models.Model):
    appointment = models.AutoField(primary_key=True)
    c_id = models.ForeignKey(customer,on_delete=models.CASCADE)
    doctor_id = models.ForeignKey(doctor,on_delete=models.CASCADE)
    appointment_time = models.CharField(max_length=100)
    appointment_date = models.DateField()
    appointment_status = models.IntegerField()

    class Meta:
        db_table= "appointment"


class doctor_slots(models.Model):
    slot_id=models.AutoField(primary_key=True)
    doctor_time=models.CharField(max_length=100)
    doctor_id=models.ForeignKey(doctor, on_delete=models.CASCADE)
    s_status=models.IntegerField(null=True)

    class Meta:
        db_table = "doctor_slots"