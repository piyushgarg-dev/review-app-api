# Contributing to the development of the Review App API

Thank you for your interest in contributing to the Review App API!
We welcome your contributions to help improve the Review App API.
Please read through the following
guidelines to get started.

## Table of Contents

- [Contributing to Review App API](#contributing-to-review-app-api)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
  - [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)
  - [`.env Configuration`](#env-configuration)
    - [Process](#process)
  - [Code of Conduct](#code-of-conduct)
  - [We appreciate your contributions and look forward to
    collaborating with you to improve the Review App API!]
    (#we-appreciate-your-contributions-and-look-forward-to-collaborating-with-you-to-improve-the-review-app-api)

## Prerequisites

Before you begin contributing to the backend of the Review App,
please ensure you have the following prerequisites installed and
configured on your local machine:

- Docker: To set up and manage the development environment.
- Git: To clone and manage the project repository.
- Node.js and npm: To install project dependencies.
- Yarn: To manage Node.js packages effectively.

![](./contri-images/pre1.png)
![](./contri-images/pre2.png)

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

5. Make your changes and follow our coding standards and practices.

6. Test your changes locally to ensure they work as expected.

7. Commit your changes with clear and concise commit messages:

   ```bash
   git commit -m "Add feature: your feature description"

   ```

8. Create a pull request (PR) to the `main` repository's `main` branch.

## Setting Up the Development Environment

To set up the development environment locally, follow these steps:

1. Clone the backend repository:

   ```bash
   git clone https://github.com/yourusername/review-app-api.git cd review-app-api

   ```

2. Run Docker Compose to set up the development environment:

   ```bash
   docker-compose up -d

   ```

3. Install project dependencies using Yarn:

   ```bash
   yarn

   ```

4. Copy the `.env.example` file to .`env.local` and configure the
5. following environment variables in the `.env.local` file:
   ```env
   DATABASE_URL=postgresql://postgres:password@localhost:5432/review
   JWT_SECRET=superman123
   ```

You can replace superman123 with any secret of your choice.

5. Run database migrations to set up the database:

   ```bash
   yarn migrate:latest

   ```

6. Start the local development server:

   ```bash
   yarn local
   * ##Database migrations
    can potentially destroy your data. Back up your database before running any migrations. *

   ```

7. The backend will be up and running on port 8000.
   ![Screenshot of a specific code snippet:](./contri-images/code_snippet.png)
   ![Preview](./contri-images/app%20preview.png)

## Submitting a Pull Request (PR)

When you're ready to submit your changes, create a pull request
(PR) to the `main` repository's main branch following our guidelines.
Be sure to provide a clear description of your changes in the PR, and
one of our maintainers will review it.

## `.env Configuration`

-Configure the environment variables for the Review App API.

1. You need to copy the `.env.example` file to
   `.env.local`

2. Then configure the necessary environment variables in the `.env.local`
   file.
3. In this case, the required environment variables are `DATABASE_URL` and
   `JWT_SECRET`.
4. The example shows the format for these variables and provides a placeholder
   value for `JWT_SECRET`.
5. You are instructed to replace this placeholder value with a secret of your choice.

### Process

- Copy the `.env.example` file to `.env.local` and configure the following
  environment variables in the `.env.local` file:

  ```env
  DATABASE_URL=postgresql://postgres:password@localhost:5432/review
  JWT_SECRET=superman123

  ```

- You can replace superman123 with any secret of your choice.

## Code of Conduct

We have a Code of Conduct (CODE_OF_CONDUCT.md) that all contributors are expected to follow.
Please read and adhere to it throughout
your contribution journey.

## We are delighted to have you as a contributor to the Review App API.

Your contributions are invaluable, and we appreciate you taking the time to help us make the API even better.
