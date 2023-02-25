|||||
|:-:|:-:|:-:|:-:|
|![First Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482775/github_readme_images/react_dzmcqt.png)|![Second Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662483177/github_readme_images/axios_jlnlcn.png)|![Third Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662483316/github_readme_images/sass_yxqpyf.png)

|||||
|:-:|:-:|:-:|:-:|
|![First Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662483732/github_readme_images/redux-toolkit_nxvzow.png)|![Second Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662482745/github_readme_images/socketio_lcyu8y.jpg)

||
|:-:|
![First Image](https://res.cloudinary.com/dyamr9ym3/image/upload/v1662565384/github_readme_images/react-app-rewired_iw8y1f.png)


## Overview
Since the dawn of time, Caribou have been pretending to be stupid mammals but secretly observing the evolution of those
trashy unruly specimen of biped not optimality called humans.

Recently though, the Committee to Avoid Humans At All Point (CAHAAP) has discovered that it was becoming very difficult
to continue gather and exchange valuable intel using their encrypted antlers patterns.

To help them, we, the Assembly of Inter-Human-Caribou Harmony  (IHCH), have decided to provide them with the full
service of a modern experience while using their CaribouPhones (an Android variant, obviously)

## Features
1. SignUp and signIn authentication
2. Create broadcast to be open for messages.
3. Post map locations
4. Private chat messaging
5. In-app notification
6. Custom components
7. Unit tests
8. Redux implementation using redux-toolkit

## Main Tools
- Create react app
- React
- Redux-toolkit
- Axios
- React redux
- React router DOM
- SocketIO
- MapBox API
- Google Maps Search
- Leaflet
- React icons
- SASS
- Jest
- React testing library
- ESLint and Prettier
- React app rewired
- Mock service worker


## Requirements
- Node 16.x or higher - currently used v16.15.1

- Google Maps API key. You can create an account and obtain a key [here](https://developers.giphy.com/)
- MapBox Api Key. Create an account here and get the key [here](https://www.mapbox.com/)
- MongoDB Url. Sign up for mongoDb - create a cluster and connect to it through the app


- You'll need to copy the contents of `.env.develop`, add it to `.env` file and update with the necessary information.

- There are many different branches.


## Starting the App
- Change Directory into the ** caribou-project ** and then run inside the terminal:

```
npm run install:both
npm run start:both
```

- These two commands will install all the packages for both the client and the server and also start both applications in the terminal.



## Environment Variables Needed ** Very Important
## For The Server
- Environment
NODE_ENV=

- Port Backend
SERVER_PORT=

- Client Url
CLIENT_URL=
SERVER_URL=

- Database or DATABASE_URL=
MONGODB_URL=

- Token
JWT_ACCESS_TOKEN=
JWT_REFRESH_TOKEN=

- Session Keys
COOKIE_KEY_ONE=
COOKIE_KEY_TWO=


## For The Client
REACT_APP_MAPBOX_API_KEY=
REACT_APP_GOOGLE_API_KEY=



## Task
### Implementing the API PART
Function to allow the user to:
> Create a pin on the map in a specific location to signal the presence of a human that includes trashing level and level of excitement.
> Signal when a human has exited the zone


### Implementing the Single Page Application PART
> Displays a map of the users current vicinity
> Display the zone where humans are currently actively trashing the world
> Notify/Signals you when a human has quit the zone

## Requirements
- an API that allows :
  - [✔] to signal the presence of a human in a specific location with trashing level and level of excitement
  - [✔] to request if the presence of a human was signaled in a specific location
  - [✔] to signal a Caribou is ready to antler-exchange
  - [✔] is highly secured

- a Single Page Application that
  - [✔] displays a map of the current vicinity and display the zone where human are currently actively trashing the world
  - [✔] signals when a human has quit the zone
  - [✔] allows them to signal the presence of human and rate its trashing level
  - [1/2] presents a live-chat to allow Antler-exchange using the highly secure Caribou algorithm: every vowel is replaced by
    'muu' and every consonant is replaced by 'grm'
  - [✔] is secured to only allow signing up with addresses that are Cariboued (they contain 'carib' at the end of the
    username, like bruno-carib@orohealth.me is my Caribou address, yes, I am a secret Caribou agent)
Bonus/Optional
  - [✔] Make sure that an individual human can't be tracked?
  - [✔] Make sure that an individual Caribou can't be tracked?
  - [] Storing the chat conversation in a reversible encrypted format that only participant in the conversation can decrypt?



### Before Starting a Build
Make sure you run the installation first then start.


## What I would have implemented
> Sign up would have included the first name and last name
> Profile page so the user can update their information.
> Add Giphy API to allow more content to send
