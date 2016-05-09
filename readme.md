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







0. install node
0.1 install npm

1. new virtualenv
virtualenv -p python3 projectname

2. cd into the new virtualenv
cd projectname

3. install django
pip install django==1.9.6

4. start new project from the template
django-admin startproject projectname --template=/Users/jfaithorn/projects/django/django-webpack-scaffolding --name=package.json 

5. install django dependencies
cd projectname
pip install -r requirements.txt

6. point virtualenv activate script to project settings
add this line to ../bin/activate
DJANGO_SETTINGS_MODULE="projectname.settings_development"
export DJANGO_SETTINGS_MODULE

(change this on your production server to point to the production settings file)

6. install node dependencies
npm install
(you might have to run as sudo)


7. do an inital webpack build
npm run build
//this should make an inital bundle of your js and a js map file in static_src/bundles/


to start developing, open up another terminal window and cd to your projet directory
npm run watch 
//this will start a node js server instance and watch your front end files for changes
//webpack will automatically build when changes occur


migrate the db first to create an initial migration
python manage.py migrate



test the django dev server
python manage.py runserver

you should see a lovely, shiny new instance of your webpack front ent



when you're ready to test your production build:
0 turn off the webpack dev server with ^c
1. set debug to false in your settings
2. npm run build-production

this will copy the css/js bundles to static/dist
now django's traditional static files will serve the production bundles

check it by running 
python manage.py runserver

prior to deployment
python manage.py collectstatic
this will copy all of your static files over to /staticfiles.

now you can deploy to production.






0. install node
0.1 install npm

1. new virtualenv
virtualenv -p python3 projectname

2. cd into the new virtualenv
cd projectname

3. install django
pip install django==1.9.6

4. start new project from the template
django-admin startproject projectname --template=/Users/jfaithorn/projects/django/django-webpack-scaffolding --extension=js,json

5. install django dependencies
cd projectname
pip install -r requirements.txt

6. point virtualenv activate script to project settings
add this line to ../bin/activate
DJANGO_SETTINGS_MODULE="projectname.settings_development"
export DJANGO_SETTINGS_MODULE

(change this on your production server to point to the production settings file)

6. install node dependencies
npm install
(you might have to run as sudo)


7. do an inital webpack build
npm run build
//this should make an inital bundle of your js and a js map file in static_src/bundles/


to start developing, open up another terminal window and cd to your projet directory
npm run watch 
//this will start a node js server instance and watch your front end files for changes
//webpack will automatically build when changes occur


migrate the db first to create an initial migration
python manage.py migrate



test the django dev server
python manage.py runserver

you should see a lovely, shiny new instance of your webpack front ent



when you're ready to test your production build:
0 turn off the webpack dev server with ^c
1. set debug to false in your settings
2. npm run build-production

this will copy the css/js bundles to static/dist
now django's traditional static files will serve the production bundles

check it by running 
python manage.py runserver

prior to deployment
python manage.py collectstatic
this will copy all of your static files over to /staticfiles.

now you can deploy to production.