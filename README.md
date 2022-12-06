# Final-project
Tech stack: 
* React/ Redux
* Node.js
* Express
* PostgreSQL
* Mapbox Api
* Material UI

## Project: SUPPORT YOUR GANG 
Support your gang, is a platform that allows you to search for people, NGOs, homeless people who need help, donations or even volunteer work. Through the website it is possible to search for addresses and map the places that are close to you, allowing you to help people as quickly as possible, and even if they are not so close, it is still possible to contact them to help. To make this project possible, MAPBOX was used, which is an API to work with coordinates, with mapbox it was able to convert text into coordinates and find the corresponding address. So you type in an address and mapbox searches through millions of data and finds the best result based on the text we type.


## Setup

Clone the directory and navigate  to its root directory
```bash
git clone git@github.com:priscilauchoa/final-project.git
cd final-project
```

### Spin Postgres DB
```bash
cd server
./db-init.sh
```

> PS: You must have Docker installed

### Install node.js dependencies
```bash
npm install
```

### Set your AWS keys for S3 uploading
Edit `AWS_KEY` and `AWS_SECRET` in the `server/secrets.json` file.

### Set session secret for cookies encryption
Edit `SESS_SECRET` in the `server/secrets.json` file.

## Run
> Execute the following commands in separate terminal sessions

### Start backend
```bash
npm run dev:server
```

### Start frontend
```bash
npm run dev:client
```

In your browser, navigate to http://localhost:3000/ 