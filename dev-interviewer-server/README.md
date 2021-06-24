# Dev Interviewer Server

## Requirements

- Node >= 12.x

## Steps

First of all we need to install the dependencies with the next command

```
npm install
```

We need to create an **.env** file in the dev-interviewer-server with the next content an fill with our configuration setup options. There is an **.env.sample** in the client that can be used.

```
PORT=8000
NODE_ENV=development
HARPER_INSTANCE_URL=https://cloud-1-buildapps.harperdbcloud.com
HARPER_INSTANCE_USERNAME=admin
HARPER_INSTANCE_PASSWORD=password
HARPER_INSTANCE_SCHEMA=dev
```

Once we have set the environment variables we can create the main database structure.

```
npm run migrate:create
```

As right now there isn't transaction in the case that the npm script fail during the process you will need to run the next command. 

```
npm run migrate:recreate
```

In the case that you want to add some mocked data can execute the next command

```
npm run seeds
```


After that we just need to run the server with the next command

```
npm run start:dev
```