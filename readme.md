## Tech stack

* [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
* [MobX](https://mobx.js.org/) - Simple, scalable state management
* [Webpack](https://webpack.js.org/) - module bundler
* [Flow](https://flow.org/) - static type checker for javascript
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX

## Getting Started

To start project please use next command:  
```
npm install
npm start
``` 

## Build project

To build project please use next command:  
```
npm build
``` 

*Note:* Webpack dev server will be run on port 3000

##  Run Flow

The first time, run: 
```
npm run flow init
```  
After running flow with init the first time, run: 
```
npm run flow
```

##  Run linter
To run "eslint" please use next command:  
```
npm run lint
```

## Git workflow

**master** - This branch will be deployed into client environment

### Branch Naming Convention

**Features** - `feature` branches should be named as `feature/future-id` (eg. `feature/ID-123`)  
**Bugs** - `issue` branches should be named as `issue/issue-id` (eg. `issue/ID-123`)

### Commit Message Convention

* Commit messages should include task **"id"** and **task description**: `ID-123 Task description`
* If commit doesn't corresponds to any task, include next description: `#0000 description about applied changes`

## [TODO] API
