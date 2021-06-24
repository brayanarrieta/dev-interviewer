# Dev Interviewer Client

## Requirements

- Node >= 12.x

## Steps

First of all we need to install the dependencies with the next command

```
npm install
```

We need to create an **.env** file in the `dev-interviewer-client` directory with the next content an fill with our configuration setup options. There is an **.env.sample** in the client that can be used.

```
REACT_APP_API_BASE_URL=http://localhost:8000/api
REACT_APP_APPLICATION_NAME=Dev Interviewer
```

Please make sure of that because some environment variables are used to setup the application and the API request processes.

After that we just need to run the client with the next command

```
npm start
```