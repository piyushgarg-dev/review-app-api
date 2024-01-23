# Review App - Backend Repo

This repository contains the backend code for the Review App project.

![Screenshot-86.png](https://i.postimg.cc/pXzH9rcC/Screenshot-86.png)

**Please Note**: This project is divided into two repositories:

1. [Review App Frontend](https://github.com/piyushgarg-dev/review-app)
2. Review App Backend (You are here)

For more information about the project, visit the [frontend repository](https://github.com/piyushgarg-dev/review-app).

## Environment Setup:

### Prerequisites:
   a. Clone the Repo : `git clone https://github.com/piyushgarg-dev/review-app-api.git`
   b. Move to backend foler : `cd review-app-api`
   c. Install and Setup Docker
   d. Run Docker in background  

   e. Run this command to run "docker-compose.yml" file in detach mode for the older version docker: 'docker-compose up -d'
       Otherwise, run: 'docker up -d'
   
   f. Setup Backend by running command : `yarn`
   
### Create a `.env.local` file in the project's root directory.

The `.env.local` file should contain the following environment variables:

```shell
DATABASE_URL=postgresql://postgres:password@localhost:5432/review
JWT_SECRET=superman123
```

### Run Migrations:

Run database migrations with the following command:

```shell
yarn migrate:latest
```

### Start the Backend Server:

To start the backend server, run the following command:

```shell
yarn local
```

Congratulations! Your backend is now running at http://localhost:8000/development/graphql.

## Communication Channels:

If you have any questions, need clarifications, or want to discuss ideas, feel free to reach out through the following channels:

- [Discord Server](https://discord.com/invite/YuUjtrufmT)
- [Twitter](https://twitter.com/piyushgarg_dev) (formerly X)

We appreciate your contributions and look forward to working with you to make this project even better!

## Best Contributors:

<div align="center">
    <a  href="https://github.com/piyushgarg-dev/review-app-api/graphs/contributors">
        <img src="https://contrib.rocks/image?repo=piyushgarg-dev/review-app-api&anon=1" />
    </a>
</div>

## Thanks To All Our Contributors:

<a href="https://github.com/piyushgarg-dev/review-app-api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=piyushgarg-dev/review-app-api" />
</a>
