# Inkling Node.js Code Challenge

This code challenge is designed to mirror real world tasks that we do in relation to search and APIs here at Inkling. Each challenge builds on the other, taking you through a progression of prototyping to a more robust solution for creating an autocomplete backend in Node.js.

### Getting started

Make sure you are using Node.js version 10.

```sh
nvm use v10
```

You will need to install dependencies by running:

```sh
yarn
```

This challenge uses [server.js](https://serverjs.io/documentation/) for its simplicity out of the box. For testing it uses [jest](https://facebook.github.io/jest/docs/en/getting-started.html).

### Taking the Challenge

We've added a number of stub files and tests, each representing a task to complete. Each task has one or more unittests associated with them. You can run the tests for each file you've changed by running:

```sh
yarn test
```

This will also watch for any changes you make and automatically re-run the tests for you.

To start the web server for the controller challenges, run:

```sh
yarn start
```

This will also watch for changes and automatically restart. In particular the two API endpoints implemented here are [index](http://localhost:9000/index) and [pagedindex](http://localhost:9000/pagedindex).

### Sample Data

Sample book data has been provided in the [suggestions.json](data/suggestions.json) file and a utility in [Suggestions.js](src/autocomplete/Suggestions.js) has been provided to easily get that list of data from it. Most of the unit tests already make use of this data and you should attempt to avoid making modifications to it.

### The Rules

Feel free to use the internet to perform searches, you can also install additional libraries as long as they don't implement the task in its entirety for you.

We've put a number of tasks into this challenge and do not expect folks to finish every single challenge. Take your time and work through each, ensuring your code is well structured and documented if necessary and well tested. Commit your code changes to the repository after completing each challenge. Complete the tasks in the order:

* [Autocomplete1](src/autocomplete/Autocomplete1.js)
* [Autocomplete2](src/autocomplete/Autocomplete2.js)
* [Autocomplete3](src/autocomplete/Autocomplete3.js)
* [SimpleAutocompleteController](src/controllers/SimpleAutocompleteController.js)
* [PagedAutocompleteController](src/controllers/PagedAutocompleteController.js)
* [GeneralAutocompleteController](src/controllers/GeneralAutocompleteController.js)

If you do complete all the tasks before time is up feel free to add additional endpoints and controllers to the server to experiment with other improvements that could be made to this system. Feel free to use docker and docker-compose if you want to expore using other services like elasticsearch.
