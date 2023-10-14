# Review App - Backend Repo

This repository contains the backend code for the Review App project.

[![Screenshot-86.png](https://i.postimg.cc/pXzH9rcC/Screenshot-86.png)](https://postimg.cc/9rmSKmhw)

##### This project is divided into two repositories:

1. [Review App Frontend](https://github.com/piyushgarg-dev/review-app)
2. Review App Backend (You are here)

Go to [this repository](https://github.com/piyushgarg-dev/review-app) to know more about the project.

## Environment Setup :

1. Pre-requisites :

   a. Clone the Repo : `git clone https://github.com/piyushgarg-dev/review-app-api.git`
   b. Move to backend foler : `cd review-app-api`
   c. Install and Setup Docker
   d. Run Docker in background  
   e. If you have an older version of Docker, run this command to run "docker-compose.yml" file in detach mode:
      `docker-compose up -d`
      Otherwise, run: `docker compose up -d`
   f. Setup Backend by running command : `yarn`

2. Create a `.env.local` file in the project's root directory

3. The `.env.local` file should consist of :

   `DATABASE_URL=postgresql://postgres:password@localhost:5432/review
JWT_SECRET=superman123`

4. Run Migrations by running command : `yarn migrate:latest`

5. Run Backend server by running command : `yarn local`

CONGRATULATIONS! your backend starts running on http://localhost:8000/local/graphql

## Communication Channels

If you have any questions, need clarifications, or want to discuss ideas, feel free to reach out through the following channels:

- [Discord Server](https://discord.com/invite/YuUjtrufmT)
- [X(formerly Twitter)](https://twitter.com/piyushgarg_dev)

We appreciate your contributions and look forward to working with you to make this project even better!

## Best Contributors

<div>
    <a  href="https://github.com/piyushgarg-dev/review-app-api/graphs/contributors">
        <img src="https://contrib.rocks/image?repo=piyushgarg-dev/review-app-api&anon=1" />
    </a>
</div>

## Thanks To All Our Contributors

<a href="https://github.com/piyushgarg-dev/review-app-api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=piyushgarg-dev/review-app-api" />
</a>
