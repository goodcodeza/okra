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

## Routes

1. [POST] `/users` - create a user.
1. [GET] `/users` - get a list of all users. **Requires Authentication**
1. [POST] `/login` - authenticate a user with an email and password.
1. [POST] `/customers` - create a customer associated to the authenticated user. **Requires Authentication**
1. [GET] `/customers` - get a list of all customers associated to the authenticated user. **Requires Authentication**
1. [GET] `/customers/:id` - get a single customer associated to the authenticated user. **Requires Authentication**
1. [POST] `/identity/process` - create an identity record for a customer associated to a BVN. **Requires Authentication**

## Authentication

Authentication is configured to use a JWT token.

1. Make a request to the `/login` endpoint with the email and password. If successful, the endpoint will return a token.
1. All requests that require authentication should have a the following header `Authorization: Bearer {token}`, where `{token}` is returned from the previous step.

## Happy Path

You can execute the following steps to process an identity.

1. Create a user with a unique email and password.
1. Login as the user, created in the previous step, to get authentication the token. [See Authentication](#authentication).
1. Create a customer, associated to the authenticated user, with a unique bvn. (TEST BVN - 76357363637)
1. Process the identity record for the customer using the bvn from the previous step.
