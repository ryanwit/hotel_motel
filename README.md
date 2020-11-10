# hotel_motel

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Hotel Motel is a guest management system designed for small occupancy hotels and motels. The application is simple to use, and allows the user to see all of the guest information and hotel occupancy on one screen. 

The user can input information about a guest when they want to save a reservation (guest name, number of guests, number of rooms, check-in date, check-out date, and guest phone number). This information is sent to the database and stored, a new guest is created and added to the guest check-in column. Once a guest is ready to check in the user can click the check in button and the guest is moved to the guest check-out column. The daily-occupancy updates the hotel data so the user can easily see how many rooms are still available for reservation.
 
When a guest is checked-out, the the guest is removed from the database and the room occupancy is updated accordingly. 

## Table of Contents 

* [Video](#video)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)
* [Future-Development](#future-development)

## Video

The video shows the working application. The employee can login in the welcome page. Once inside the application the user can add new guests to the hotel, check-in guests, check-out guests, and view the hotel occupancy capacity.

![Walkthrough Video](./applicationVideo.gif)

## Installation

Steps to install project include:
* npm install the dependencies 

## Usage 

![Getting Started](./public/assets/imgs/loginScreen.PNG)
* User is directed to the login page where they can provide credentials to enter the management system. 

## Credits

All of the code was developed by:
 * Claire Bohlen
    * GitHub Username: ClaireBohlen
    * GitHub Profile: (https://github.com/ClaireBohlen)
 * Dana Kuglin
    * GitHub Username: dakuglin
    * GitHub Profile: (https://github.com/dakuglin)
 * Joseph Meus
    * GitHub Username: meusjoseph21
    * GitHub Profile: (https://github.com/meusjoseph21)
 * Ryan Witherspoon
    * GitHub Username: ryanwit 
    * GitHub Profile: (https://github.com/ryanwit)
 * Taylor Hackbart 
    * GitHub Username: taylorhackbart
    * GitHub Profile: (https://github.com/taylorhackbart)

## License

This project is licensed under MIT.

## Future-Development

Future development for this application would include adding passport to the authentication login page. As of now the splash page congaing the login information is not a true authentication, no user data is stored or compared to a database for a true secure login. This is something we could add to our application. 
Another future development for this application is to turn this into a phone app. This would allow for small businesses to run an entire hotel management system off of their phone with our easy, simple to use guest management system.