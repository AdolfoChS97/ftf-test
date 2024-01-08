# Full Time Force - Test 

## Description
This repository has been created with the purpose to show how to use the Github API to obtains commits lefts in this project and show them in a web page. The commits are shown in a section with the following information:
- Author
- Commit message
- Date

## How to use
To use this project you need to have installed the following tools:
- Docker

You can define the environment variables in the file .env that you can find in the root of the server folder. If you don't know which value you need to set in the environment variables, you can check the file .env.example. You also can follow this tutorial to get a Github token: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

``` bash
GITHUB_USER: < Github token to get the commits >
APP_PORT: 3000
``` 


Once you have defined the environment variables, you can run the project with the following command:
```bash
docker-compose build
```

This will allow you create a docker image with the project. Once you have the image, you can run the project with the following command:
```bash
docker-compose up
```

Once you have the project running, you can access to the web page in the following url: http://localhost:4200



