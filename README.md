# SPELLS_APP

This is the README file for the SPELLS_APP project. Below, you'll find instructions for setting up and running the project, as well as details about the available scripts and how to use Docker for deployment.

## Prerequisites

This app works on Nodejs version 16.

```bash
nvm use 16
```

## Getting Started

To run the project, follow these steps:

1. Copy .env.example file to .env file as :

	```bash
	cp .env.example .env
	```

2. Install project dependencies using Yarn:

   ```bash
   yarn
   ```

3. Start the development server:

   ```bash
   yarn start
   ```

## Available Scripts

Here are the scripts available for managing the project:

```json
"scripts": {
  "start": "craco start",
  "start:cli": "cross-env BROWSER=none craco start",
  "build": "craco build",
  "test": "is-ci \"test:coverage\" \"test:jest\"",
  "test:jest": "craco test",
  "test:coverage": "CI=1 yarn test:jest -- --coverage",
  "postinstall": "husky install",
  "pretest:e2e:run": "yarn build",
  "serve": "serve --no-clipboard --single --listen 3000 build",
  "eject": "react-scripts eject",
  "lint": "eslint --fix --ext .js,.ts,.tsx ./src --ignore-path .gitignore",
  "prettier": "prettier --ignore-path .gitignore --write \"**/*.+(js|json|ts|tsx)\"",
  "format": "npm run prettier -- --write",
  "check-types": "tsc --project tsconfig.json --pretty --noEmit",
  "check-format": "npm run prettier -- --list-different",
  "validate-and-build": "npm-run-all --parallel check-types check-format lint build",
  "validate": "npm-run-all --parallel check-types && lint-staged",
  "generate": "plop",
  "storybook": "start-storybook -p 6006 -s public",
  "build-storybook": "build-storybook -s public"
}
```

You can run these scripts using `yarn <script-name>`. For example, to build the project, you can run:

```bash
yarn build
```

## Docker Deployment

To deploy the project using Docker, follow these steps:

1. Ensure that the Docker daemon is running in the background.

2. Build a Docker image for the project:

   ```bash
   docker build -t spells-app .
   ```

   Replace `spells-app` with your desired image name.

3. Run a Docker container based on the built image:

   ```bash
   docker run -d -p 8080:3000 spells-app
   ```

   This command runs the container in detached mode, mapping port 8080 on your host to port 3000 in the container.

Now, your SPELLS_APP project should be up and running within a Docker container, accessible at `http://localhost:8080`.

