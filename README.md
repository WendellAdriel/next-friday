# Next Friday

> Simple app built just for fun

The idea came from a joke in my workplace and I created a version with Vanilla JS. I decided to create this React version just for fun.

This project is built with:

* **[React](https://reactjs.org)**
* **[Parcel Bundler](https://parceljs.org)**
* **[ESLint](https://eslint.org)**
* **[Husky](https://github.com/typicode/husky)**
* And others

## How to use

* Clone this **repo** and enter it

```
git clone git@github.com:WendellAdriel/next-friday && cd next-friday
```

* If you don't have **[Yarn](https://yarnpkg.com)** installed yet, install it

```
npm i -g yarn
```

* Install the **dependencies**

```
yarn
```

## Commands available

* To start the application in development mode use

```
yarn start
```

* To run **ESLint** use

```
yarn lint
```

* To build the application for production use

```
yarn build
```

## Git Hooks

This project uses **Husky** to create and manage Git hooks, it already comes with two hooks configured:

* Before you commit and before you push your changes it will run: **ESLint**

* If you want to, you can configure other hooks, edit or even delete the existing ones.
