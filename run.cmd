@echo off

cd ./OnlineSchool
start npm run dev

cd ../Server
start node app.js
