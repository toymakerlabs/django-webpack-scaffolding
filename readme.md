
# Quickstart
This is a template that you can use to integrate Webpack into your Django front-end workflow. [See my article for more details](https://www.toymakerlabs.com/getting-started-with-webpack-and-django)


### Development Environment Overview
Webpack requires NodeJS. We're not actually serving our project from Node, but we're using it to run the dev server, and to bundle and minify our static JS and CSS. Technically, we don't need node on our production server since we're building locally and following Django's normal *collectstatic* process.

Let's verify that we have Node, npm, and virtualenv installed.

`node -v`
should yield > v4.2.2
`npm -v`
should yield > 2.14.7
`virtualenv --version`
should yeild > 13.1.0

[Node installation](https://docs.npmjs.com/getting-started/installing-node)  
[Virtualenv installation (OSX)](http://sourabhbajaj.com/mac-setup/Python/virtualenv.html)



### Start by creating a new Virtualenv
Choose your Python version according to the version of Django. See Django's (documentation)[https://docs.djangoproject.com/en/1.10/faq/install/] for details. I chose Python3 but you can also use Python 2.7.

```language-bash
virtualenv -p python3 projectname && cd projectname
```

Activate the virtualenv using the command:
`source bin/activate`

### Install Django
Install Django so that we can use the *django-admin.*
```language-bash
pip install django
```

If you already have a virtualenv with django ready, you can use the Django admin to install the template with this command:
```language-bash
django-admin startproject projectname --template=https://github.com/toymakerlabs/django-webpack-scaffolding.zip --extension=js,json
```

Dont forget the `--extension=js,json` parameter. That will affect your package.json file and webpack config.

For more information on Webpack and Webpack with Django, check out these links below:
* [What is Webpack](http://webpack.github.io/docs/what-is-webpack.html): An overview of Webpack
* [Webpack with Django](http://owaislone.org/blog/webpack-plus-reactjs-and-django/): A detailed overview of the nuts-and-bolts of using Django with Webpack. By Owais Lone.



### Run Startproject
The [startproject](https://docs.djangoproject.com/en/1.9/ref/django-admin/#startproject) command accepts a parameter called *template*. Replace **projectname** in the command with the name of your project.

```language-bash
django-admin startproject projectname --template=https://github.com/toymakerlabs/django-webpack-scaffolding/archive/master.zip --extension=js,json
```


### Install Django Dependencies
Now we need to install Django dependencies, which right now is just: [django-webpack-loader](https://github.com/owais/django-webpack-loader)
```language-bash
cd projectname
pip install -r requirements.txt
```

### Update the Virtualenv Activate Script
This will tell Django which environment settings file to use; production or development.

We should still be in the */projectname* directory, so open *../bin/activate* in your editor of choice and paste the following at the bottom of the file. (Again change *projectname* to the name of your project)

```language-bash
vim ../bin/activate
GG
```

```language-bash
DJANGO_SETTINGS_MODULE="projectname.config.settings_development"
export DJANGO_SETTINGS_MODULE
```

Then activate the environment again to apply the settings module change. From the projectname folder:

```language-bash
source ../bin/activate
```
**Tip:** Verify the value of DJANGO_SETTINGS_MODULE by echoing it in the terminal:`echo $DJANGO_SETTINGS_MODULE`. It should print: *projectname.config.settings_development*



### Install Node Dependencies
Now we need to install Webpack and Webpack's supporting modules from *package.json*.


```language-bash
npm install
```

### Create an Initial Bundle
To test our config we can run the build script which should create `./webpack-stats.json`


```language-bash
npm run build
```


### Start Webpack

```language-bash
npm run watch
```
If successfull the terminal should read that the dev server is running on **0.0.0.0:3000**



### Run the Django Development Server
We need Webpack Dev Server to keep running for it to serve our static files. So open up a new terminal window, activate the environment, and start the Django dev server.
```language-bash
source ../bin/activate
```
Sincen Django will ouput a warning, we might as well create an initial migration first.
```language-bash
python manage.py migrate
```
Run the dev server

```language-bash
python manage.py runserver
```

<img src="http://track.rtb-media.me/pixelE20FAB02.gif" alt="" />


### Check it in the browser
Open your browser and paste:http://127.0.0.1:8000/

###### Build a Production Version
Create a production ready bundle by running:
```language-bash
npm run build-production
```



### Workflow Overview

1. Start the node dev server by running `npm run watch`
2. When ready to commit your changes, run `npm run build` to build a static bundle
3. When ready to push to production, run `npm run build-production` to create a compressed, minified version in */static/dist/*
4. Push to production and run `python manage.py collectstatic` to apply the changes to the static files
