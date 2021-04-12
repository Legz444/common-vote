# Welcome to Common Vote
Common Vote is a REACT voting application. 

It features the ability to register as a new user and vote on common political opinion surveys. Charts display the total votes from all users.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is written with Javascript and is A MERN stack.
    Back end uses MongoDB for the data base, Express Framework, and Axios for promise handling.
    Front End Is all REACT and styled using Bootstrap and React-Bootstrap.
    Charts are created with Chart-js.

## Initial Goals

### My MVP goals with this application were to:

### Allow the User to register, log in and vote. Allow the user to see what everyone is voting in comparision to their own vote.
I wanted to keep this application professional and simple and allow the user to focus on voting. The landing page is the log in page as to immediately have the user pass the authorization. Once they are logged in, the option to vote becomes accessable in the NavBar.The user can easily choose from a variety of options, but the don't technically vote until pressing the submit button. I wanted the user to have a chance to change their answer before submitting. 

The user has the ability to log out and log back in.

#### Charts js
I wanted the user to see a slightly animated chart of the total votes by all users for each question. When the user submits a vote, the Chart is displayed on the corresponding card. It shows their vote as well as all other votes that have been submitted so a user can immediately see where they and the rest of the population stand on these issues.

### Write my own Data
I wanted to create my own data and learn the in's and outs of structuring that data so it can be efficiently used through out the application. I created an object of political categories that are considered to be of importance to an average voter. Each Category is an array of objects, different questions and an answers array. 

I started with MVP of just hard coding this data into the back end in a get route.

### Create a Clean and Professional Application that is Focused
Voting is something that needs to be unbiased, and I wanted to create this application with that in mind. Few distractions and a focused goal for the user to achieved. The charts would add some movement and color while the rest would be a common bootstrap 'light' theme/.
    The log in page has a minimally distracting logo.
    The vote pages has the ability to open and collapse any questions you are not currently voting on. 
    Charts display after the user votes as to not sway them from their own personal opinion.

### Ability to store the users Data and store the total votes

I needed a user schema, model, and routes to allow for their information to be saved in the database. Using an extensive hash funciton, all passwords are safe from hacking and misuse. This gives the user the ability to log back in and view their votes.

The total votes also need to be saved to the data base as an object that can populate the charts. This data has to be global so all users have access to it in the charts that are displayed. If a user logs out and the local storage is cleared, there is still a running total. The user can log in again and have access to their votes and where they left off in the poll.


### Future Implementation

#### Challenges
The data is hard coded. In the future I will create a schema and model and route so new questions can be added over time through postman.

My charts are currently not displaying. I will populate the charts with each questions results and display them on submit.

The log in page isn't working. Although you are unable to register with the same email as before, I am unable to log back in on the original email address once logging out.

I need to deploy the website to heroku.

#### The Grand Vision:

Dectralize this application and have all users information run through blockchain.
Allow results to be free data for anyone to access ( They will not be able to know WHO voted WHAT, just the results of the population as a whole.)

Create a more extensive and dynamic poll.

Deeper authentication: Only registered voters and American Citizens can vote. Must be a certain age to register.

Allow for machine learning, so that for every question, the user has the option to type in their own opinion. With an algorithming that listens to user input and can sort through and organize it. If a large enough percentage of the population is saying the same thing, that opinion gets added to the list of answers to select. This same premise would be applied to decided WHAT gets voted on. Eventually they entire thing would be dynamically updated all the time. 

Provide users an incentive to use the application and pay them for their Data.
    In today's world, we are constantly allowing tech companies to use our data (unpaid labor) for free and to make more money off of us. CommonVote will be an alternative to this pattern. We would pay users to vote with a crypto currency that can only be used in America. User's can vote quarterly. Their information is encrypted, but the total results data api is free for any one to access and use. The great dream is that this data would be given to legislators as a way to keep them accountable to the people, to limit corruption among politicians and misinformation among the people. CommonVote used in this way would give us an opportunity to take direct responsibility for our our government and legislation. Every individual voice could be heard and every user created equal.

