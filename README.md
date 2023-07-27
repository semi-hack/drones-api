## Description

Techinnover Backend Assessment, Drones Api
## Requirements

- Node JS v18+
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
$ yarn install
```

## Running the app

Before you run the application, ensure to start the dependencies already setup in the docker-compose.yml file by running the following command:

```bash
$ docker-compose up -d
```

The `-d` flag runs starts the containers in detached mode. On a Linux and Unix-like machine, `sudo` may be required.

## Migrations and Seeds

This project uses Typeorm. Before you run the application run pending migrations and seeders

- #### Migrations:

  <br>

  run pending migrations, run the following command:

  ```bash
  $ yarn run migrations
  ```

- #### Seeds:

  run pending seeders with the following command:

  ```bash
  $ yarn run seeders
  ```

For more information on migrations and seeds, see the `Typeorm` and `typeorm-seeding` docs, respectively.

### RUN

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

```

## ROUTES
| Request |             Routes                          |        Description         |
|:--------|:--------------------------------------------|----------------------------|
| POST    | http://localhost:3500/v1/drones             | Add Drone                  |
| GET     | http://localhost:3500/v1/drones/available   | Fetch Available Drones     |
| GET     | http://localhost:3500/v1/drones/health/:id  | Fetch Drone Battery Health |
| PUT     | http://localhost:3500/v1/drones/load/:id    | Load Drone                 |
| PUT     | http://localhost:3500/v1/drones/loading/:id | Set Drone State to Loading |
| GET     | http://localhost:3500/v1/drones/:id         | Fetch Loaded Medication    |
| GET     | http://localhost:3500/v1/medications        | Fetch Medications          |
| POST    | http://localhost:3500/v1/medications        | Add Medications            |

** Note
```
   When loading the drone, fetch the medication id's using fetch medication endpoint

  sample body for adding drone 
  {
    "serialNumber":"xxxxxxx",
    "model":"LightWeight",
    "weight":500,
    "battery":100
  }

  sample body for loading drone
  {
    "medications": ["c1bed2b9-fac8-463f-950c-61315d9f3e3f", "d86c7ff8-380c-45ef-a4c7-6c54e7766c88"]
  } 
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

## AUTHORS
### SEMILOORE AKINLO
