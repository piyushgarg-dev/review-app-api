
# Review App - Backend Repository

Welcome to the backend repository of the Review App project.

[![Review App Screenshot](https://i.postimg.cc/pXzH9rcC/Screenshot-86.png)](https://postimg.cc/9rmSKmhw)

## Project Structure

This project is divided into two repositories:

1. [Review App Frontend](https://github.com/piyushgarg-dev/review-app)
2. Review App Backend (You are here)

To learn more about the overall project, please visit the [frontend repository](https://github.com/piyushgarg-dev/review-app).

## Environment Setup

### Prerequisites

1. Clone the repository:
    ```shell
    git clone https://github.com/piyushgarg-dev/review-app-api.git
    cd review-app-api
    ```

2. Install and set up Docker.

3. Run Docker in the background.

4. Run the following command to start the application using Docker Compose:
    ```shell
    docker compose up -d
    ```

5. Set up the backend dependencies by running:
    ```shell
    yarn
    ```

### Configuration

1. Create a `.env.local` file in the project's root directory.

2. The `.env.local` file should consist of:

    ```shell
    DATABASE_URL=postgresql://postgres:password@localhost:5432/review
    JWT_SECRET=superman123
    ```

3. Run database migrations:
    ```shell
    yarn migrate:latest
    ```

4. Start the backend server:
    ```shell
    yarn local
    ```

Congratulations! Your backend is now running at http://localhost:8000/local/graphql.

## Communication Channels

If you have any questions, need clarifications, or want to discuss ideas, feel free to reach out through the following channels:

- [Discord Server](https://discord.com/invite/YuUjtrufmT)
- [Twitter](https://twitter.com/piyushgarg_dev)

We appreciate your contributions and look forward to working with you to make this project even better!

## Best Contributors

<div align="center">
    <a href="https://github.com/piyushgarg-dev/review-app-api/graphs/contributors">
        <img src="https://contrib.rocks/image?repo=piyushgarg-dev/review-app-api&anon=1" />
    </a>
</div>

Please communicate in English.
