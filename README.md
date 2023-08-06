## [Nest](https://github.com/nestjs/nest) framework starter template.


## Table of contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Running the app](#running-the-app)
- [Build](#build)
- [Test](#test)

---

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

What things you need to install the software and how to install them :

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Docker](https://docs.docker.com/get-docker/)

---

### Installation

1. Clone the git repository

   ```bash
   git clone https://github.com/AfshinJalili/nest-template.git
   ```

1. Go into the project directory

   ```bash
   cd nest-template/
   ```

1. Checkout working branch

   ```bash
   git checkout <branch>
   ```

1. Install NPM dependencies

   ```bash
   npm i
   ```

1. Create configuration files


   ```bash
   cp config.example.yaml config.yaml
   cp .env.example .env
   ```

1. Replace the values of the variables with your own

1. Create Docker images and launch them

   ```bash
   docker-compose up -d --build
   ```

---

## Running the app

### development

```bash
npm run start
```

### watch mode

```bash
npm run start:dev
```

### production mode

```bash
npm run start:prod
```

---

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

## Test

### unit tests

```bash
npm run test
```

### e2e tests

```bash
npm run test:e2e
```

### test coverage

```bash
npm run test:cov
```

---


