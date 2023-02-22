## Okra

[Engineering Manager, Core Services (Core API) Notion Page](https://okrahq.notion.site/Engineering-Manager-Core-Services-Core-API-71e60cc933e94727a78e4d5002ebd1bd)

## Installation

```bash
$ npm install
```

## Getting Started

In the directory where you cloned this repository, perform the following tasks:

1. Set up the environment variables for your development environment: `$ cp .env.example .env`.
1. Update the **DATABASE_URL** variable in the `.env` file.
1. Sync the database with the Prisma schema: `$ npx prisma db push`.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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
