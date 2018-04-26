# Star Wars Planets

Web app that displays a table of planets featured in the Star Wars series using the Swapi API (http://swapi.co/api/planets). They can be sorted by page and a search function allows you to locate specifics planet. 

## Getting Started

Thes instructions below will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

The Swapi API can sometimes be tempremental. Refreshing usually helps!

### Prerequisites

Node is used to install all the dependencies required to run the app. Instructions for installing node on your system can be found here: (https://nodejs.org/en/download/package-manager/)

In a terminal window in the root folder, run:

```
npm install
```

To run the express server, use the following command:
```
node server.js
```

The web app can now be used on your browser at: http://localhost:3000/


## Running the tests

Once dependencies have been installed as above, tests can be run from the 'test' folder by using:

```
mocha IntegrationTests.js
``` 

## Built With

HTML, CSS and vanilla Javascript. Also implements:

* [Willmaster Table Sort](https://www.willmaster.com/) - JS Table sorting 
* [Swapli](http://swapi.co/api/) - Star Wars APIs

## Authors

* **Ross Hill** - [Github](https://github.com/rossghill)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details