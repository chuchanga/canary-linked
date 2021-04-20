# canary-linked 

In this file you will find the neccessary procedures that you must follow in order to get the CanaryLinked project up and running in your local repository. In addition, you will find here the specific changes and commands you´ll need in order to deploy the project.


## Get this project to your local working space ##

To import this project into your workspace you just need to:

Steps |	Console commands
------|-------------------
**Clone the project** in your **~/workspace** | `git clone git@github.com:chuchanga/canary-linked`

The project has **2 branches**: develop and main. We suggest you work on the develop branch or any sub-branches and merge into main only when you are ready to deploy a new version.

## Install the project´s dependencies ##
At the end of this README file you can find a list of all the dependencies.

Steps |	Console commands
------|-------------------
**Install** the required packages | `npm install`

## Compiles and hot-reloads for development ##
When developing you will want to compile in your localhost:

Steps |	Console commands
------|-------------------
**Compile** and **Run** the project locally | `npm run serve`

## Connecting to a Firebase database and authentification app ##
This project makes use of Firebase as an user authentification and cloud database platform.

More specifically the project makes us of:

Service |	Function
------|-------------------
**Firebase Authentication** | `Allows you to register users for log-in/log-out functions`
**Firestore Database** | `A table-based database where we store 4 main collections`
**Firebase Storage** | `A cloud storage you can link to Firestore and query thorugh code`

In the project´s "/src/components/" folder you can find 2 firebase-related. You will need to modify the firebaseConfig.js file with your own´s Firebase credentials. In addition to that, to ensure correct functioning, firebase is also imported in the /src/main.js file and whenever you make use of it in any vuejs component.

## Using Firebase ##

First of all, following this link will get you to Firebase´s Documentation https://firebase.google.com/docs .
We recommend you check the main documents in order to get a better understanding of firebase´s functionalities and workarounds.

The canary-linked project uses 5 Firestore Database collections where we store all the required information.
 Collection |	Function
------|-------------------
**users** | `Stores all the users information. User´s ID´s are linked to Firebase Authentication`
**offers** | `Stores the Offer Board´s offers`
**projects** | `Stores the Projects Board´s projects`
**messages** | `Stores the messages sent by users in the Contact form`
**arrayTraining** | `Stores the information displayed for every card in the Orientacion Laboral view`

1. The **"users"** collection´s documents must have the following field structure in order to function properly
------|-------------------
**name** |`String` `Stores the name a user inputs when registered`
**displayName** |`String` `Stores the @username`
**description** |`String` `Stores an user´s brief description`
**location** |`String` `Stores the messages sent by users in the Contact form`
**website** |`String` `Stores an user´s website or link to blog or social media`
**userType** |`String` `Stores an user is a "person" or an "entity"`
**savedOffers** |`Array of Strings` `Stores an array of the user´s saved offers´ ID´s`
**savedProjects** |`Array of Strings` `Stores an array of the user´s saved projects´ ID´s`

2. The **"offers"** and **"projects"** collections´ documents must have the following field structure in order to function properly
------|-------------------
**title** |`String` `Stores the offer or project title`
**description** |`String` `Stores the offer or project description`
**contactEmail** |`String` `Stores the submitter´s desired contact email`
**duration** |`String` `Stores an offer´s duration or a prohect´s month"`
**location** |`String` `Stores the offer or project location`
**creationTime** |`String` `Stores the offer/project submition time`
**image** |`String` `Stores the offer´s displayed image URL`
**show** |`Boolean` `Stores if the offer/project is displayed in the Board`
**submitterId** |`Strings` `Stores the ID of the  submitter`

3. The **"messages"** collections´ documents must have the following field structure in order to function properly
------|-------------------
**name** |`String` `Stores the offer or project title`
**message** |`String` `Stores the sent message`
**email** |`String` `Stores the submitter´s desired email`
**time** |`String` `Stores the message submition time`

## Google Analytics with Vue Analytics ##

 We use the **Vue Analytics** library to link the project to **Google Analytics** and allow live tracking.

 You must change the credentials in the `/src/main.js/` file for this to work.



## CanaryLinked use cases by userType ##

The projects has 3 main use cases related to the 3 types of users that will access the web.

1. **Unregistered Users**

Unregisterd user will be able to **view and read** all the *offers and projects* but as they won´t have access to a *UserProfile*, they won´t be able to creat or save offers or projects.

2. **"person" Users**

Users registered and logged-in as "person" will be able to **save** *offers and projects* from the *Board*. They´ll also be able to view and delete their saved *offers and projects* from their profile. In addition, they will be able to **create** *projects*.

3.  **"entity" Users**

Users registered and logged-in as "entity" will be able to **view and read** all the *offers and projects* but they won´t be able to save them. In addition, enitites  will be able to **create** *offers* from their user profile.


## Compilation and deployment ##

You shouldn´t be directly using any `npm run build` or `npm run deploy` scripts on the command line.

The `/.deploy.sh` file runs all the commands needed to build and deploy the project. It even includes different commented case-scenarios.

You will need, though, to give permision to this file by using `chmod +x deploy.sh`

## Dependencies used ##

"dependencies": {
    "@ocrv/vue-tailwind-pagination": "^0.0.4",
    "@splidejs/vue-splide": "^0.3.5",
    "@tailwindcss/forms": "^0.2.1",
    "axios": "^0.21.1",
    "chart.js": "^2.9.4",
    "core-js": "^3.6.5",
    "cors": "^2.8.5",
    "dns": "^0.1.2",
    "firebase": "^8.3.1",
    "firebase-functions": "^3.13.2",
    "google-maps-api-loader": "^1.1.1",
    "nodemailer": "^6.5.0",
    "vue": "^2.6.11",
    "vue-analytics": "^5.22.1",
    "vue-carousel": "^0.18.0",
    "vue-carousel-3d": "^1.0.1",
    "vue-googlemaps": "^0.1.2",
    "vue-plain-pagination": "^0.3.0",
    "vue-router": "^3.5.1",
    "vue-slick-carousel": "^1.0.6",
    "vue-slider-component": "^3.2.11",
    "vuex": "^3.6.2"
  },
  
  "devDependencies": {
    "@babel/core": "^7.13.14",
    "@storybook/addon-actions": "^6.2.3",
    "@storybook/addon-essentials": "^6.2.3",
    "@storybook/addon-links": "^6.2.3",
    "@storybook/vue": "^6.2.3",
    "@tailwindcss/postcss7-compat": "^2.0.4",
    "@testing-library/vue": "^5.6.1",
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/eslint-config-standard": "^5.1.2",
    "autoprefixer": "^9.8.6",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.2",
    "eslint": "^6.7.2",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.0",
    "eslint-plugin-vue": "^6.2.2",
    "jest": "^26.6.3",
    "lodash": "^4.17.21",
    "postcss": "^7.0.35",
    "sitemap-webpack-plugin": "^1.1.0",
    "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.0.4",
    "vue-cli-plugin-sitemap": "~2.3.0",
    "vue-loader": "^15.9.6",
    "vue-template-compiler": "^2.6.11"
  }

