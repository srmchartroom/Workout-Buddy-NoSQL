# Workout-Buddy-NoSQL

--------------------
![](https://img.shields.io/badge/Code-NodeJs-informational?style=flat&logo=nodejs&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Express-informational?style=flat&logo=expressjs&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Express_Router-informational?style=flat&logo=express-router&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-JavaScript_ES6-informational?style=flat&logo=javascript&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Mongoose-informational?style=flat&logo=mongoose&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-ChartJS-informational?style=flat&logo=chartjs&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/CSS-CSS3-informational?style=flat&logo=css3&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/CSS-Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/CSS-Semantic_UI-informational?style=flat&logo=semanticui&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Nodemon-informational?style=flat&logo=nodemon&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Postman-informational?style=flat&logo=postman&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Github-informational?style=flat&logo=github&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Heroku-informational?style=flat&logo=heroku&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Tools-Mongo_Atlas-informational?style=flat&logo=mongodbatlas&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Data-MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=2bbc8a)


## Description

Workout Buddy is a simple (but pretty powerful) workout Tracker app to create and track daily workouts. The app logs and tracks multiple exercises in a workout on a given day. Per workout, the app tracks name of workout, duration of exercise (as well as total duration of workout), type of workout (resistance or cardio), weight/sets/reps (if resistance); or if cardio, distance traveled.  The concept leverages the generally-held psychology of accountability - if a person tracks their progress, they are more likely to achieve their goals.

This app in particular leverages nosql with MongoDB and Atlas, Node, Express, and Mongoose.


The application leaverages `node.js` and standard ES6 `JavaScript`, noSQL data store with `MonogoB` and `Atlas` supported through Node via `mongoose`, serves both HTML and API routes via `express` and `express-router`, and leverages additional node packages such as `dotenv` and `path`, as well as `chart.js` on the dashboard render.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)

## Installation

1. Download or clone this project and save it to your machine.
2. Be sure to update the connection and environment variables if you intend to deploy the application somewhere other than a local install.
3. From Bash, Terminal, or whichever CLI you use, navigate to the directory where you've saved the application files.
5. Install the package.json with `npm install` or simply `npm i`.
6. The database should be created and titled "workouts". You can easily seed the database from the command line using the command `node seeders/seed.js`.
7. Spin up and start the application from the command line by typing `node app.js`.

### You can see a live/deployed version of this application at https://project-mcginnis.herokuapp.com/

## Usage

The below provides a demo of the Workout Buddy application.

[![OVERVIEW: WORKOUT BUDDY APP IN ACTION](https://chartroomcreative.com/gitassets/workout-buddy-app.gif)](https://chartroomcreative.com/gitassets/workout-buddy-app.mp4)

## License

Copyright (c) 2020 Sean McGinnis, Chart Room Creative LLC.

This project is provided under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.

## Contributing

To contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

Be sure to test the application after installation and deploying it. No jest-based automated tests or otherwise have been developed for this particular project. But code formatting has been standardized and successful execution can be quickly confirmed by simply running the application. To complete this, follow the installation instructions above. Additional context and instruction can be reviewed in the video provided above under [usage](#usage).

## Questions

For questions, please contact [sean@chartroomcreative.com](mailto:sean@chartroomcreative.com).

See srmchartroom(https://github.com/srmchartroom) for additional repositories and contact information.

## Credits

This project was developed based on initial front-end source from Trilogy ED and the Full Stack Bootcamp at the University of North Carolina at Chapel Hill. The backend was developed and completed to execute for full functionality by Sean McGinnis, and additional tweaks to the front-end were added by Sean McGinnis. If you'd also like to contribute to this project, please see the [contributing](#contributing) section above.
