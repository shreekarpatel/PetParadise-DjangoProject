

<img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" height=100, src="https://raw.githubusercontent.com/shreekarpatel/PetParadise-DjangoProject/main/petparadise_Client/static/images/logo-3.png">

# Pet Paradise

A brief description of what this project does and who it's for

The petparadise is my diploma's final year project.


# Hi, I'm Shreekar! 👋

I built a project called “Pet Paradise" is an interactive and user-friendly web application that provides a wide range of Pets accessories to buy online. 

Using this web application user can search for any products online and place order for that. User can also have option to pay online. 

Admin can generate variety of reports and track the user order easily using admin interface. 
## Developed By

- [@shreekarpatel](https://github.com/shreekarpatel)


## Documentation

#### Some Specification About Project:

```http
 An basic information related to Project are as follow.
```

| Title  | Description |
| ------------- | ------------- |
| Project Tittle:  | PET PARADISE  |
| Project Category:| Web application  |
| Objective:  | Main objective is to setup a online website exclusively for pet food, accessories and basic related to pets (pet shelter and pet veterinary appointment).  |
| FrontEnd:  | HTML, CSS, JAVASCRIPT, AJAX, Jquery  |
| BackEnd:   | Python, Django(BackEdn Framework)    |
| Text Editior(IDE):   | PyCharm Community 2021  |
| Database:  | MySQL(XAMPP Server)  |
| Documentation Tools: | Microsoft PowerPoint, Microsoft Visio, Microsoft Word |

Full Documentation link: [Documentation](https://linktodocumentation)
## Screenshots
- Admin Site:
![App Screenshot](https://raw.githubusercontent.com/shreekarpatel/PetParadise-DjangoProject/main/Screenshot/Admin_Site/img_5.png)

- Client Site:
![App Screenshot](https://raw.githubusercontent.com/shreekarpatel/PetParadise-DjangoProject/main/Screenshot/Client_Site/img_6.png)


## Roadmap

- Follow Installtion steps.

- Follow Deployment steps.


## Installation

To Install project in your system follow below steps:

Go inside project folder

### Step 1:
```cmd
pip install -r requirement.txt
```

### Step 2:
```cmd
Install XAMPP Server 
```
### Step 3:
```cmd
Create Database in MySql inside XAMPP Server and name it "petparadise". 
```
### Step 4:
```cmd
Go inside setting.py in project folder of "petparadise".

And link database name in it.
```
### Step 5:
```cmd
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'petparadise', <------
        'USER': 'root',
        'HOST': 'localhost',
        'PORT': '3306',
        'PASSWORD': ''
    }
```    

### Step 6: Now migrate data to database
```cmd
python manage.py makemigrations

then:-

python manage.py migrate
```
## Deployment

To deploy this project run

```bash
  python manage.py runserver
```


## 🚀 About Me
I'm a full stack developer...


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shreekar-patel-2b0bb221a/)



