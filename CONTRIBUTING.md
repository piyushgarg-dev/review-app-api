# Contributing to Review App Api (Backend)

Thank you for your interest in contributing to Review App Api! We welcome contributions from the community to help improve and enhance the project. Please take a moment to read through the following guidelines to get started.

## Table of Contents

- [Getting Started](#getting-started)
- [Contributing Guidelines](#contributing-guidelines)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)
- [Code of Conduct](#code-of-conduct)

## Getting Started

Before you start contributing to the Backend, make sure you have:

- A GitHub account.
- Git installed on your local machine.
- Node.js and npm (Node Package Manager) installed on your local machine.
- Yarn installed on your local machine.
- Make sure you have docker installed locally.

## Contributing Guidelines

We follow these guidelines for contributing:

1. Fork the frontend repository to your GitHub account.

2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/review-app-api.git
   ```

3. Navigate to the Backend project directory:

   ```bash
   cd review-app-api
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

1. Clone the backend repository:

   ```bash
   git clone https://github.com/yourusername/review-app-api.git
   cd review-app-api
   ```

2. Run docker-compose.yml in detached mode:

   ```bash
   docker compose up -d
   ```

   Now docker should be running on PORT `5432:5432`.

3. Install project dependencies using Yarn:

   ```bash
   yarn
   ```

4. Create a file named `.env.local` in the root directory of the backend project and add the following environment variables:

   ```
    DATABASE_URL=postgresql://postgres:password@localhost:5432/review
    JWT_SECRET=yourSecretKey
   ```

   You can also find similar environment variables in `.env.example`.

5. Run migration locally for creating tables in database (Basically running prisma schema):

   1. Create new migrations

      ```bash
      yarn prisma:migrate:local
      ```

   2. If you have a migration running already

      ```bash
      yarn migrate:latest
      ```

   You can also find these commands in file `package.json` under `scripts`.

6. Start the development server:

   ```bash
   yarn local
   ```

   The project in Apollo Studio will be accessible at [http://localhost:8000](http://localhost:8000).

## Submitting a Pull Request (PR)

When you're ready to submit your changes, create a pull request (PR) following our guidelines. Be sure to provide a clear description of your changes in the PR, and one of our maintainers will review it.

## Code of Conduct

Please note that we have a [Code of Conduct](CODE_OF_CONDUCT.md) that we expect all contributors to follow. Ensure you read and adhere to it throughout your contribution journey.

We appreciate your contributions and look forward to collaborating with you!
