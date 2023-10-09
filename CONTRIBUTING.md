# Contributing to Review App Api

Thank you for your interest in contributing to Review App! We welcome contributions from the community to help improve and enhance the project. Please take a moment to read through the following guidelines to get started.

## Table of Contents

- [Contributing to Review App Api](#contributing-to-review-app-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
  - [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)
  - [Code of Conduct](#code-of-conduct)

## Getting Started

Before you start contributing, make sure you have:

- A GitHub account.
- Git installed on your local machine.
- Node.js and npm (Node Package Manager) installed on your local machine.
- Docker Desktop installed on your local machine.
- Yarn installed on your local machine.

## Contributing Guidelines

We follow these guidelines for contributing:

1. Fork the repository to your GitHub account.
2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/review-app-api.git
   ```

3. Create a new branch for your contribution:

   ```bash
   git checkout -b feature-name
   ```

4. Make your changes and ensure your code follows our coding standards and practices.

5. Test your changes locally to ensure they work as expected.

6. Commit your changes with clear and concise commit messages:

   ```bash
   git commit -m "Add feature: your feature description"
   ```

7. Push your changes to your GitHub fork:

   ```bash
   git push origin feature-name
   ```

8. Create a pull request (PR) to the main repository's `main` branch.


## Setting Up the Development Environment

To set up the development environment locally, follow these steps:

1. Clone the repository:

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

- Duplicate `.env.example` to `.env`.
- Use DATABASE_URL is postgresql://postgres:password@localhost:5432/review
- Use JWT_SECRET is anything you want ex:Superman123

5. Set up schemas:

   ```bash
   yarn prisma:migrate:local
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


## Help for Docker setup && Yarn setup

### Yarn setup:

You can install Yarn globally through NPM packages(Remeber NPM comes packaged with Node.js)

```bash
   npm install --global yarn
   ```

Check the Yarn Version  

```bash
   yarn --version
   ```

### Docker setup:

1.You can install Docker (Required) by visiting the  below page:

https://www.docker.com/get-started/

2.You can install Docker Desktop by visiting the  below page: 

https://docs.docker.com/desktop/




