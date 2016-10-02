# Example MEAN App for FLCI

This is an example ToDo app build on the MEAN stack and fully dockerized.

## Quick Start
- install dependencies
  * docker
  * docker-compose
- start app: `docker-compose up`
- access app: `http://localhost:3333`
- stop app: `Ctrl+C` if app is launched interactively or use `docker-componse kill` if launched as daemon (`-d`)


## Other Means of Testing / Using App
- add a todo through api: `http -j POST :3333/api/todos text='Have a beer!'`
  * note: the above command requires [httpie](https://github.com/jkbrzt/httpie) (its an awesome tool, you should check it out)


## Attribution
this app came, in large part, from the ToDoAngular example app from https://github.com/epic-math/NodeJS-MEAN
