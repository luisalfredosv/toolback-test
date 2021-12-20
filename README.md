# ToolBack

Here are the instructions to use the project.
## Installation

It is necessary to have installed Git and Node.js, preferably version 12.13.1.

Open a terminal, go to the preferred directory, and execute the following command.

```bash
git clone https://github.com/luisalfredosv/toolback-test.git
```

We wait for the project to download, after that we navigate to the `toolback-test` folder and execute

```bash
npm i
```

## Execution

To install the project dependencies, once the download is finished you can run the project with the following command

```bash
npm start
```
 this runs in production mode or if you want to run it in development mode
```bash
npm run dev
```
Wait a few seconds and you will see the message in the terminal that the host where it is running and the default port: 3001


## Test

This project includes unit and integration tests, to run them use the following command while in the project directory
```bash
npm test
```
Then you will see in the terminal the result of having executed the tests, which should show that they all passed.

#### Example:
```bash
Test Suites: 2 passed, 2 total
Tests: 5 passed, 5 total
```