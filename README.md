# URL Shortener
# File structure

```
url-shortener/
├── database/
│   |── development.sqlite
|   |── test.sqlite
|   |── production.sqlite
│
├── api/
│   ├── controllers/
│   │   └── UrlController.js
│   │
│   ├── models/
│       └── Url.js
│
├── config/
│   ├── env/
│   │   ├── development.js
│   │   ├── index.js
│   │   ├── production.js
│   │   └── test.js
│   │
│   ├── routes/
│   │   ├── index.js
│   │   └── url.js
│   │
│   ├── express.js
│   └── sequelize.js
│
├── view/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── javascript/
│   │   └── shorten.js
│   │
│   └── index.html
│
├── test/
│   └── url.test.js
│
├── .eslintrc                     * ESLint configuration file
├── .gitignore                    * Example git ignore file
├── index.js                      * Entry point of our Node's app
├── LICENSE                       * MIT License
├── package.json                  * Defines our JavaScript dependencies
├── package-lock.json             * Defines our exact JavaScript dependencies tree
└── README.md                     * This file
```

# Introduction

## What's a URL Shortener?

 URL shortening is a technique to convert a long URL (site or page address) to a shorter version. This shorter version of the URL is usually cleaner and easier to share or remember. When someone accesses the shortened address, the browser redirects to the original (large) url address. It is also called URL redirection or URL redirect.

For example, the large version of this url:
http://en.wikipedia.org/wiki/URL_shortening

Can be shortened with bit.do service to this small address, that redirects to the previous longer address:
http://bit.do/urlwiki

## How does it work?

Essentially, your database has 3 fields: `id`, `longUrl` and `shortId`.

Whenever a request come to shortener URL, it generate shortId from package `shortId` and save it database against that url
If that url already exist in database, just return shortId of that url instead of creating new one

## How to use this code?

### Running with node

1. Make sure you have the latest stable version of Node.js installed

```
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n stable
```

2. Install NPM dependencies

```
$ npm install
```

3. Run the project

```
$ npm start
```

### With docker

1. Build docker
```
docker build .
```

2. Run the project
```
docker-compose up
```

Navigate to `http://localhost:3000` in your browser to test it!
