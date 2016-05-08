####Installation
* make sure you have python3 and virtualenv and pip
* download from github
* put in ~/virtualenvs/
* cd into the folder


run pip install -r /path/to/requirements.txt


rename earlgrey to scaffolding.


standard directory for django static files
static/

webpack bundles dev scripts to 
static_src/
webpack-dev-server serves these locally during development.
I've purposefully left these out of the static files dirs so that when you run collectstatic it keeps bundles/ and js/ css/ out of the production static folder. 


##
Build this into a startproject template

https://github.com/django/django/blob/master/django/conf/project_template/project_name/settings.py-tpl

replace the appname with {{}}
https://docs.djangoproject.com/en/1.8/ref/django-admin/#startproject-projectname-destination
