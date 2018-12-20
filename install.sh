#!/bin/bash
cd front-end/
npm install
npm run build
rm -rf ../back-end/public/*
cp -R build/* ../back-end/public/
cd ../back-end/functions/
npm install
cd ../
firebase deploy