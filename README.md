# Cypress tests for Van Gogh Museum website

## About
Test cases in the website of Van Gogh Museum.


* [About](#About)
* [Preconditions](#Preconditions)
* [Local environment](#Local-environment)
    * [Configuration](#Configuration)
    * [Getting started](#Getting-started)
    * [Install dependencies](#Install-dependencies)
    * [Commands for running the tests](#Commands-for-running-the-tests)
* [Report](#Report)
* [Links](#Links)
* [Thanks](#Thanks)

## Preconditions
-  [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

-  Clone the project: 
`git clone https://github.com/marciovrl/van-gogh-museum.git`

## Local environment

### Configuration
- [Install node](https://www.techgalery.com/2019/12/how-to-install-nodejs-and-npm-on.html)

- [Install NPM](https://www.techgalery.com/2019/12/how-to-install-nodejs-and-npm-on.html)

- Install [Chrome](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en-GB) and/or [Firefox](https://support.mozilla.org/en-US/kb/install-firefox-linux)

### Getting started

- Install dependencies: `npm install`

### Commands for running the tests
- Open Cypress console: `npm run cypress:open` - Just go up the cypress console to run the tests, debug and configure.
- Run tests on chrome: `npm run cypress:chrome` - Run the entire suite of tests on chrome headless and after I finish it generates a report in HTML.
- Run tests on firefox: `npm run cypress:firefox` - Run the entire suite of tests on firefox headless and after I finish it generates a report in HTML

## Report

### Local report
After running the tests (local machine or in the docker) a report in HTML is automatically generated and stored in `mochawesome-report`.

## Links

### Cypress Documentation
Important support material for new implementations. Read more about this beautiful framework [here](https://docs.cypress.io/guides/overview/why-cypress)


## Thanks
