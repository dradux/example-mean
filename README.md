# Example MEAN Todo App

This is an example todo app. The app was built as an example/reference application, primarily for use with freelunchci.

This app is dockerized and will be kubernetized and freelunchized ;-)


## Notices
* this app is not intended to be a production ready app or the base for a production app, its purpose is for example/demonstration usage only.
* the `develop` branch has a freelunch.yml file created for you.
* please see the docs directory for more documentation / information.


## Prerequisites
* docker
* docker-compose


## Setup
* `docker-compose build`


## Run
* `docker-compose up`


## View
* go to: `http://localhost:3333`


## Stop App
* `Ctrl+C` if app is launched interactively or use `docker-componse kill` if launched as daemon (`-d`)


## FLCI Testing
* if you would like to change something in the app to cause a flci build you can update the app's version (public/js/core.js > appversion).


## Tests
* `docker-compose run -e "NODE_ENV=test" web /usr/src/app/node_modules/mocha/bin/mocha test/unit/*`


## Other Means of Using App
* add a todo through api: `http -j POST :3333/api/todos text='Have a beer!'`
  * note: the above command requires [httpie](https://github.com/jkbrzt/httpie) (its an awesome tool, you should check it out)


## Attribution
this app came, in large part, from the ToDoAngular example app from [epic-math's NodeJS-MEAN](https://github.com/epic-math/NodeJS-MEAN)
