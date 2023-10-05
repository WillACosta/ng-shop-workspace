### @ng-shop-workspace

This project servers as a demonstration of using micro-frontend applications powered by NX and Module Federation Plugin, this is a simple plant shop, that have features such
authentication, cart shop and state management using NGXS library for that. Read more about technical resources below.

<center>
  <img src="docs/images/screenshot.png" alt="screenshot" style="margin-top: 35px"/>
</center>

### Table of contents

- [Project Architecture](#project-architecture)
- [Technical Resources](#technical-resources)
- [Getting Started](#getting-started)

### Project Architecture

This project use the [Facade Design Pattern](https://refactoring.guru/design-patterns/facade), with object to simplify state management and abstract the NGXS Store APIs, with that concept
the View layer don't have to know specifics of how the state works and how It's stored. In the image below, you can see how it works.

<img src="docs/images/arch.png" />

### Technical Resources

- [Authentication API](https://reqres.in/) integration
- Mono-repo managed by [NX Workspaces](https://nx.dev/)
- Micro-frontend approach with [Module Federation](https://webpack.js.org/concepts/module-federation/)
- State Management with [NGXS library](https://www.ngxs.io/)
- [Tailwind CSS](https://tailwindcss.com/) for create beautifully, responsive and accessible UI
- [Angular](https://angular.io/) frontend application

### Getting Started

1. Clone this repository

```shell
git clone https://github.com/WillACosta/ng-shop-workspace
```

3. Run the following command

```shell
yarn install && yarn bootstrap
```

By executing this command, all the required dependencies will be installed, and then the application will execute on localhost:4200
**you can find more detail in the `package.json` file**

#

_Feel free to help me improve and implement new features for this application, and so on. Thank you for being here._
