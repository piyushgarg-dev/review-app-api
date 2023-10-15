
# Contributing to Review App API

Thank you for your interest in contributing to the Review App API! We appreciate your support and welcome your contributions to help enhance and improve the project. Please read through the following guidelines to get started.

## Table of Contents

- [Contributing to Review App API](#contributing-to-review-app-api)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
  - [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)
  - [Environment Configuration](#environment-configuration)
    - [Configuration Process](#configuration-process)
  - [Code of Conduct](#code-of-conduct)
  - [We Appreciate Your Contributions](#We-appreciate-your-contributions-and-look-forward-to-collaborating-with-you)

## Prerequisites

Before you begin contributing to the backend of the Review App, please ensure you have the following prerequisites installed and configured on your local machine:

- Docker: To set up and manage the development environment.
- Git: To clone and manage the project repository.
- Node.js and npm: To install project dependencies.
- Yarn: To manage Node.js packages effectively.

## Contributing Guidelines

We follow these guidelines for contributing:

1. Fork the backend repository to your GitHub account.

2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/review-app-api.git
3. Navigate to the backend project directory:
   ```bash 
    cd review-app-api
4. Create a new branch for your contribution:
   ```bash
   git checkout -b feature-name
5. Make your changes and ensure your code follows our coding standards and practices.
6. Test your changes locally to ensure they work as expected.
7. Commit your changes with clear and concise commit messages:
   ```bash
   git commit -m "Add feature: your feature description"
8. Create a pull request (PR) to the `main` repository's `main` branch.
   
## Setting Up the Development Environment

To set up the development environment locally, follow these steps:

1. Clone the backend repository:
   ```bash
   git clone https://github.com/yourusername/review-app-api.git cd review-app-api

2. Run Docker Compose to set up the development environment:
   ```bash
   docker-compose up -d

3. Install project dependencies using Yarn:
   ```bash
   yarn

4. Copy the `.env.example` file to .`env.local` and configure the
5. following environment variables in the `.env.local` file:
   ```env
   DATABASE_URL=postgresql://postgres:password@localhost:5432/review
   JWT_SECRET=superman123

  You can replace superman123 with any secret of your choice.

5. Run database migrations to set up the database:
   ```bash
   yarn migrate:latest

6. Start the local development server:
   ```bash
   yarn local

7. The backend will be up and running on port 8000.

## Submitting a Pull Request (PR)

When you're ready to submit your changes, create a pull request
(PR) to the `main` repository's main branch following our guidelines. 
Be sure to provide a clear description of your changes in the PR, and 
one of our maintainers will review it.

##  `Environment Configuration` 
### Configuration process
To configure the environment variables for the Review App API, follow these steps:

1. Copy the .env.example file to .env.local.
2. Configure the necessary environment variables in the .env.local file. In this case, the required environment variables are DATABASE_URL and JWT_SECRET.
3. The example shows the format for these variables and provides a placeholder value for JWT_SECRET. You are instructed to replace this placeholder value with a secret of your choice.  

## Code of Conduct
Please be aware that we have a Code of Conduct (CODE_OF_CONDUCT.md) that all
contributors are expected to follow. Please read and adhere to it throughout 
your contribution journey.

## We appreciate your contributions and look forward to collaborating with you 
## Thanks for your contribution ❤️



