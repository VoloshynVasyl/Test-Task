# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000

## Tests

All test files located in `cypress` folder

####How to run tests
running locally  
`yarn install`  
then if you need to run it in chrome browser  
`yarn run cy:run-chrome`  
if you need to run it in electron browser  
`yarn run cy:run-electron`  
if you need to open Cypress Test Runner  
`yarn run cy:open`

####Project Structure:
- in `integration` folder you can find all tests(feature files) in BDD format
- in `pageObjects` folder located Page Objects(all needed pages, controls, elements and methods to work with them you can find here)
- `stepDefinitions` folder contains `common` folder with most frequently used step definitions and sub-folders with step definitions related to some specific aria
- `plugins` folder contains added `cypress-cucumber-preprocessor` plugin that needed for writing tests for cypress in BDD format. Also in the root project folder you can find `cypress.json` with config for cypress
