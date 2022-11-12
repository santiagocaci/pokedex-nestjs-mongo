<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Pokedex

## Installation

```bash
$ npm install

$ npm install -g @nestjs/cli

# docker-compose up -d
$ npm run docker:up
```

1. Crear archivo **.env** y agregar las siguientes lineas:

```
MONGODB = mongodb://localhost:27017/nest-pokemon
PORT = 3000
DEFAULT_LIMIT = 5
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Productio Build

1. Crear archivo `env.prod`
2. Llenar las variables de prod
3. Ejecutar el comando

```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## Seed

```bash
# 151 pokemons
http://localhost:3000/api/v2/seed
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
