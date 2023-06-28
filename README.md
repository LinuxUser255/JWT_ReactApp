# Login page: NodeJS React & JWTs 

### Built With
* ![](https://github.com/LinuxUser255/JWT_ReactApp/blob/main/REACT_JS_README_Logo.svg)https://react.dev
* ![](https://github.com/LinuxUser255/JWT_ReactApp/blob/main/NodeJSLogo.svg)https://nodejs.org/en
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Overview
* Set up authentication so that only a request with a JWT can access the dashboard
* After a user signs up they log in and are given a signed JWT
* Only registered users should be able to obtain a JWT

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How the app works
When logging in, the app looks for the username and password.
If both the username and password exist, then it will create a new signed JWT. Otherwise, an error is returned.
Upon successful creation of the JWT, the user will be notified.

**The main endpoints, and correct URL with correct paths are:**
```
 http://localhost:3000/api/v1/dashboard
 http://localhost:3000/api/v1/login
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

1. Check that the package versions in **package.json** are the most recent
2. Edit the package.json file accordingly before running the npm install command
3. Once all that is done, run the following commands

* Install the packages and Express for API development
 ```sh
  npm install --save express 
```

* Install nodemon it's a development package. It auto runs the server. 
```shell
npm install --save-dev nodemon
```
* Edit `package.json` to make running the server easier. Add this to the `package.json` file
```shell
"start": "nodemon.js"
```
*  Install a parser to parse incoming request bodies
```shell
 npm install --save body-parser
```
<!-- USAGE EXAMPLES -->
## Usage

Run the commands listed above in the console of your IDE, (I used Jet Brains WebStorm). Then open a browser and navigate to http://localhost:3000

_For more information, please refer to the [WebStorm Documentation](https://www.jetbrains.com/help/webstorm/meet-webstorm.html)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>
