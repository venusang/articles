# articles

This is an Ember (Octane) application that I built following the tutorial "Pagination in Ember with a JSON API Backend" by [Frank Treacy](https://emberigniter.com/pagination-in-ember-with-json-api-backend/).

The corresponding API with pagination that I built in Ruby on Rails is located here: https://github.com/venusang/articles-api

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)
- Ruby version 2.7
- Rails 5 and up (this uses 6.0.2.1)
- Download and install the API built in Ruby on Rails for this application: https://github.com/venusang/articles-api

## Installation

- `git clone <repository-url>` this repository
- `cd articles`
- `npm install`

## Running / Development

- The following steps assume you have the API from https://github.com/venusang/articles-api downloaded and running
- `ember server --proxy=http://localhost:3000`
- View your app in a web browser of your choice at [http://localhost:4200](http://localhost:4200/articles).
