# Contributing to Review App API

Thank you for your interest in contributing to the Review App API!
We appreciate your support and welcome your contributions to help
enhance and improve the project. Please read through the following
guidelines to get started.

## Table of Contents

- [Contributing to Review App API](#contributing-to-review-app-api)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
  - [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)
  - [.env Configuration](#env-configuration)
  - [Frontend Reference Link](#frontend-reference-link)
  - [Code of Conduct](#code-of-conduct)
  - [We Appreciate Your Contributions!](#we-appreciate-your-contributions)

## Prerequisites

Before diving into contributions for the Review App backend, make sure your local machine is equipped with the following prerequisites:

- **Docker:** Required for setting up and managing the development environment.
- **Git:** Essential for cloning and managing the project repository.
- **Node.js and npm:** Needed for installing project dependencies.
- **Yarn:** Recommended for efficient management of Node.js packages.

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

5. Make your changes and ensure your code follows our coding
   standards and practices.

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
   git clone https://github.com/yourusername/review-app-api.git
   cd review-app-api
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
   You can replace `superman123` with any secret key of your choice.

   ```

6. Run database migrations to set up the database:
   ```bash
   yarn migrate:latest
   ```
7. Start the local development server:
   ```bash
   yarn local
   ```
8. The backend will be up and running on port 8000.

## Submitting a Pull Request (PR)

When you're ready to submit your changes, create a pull request
(PR) to the `main` repository's main branch following our guidelines.
Be sure to provide a clear description of your changes in the PR, and
one of our maintainers will review it.

## .env Configuration

To set up environment variables for the Review App API, follow these steps:

1. **Copy `.env.example`:** Duplicate the `.env.example` file and name the copy `.env.local`.

2. **Edit `.env.local`:** Open the newly created `.env.local` file and configure the necessary environment variables. In this case, you'll need to set values for `DATABASE_URL` and `JWT_SECRET`.

   ```env
   DATABASE_URL=postgresql://postgres:password@localhost:5432/review
   JWT_SECRET=your-secret-key-here
   ```

3. **Replace Placeholder(s)**: Make sure to replace the placeholder values for `DATABASE_URL` with your Database URL and `JWT_SECRET` with a secret key of your choice.

## Frontend Reference Link

You can find the reference link to the frontend of the Review App [here](https://github.com/piyushgarg-dev/review-app).

## Code of Conduct

We have established a [Code of Conduct](CODE_OF_CONDUCT.md) that all contributors are expected to follow. Please take a moment to read and adhere to it throughout your contribution journey. This code of conduct ensures a respectful and inclusive environment for everyone involved in the project.

## We Appreciate Your Contributions!

Thank you for considering contributing to the Review App API project. Your contributions are invaluable to us, and they play a crucial role in making this project better with each update.
