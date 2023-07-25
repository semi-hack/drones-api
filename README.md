## Description

Techinnover Backend Assessment, Drones Api
## Requirements

- Node JS v16+
- Docker

## Environment variables

Create your personal `.env` file using the `.env.example` file as a guide. For contributors, ensure to update the `.env.example` file with an empty version of any environment variable you create and use in the project.

## Dependencies

The program currently relies on the following dependencies

- Postgres

Postgres is provisioned in the `docker-compose.yml` file at the root directory.
The postgres container exposes port `15334` instead of the defualt `5432`. This is to prevent clashes with any postgres instance that may be running on your machine.

## Installation

```bash
$ npm install
```

## Migrations and Seeds

This project uses Typeorm.

- #### Migrations:

  <br>

  To run pending migrations, run the following command:

  ```bash
  $ npm run migrations
  ```

- #### Seeds:

  You can run pending seeders with the following command:

  ```bash
  $ npm run seeders
  ```

For more information on migrations and seeds, see the `Typeorm` and `typeorm-seeding` docs, respectively.

## Running the app

Before you run the application, ensure to start the dependencies already setup in the docker-compose.yml file by running the following command:

```bash
$ docker-compose up -d
```

The `-d` flag runs starts the containers in detached mode. On a Linux and Unix-like machine, `sudo` may be required.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
