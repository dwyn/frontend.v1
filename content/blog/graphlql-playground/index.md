---
title: GraphQL Playground
date: "2020-03-04T00:00:00.000Z"
description: Because why not? 
---


1. touch .env.development 

2 in .env.development, add GATSBY_GRAPHQL_IDE=playground

3. run $ npm install --save-dev env-cmd

4. in package.json change 
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,json,md}\"",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing \""
  }

  to 

  "scripts": {
    "build": "gatsby build",
    "develop": "env-cmd .env.developmentgatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,json,md}\"",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing \""
  }