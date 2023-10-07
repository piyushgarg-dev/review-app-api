# Contributing to Review App API

Thank you for your interest in contributing to Review App API! We welcome contributions from the community to help improve and enhance the project. Please take a moment to read through the following guidelines to get started.

## Table of Contents

- [Getting Started](#getting-started)
- [Contributing Guidelines](#contributing-guidelines)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)
- [Code of Conduct](#code-of-conduct)

## Getting Started

Before you start contributing to the backend, make sure you have:

- A GitHub account.
- Git installed on your local machine.
- Docker Desktop installed on your local machine.
- Node.js and npm (Node Package Manager) installed on your local machine.
- Yarn installed on your local machine.

## Contributing Guidelines

We follow these guidelines for contributing:

1. Fork the backend repository to your GitHub account.

2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/review-app-api.git
   ```

3. Navigate to the backend project directory:

   ```bash
   cd review-app-api
   ```

4. Create a new branch for your contribution:

   ```bash
   git checkout -b feature-name
   ```

5. Make your changes and ensure your code follows our coding standards and practices.

6. Test your changes locally to ensure they work as expected.

7. Commit your changes with clear and concise commit messages:

   ```bash
   git commit -m "Add feature: your feature description"
   ```

8. Push your changes to your GitHub fork:

   ```bash
   git push origin feature-name
   ```

9. Create a pull request (PR) to the main repository's `main` branch.

## Setting Up the Development Environment

## Frontend

To contribute to the `review-app` project, you'll also need to set up the frontend. The frontend code is located in the `review-app` repository.

- Frontend Repository: [review-app](https://github.com/piyushgarg-dev/review-app)

## Backend

To set up the development environment locally, follow these steps:

1. Clone the Backend repository:

   ```bash
   git clone https://github.com/yourusername/review-app-api.git
   cd review-app-api
   ```

2. Set the docker container

   ```bash
   docker compose up -d
   ```

3. Install all the dependencies:

   ```bash
   yarn
   ```

4. Set up your `.env` file:

- Copy `.env.example` to `.env`.
- Use DATABASE_URL is postgresql://postgres:password@localhost:5432/review
- Use JWT_SECRET to generate tokens.For example:Superman123

5. Set up schemas(Run Migrations):

   ```bash
   yarn migrate:latest
   ```

6. Start the development server:

   ```bash
   yarn local
   ```

   The project will be accessible at [http://localhost:8000](http://localhost:8000).

## Submitting a Pull Request (PR)

When you're ready to submit your changes, create a pull request (PR) following our guidelines. Be sure to provide a clear description of your changes in the PR, and one of our maintainers will review it.

## Code of Conduct

Please note that we have a [Code of Conduct](CODE_OF_CONDUCT.md) that we expect all contributors to follow. Ensure you read and adhere to it throughout your contribution journey.

We appreciate your contributions and look forward to collaborating with you!
