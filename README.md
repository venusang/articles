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
- Follow the instructions on how to download, install and run the corresponding API built in Ruby on Rails here: https://github.com/venusang/articles-api.

## Installation

- `git clone git@github.com:venusang/articles.git`
- `cd articles`
- `npm install`

## Running / Development

- Make sure you have followed the steps for downloading, installing and running the API from https://github.com/venusang/articles-api before completing the next steps
- `ember server --proxy=http://localhost:3000`
- Verify your app is running by visiting your app in a web browser of your choice at [http://localhost:4200/articles](http://localhost:4200/articles).


## Screenshots

 ### http://localhost:4200/articles
 
![Image of articles](https://raw.githubusercontent.com/venusang/articles/master/app-screenshot.png)
