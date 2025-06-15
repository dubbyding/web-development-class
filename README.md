# Web Developement

## Day-3

1. Open Git Bash
2. Run node —version
3. Run npm —version

Node -> Javascript Runtime env

JS -> Runs only on browser

npm?? -> Node Package Manager

npmjs.com

Open Blank folder

npm init

What is Package?

Create React App using Vite
npm create vite@latest

To check the folder path

~ pwd

Initialize Node js Package
npm init

If installing new package do

npm install <package-name>

Example:
npm install is-even

If package already exists in package.json then do
npm install

Start with React

- Create a folder in desktop

- Open VSCode

- Open the folder in VSCode

- Open Terminal (Git Bash in windows)

- Run npm create vite@latest
  - Give the name of your project
  - Select React
  - Select Javascript

const isEven = require(‘is-even’);

Import isEven from ‘is-even’;

Button kati chati click vayo?
Input ko value k ma change vayo?

React -> State

Hooks -> useState();

Hooks???

Function which does some tasks? Starts with use.

Kaam lai multiple thau ma use garna help garxa

To Run Project

- npm run dev

To Build Project

- npm run build

~ pwd

Initialize Node js Package
npm init

If installing new package do

npm install <package-name>

Example:
npm install is-even

If package already exists in package.json then do
npm install

### React JS

_What is React?_

- React is a JavaScript library used for building user interfaces, especially for single-page applications (SPAs). It allows developers to create reusable UI components and manage the state of the application efficiently.

- Developed and maintained by Facebook.

- Uses a virtual DOM to improve performance.

- Promotes component-based architecture.

_How does React Works?_

React works by using a Virtual DOM and component-based architecture:

- Component-based: UI is broken down into small, reusable components.

- Virtual DOM: React maintains an in-memory representation of the real DOM (called the Virtual DOM).

- Efficient updates: When state or props change, React:

  - Creates a new Virtual DOM.

  - Compares it with the previous one using a diffing algorithm.

  - Updates only the parts of the real DOM that changed (called reconciliation), which makes rendering efficient.

_What are hooks in React?_

Hooks are special functions in React that let you use state and other React features in functional components.

Common hooks include:

- useState – for state management.

- useEffect – for side effects like data fetching.

- useContext, useRef, useMemo, useCallback, etc.

Introduced in React 16.8 to simplify code and reduce reliance on class components.

_What is useState?_

`useState` is a **React Hook** that lets you **add state to functional components**.

#### Syntax

```js
const [state, setState] = useState(initialValue);
```

state: current value of the state.

setState: function to update the state.

initialValue: the initial value of the state.

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Count: {count}</button>
  );
}
```

This component shows a button that increases the count when clicked.

## LifeCycle in React

- componentDidMount
- componentDidUnmount
- componentDidUpdate

### What is useEffect?

_useEffect_
_useMemo_
_useCallback_

### Problems that might occur when using useEffect

### Completion of tiktak toe game

## To DO List

### Layout plan

### Component
