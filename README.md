# film-club
![Film Club-logos_black](https://user-images.githubusercontent.com/95320590/161390587-662d68d5-6daa-4fa2-b7fb-943293aeff85.png)

is a website designed to allow movie-lovers to keep track of the films they've watched, rate them, and receive recommendations based on their preferences. It can be used as a tool to keep track of what they have seen/what they want to see, or to learn which genres, directors and artists they love the most, and then discover new and less-known films they might not otherwise have heard of.

# Getting started

On top of the standard tech stack needed with most apps (node.js, npm, git...) you will need MongoDB with Mongoose. Details on installation can be found [here](https://www.mongodb.com/docs/manual/installation/). You will also need a TMDB API key - you can learn about TMDB and register for a key [here](https://developers.themoviedb.org/3/getting-started/introduction).

# Installation

First clone the repo and enter the server:

    git clone https://github.com/Chris-Mitchell90/film-club.git
    cd server
    npm i
    npm i bcrypt

To finish connecting back-end dependencies, ensure your MongoDB is up and running, and create a .env file with the following information

    SERVER_PORT = Your port of choice
    SECRETKEY = A random string of letters and numbers for encryption
    DB_NAME = Your database name
    API_KEY = Your TMDB API key
    
Then 

    npm start
    
Next, from the root folder cd into client/film-club and 

    npm i
    npm i react-router-dom react-cookie
    npm start

This will open the webpage to the login screen:

![2022-04-02](https://user-images.githubusercontent.com/95320590/161393035-68083887-23c1-45b4-b874-65942805c1b5.png)

# Tech Stack

React, Node.js with Express, MongoDB with Mongoose, TMDB API

# Author

Chris Mitchell - [LinkedIn](https://www.linkedin.com/in/chris-mitchell-software-engineer/)
