<p align="center">
  <img src="./icons/REVIEW.svg" alt="Review App Logo" width="200">
</p>

<h1 align="center">Review App Backend</h1>

<p align="center">
  <a href="https://github.com/piyushgarg-dev/review-app-api/actions">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/piyushgarg-dev/review-app-api/CI">
  </a>
  <a href="https://github.com/piyushgarg-dev/review-app-api/issues">
  <img alt="GitHub Issues" src="https://img.shields.io/github/issues/piyushgarg-dev/review-app-api">
  </a>
  <a href="https://github.com/piyushgarg-dev/review-app-api/forks">
  <img alt="GitHub Forks" src="https://img.shields.io/github/forks/piyushgarg-dev/review-app-api">
  </a>
  <a href="https://github.com/piyushgarg-dev/review-app-api/stargazers">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/piyushgarg-dev/review-app-api">
  </a>
  <a href="https://github.com/piyushgarg-dev/review-app-api/blob/main/LICENSE">
  <img alt="License" src="https://img.shields.io/github/license/piyushgarg-dev/review-app-api">
  </a>
</p>

## Overview

The Review App Backend is the server-side component of our review application. It allows you to create review forms, manage data, and generate statistics for your review data.

## Features

- Create and manage review forms.
- Collect and store review data.
- Generate statistics and reports.
- API for integrating with the frontend.

# review app Development

This repository contains the source code for review-app-api. Follow the instructions below to set up the project for development.

# PREREQUISITES

- Docker should be installed
- Yarn should be kept up to date

    


## Setup

1. Clone the repo into a public GitHub repository (or fork https://github.com/piyushgarg-dev/review-app-api/fork). If you plan to distribute the code, keep the source code public to comply with (https://github.com/piyushgarg-dev/review-app-api/blob/main/LICENCE). 

    ```sh
    git clone git@github.com:piyushgarg-dev/review-app-api.git
    ```

2. Go to the project folder

   ```sh
   cd review-app-api
   ```

3. Run the docker Image 

   ```sh
   docker compose up -d
   ```
4. Install packages with yarn

   ```sh
   yarn
   ```
5. Set up your `.env` file
   
   - Duplicate `.env.example` to `.env` or `.env.local`
   - ADD DATABASE_URL=postgresql://postgres:password@localhost:5432/review
   - ADD A RANDOM JWT_SECRET WHICH MAY CONTAIN STRING,NUMBERS ETC.

6. Run Migration 
   
   FOR CREATING NEW MIGRATION(FIRST_TIME):
   ```sh
   yarn prisma:migrate:local
   ```
   OR

   IF MIGRATION ALREADY EXIST:
   ```sh
    yarn migrate:latest
   ```

7. Start the local server at Port:8000 by running :
  
    ```sh
   yarn local
   ```

 ## Tips


- You can install yarn globally through npm packages
  ```sh
    npm install --global yarn
    ```
- You can check yarn version at 
  ```sh
    yarn --version
    ```

- You can go thorugh the docker engine setup by visiting this page:
   https://docs.docker.com/engine/install/


- You can install the docker desktop setup by visiting this page:
  https://docs.docker.com/desktop/install/windows-install/







   

  
    










