##About
##Quickstart
Webpack is an immensely useful tool for front end projects. I've created project template for integrating webpack into your front end toolkit. 

We're committing everything to Git, so all developers will have access to the entire project. We just need to make a change to the environment for production and off we go. 

######Getting Started
Webpack requires NodeJS. We're not actually serving our project from Node, but we're using it to run a dev server, and to bundle and minify our static JS and CSS. Technically, we don't need node on our production server since we're building locally and following Django's normal *collectstatic* process.

But for your dev environment, verify that you have Node, npm, and virtualenv installed.

`node -v`
should yield > v4.2.2
`npm -v`
should yield > 2.14.7
`virtualenv --version`
should yeild > 13.1.0

[Node installation](https://docs.npmjs.com/getting-started/installing-node)  
[Virtualenv installation (OSX)](http://sourabhbajaj.com/mac-setup/Python/virtualenv.html)

###### Create a New Virtualenv
For Django 1.9 we're going to use Python 3. 
```language-bash
virtualenv -p python3 projectname && cd    projectname
```

Activate the virtualenv using the command:
`source bin/activate`

######Install Django
First install Django so that we can use *django-admin.*
```language-bash
pip install django==1.9.6
```

######Run Startproject
The [==startproject==](https://docs.djangoproject.com/en/1.9/ref/django-admin/#startproject) command accepts a parameter called *template* that will create the project from my template in Git. Replace **projectname** in the command with the name of your project. ( We're still in the same virtualenv folder .)

```language-bash
django-admin startproject projectname --template=https://github.com/toymakerlabs/django-webpack-scaffolding.zip --extension=js,json
```


######Install Django Dependencies
Now we need to install Django dependencies. ([==django-webpack-loader==](https://github.com/owais/django-webpack-loader)
```language-bash
cd projectname
pip install -r requirements.txt
```

######Update the Virtualenv Activate Script
Set the Django settings module in bin/activate.

Open *../bin/activate* in your editor of choice and paste the following at the bottom of your file (change *projectname* to the name of your project)

```language-bash
DJANGO_SETTINGS_MODULE="projectname.config.settings_development"
export DJANGO_SETTINGS_MODULE
```

Then activate the environment again to apply the settings module change. From the django project folder:

```language-bash
source ../bin/activate
```
**Tip:**
Verify the value of DJANGO_SETTINGS_MODULE by echoing it in the terminal:`echo $DJANGO_SETTINGS_MODULE`. It should print: *projectname.config.settings_development*


######Install Node Dependencies
Now we need to install Webpack and Webpack's supporting from *package.json*.


```language-bash
npm install
```

######Create an Initial Bundle
Test our config. Autocreates `./webpack-stats.json`


```language-bash
npm run build
```


######Start Webpack

```language-bash
npm run watch
```
The terminal should output a few messages, the first should let you know that the dev server is running on **0.0.0.0:3000** 

 

######Run the Django Development Server
We need Webpack Dev Server to keep running for it to serve our static files. So open up a new terminal window and activate the environment
```language-bash
source ../bin/activate
```
Create an initial migration.
```language-bash
python manage.py migrate
```
Run the dev server

```language-bash
python manage.py runserver
```


######Check it in the browser
Open your browser and paste:http://127.0.0.1:8000/

######Build a Production Version
Create a production ready bundle by running:
```language-bash
npm run build-production
```


######Workflow Overview

1. Start the node dev server by running `npm run watch`
2. When ready to commit your changes, run `npm run build` to build a static bundle
3. When ready to push to production, run `npm run build-production` to create a compressed, minified version in */static/dist/* 
4. Push to production and run `python manage.py collectstatic` to apply the changes to the static files






