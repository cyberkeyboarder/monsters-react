# `Monsters-React` Deployed to GitHub Pages

Simple exercise to deploy a React project to GitHub's `gh-pages`.

![alt text](https://github.com/cyberkeyboarder/monsters-react/blob/master/screenshot.png?raw=true)

Uses `yarn`

```bash
yarn install
yarn start
```

---

## gh-pages

Connect repo to project & add package to Yarn:

```bash
git remote add origin git@github.com:cyberkeyboarder/monsters-react.git
or
git remote rm origin
git remote add origin https://github.com/cyberkeyboarder/monsters-react.git
yarn add gh-pages

git remote -v
origin  git@github.com:cyberkeyboarder/monsters-react.git (fetch)
origin  git@github.com:cyberkeyboarder/monsters-react.git (push)

or

git remote -v
origin  https://github.com/cyberkeyboarder/monsters-react.git (fetch)
origin  https://github.com/cyberkeyboarder/monsters-react.git (push)
```

### Modify "package.json"

Before "dependencies", add:
> "homepage": "https://cyberkeyboarder.github.io/monsters-react",

Inside of "scripts", add:
> "predeploy": "yarn build"
> "deploy": "gh-pages -d build"

### Deploy

```bash
yarn deploy
git add .
git commit -m "adding files for github pages"
git push origin master
```

Note: If using "zsh" can use "ggpush" in place of "git push origin master"

FROM GitHub
echo "# monsters-react" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:cyberkeyboarder/monsters-react.git
git push -u origin master

…or push an existing repository from the command line
 git remote add origin git@github.com:cyberkeyboarder/monsters-react.git
git push -u origin master

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app):

```bash
npx create-react-app
```

### Resources

> Links:

* [jsonplaceholder](https://jsonplaceholder.typicode.com/users) - Fake Online REST API for Testing and Prototyping.
* [Complete guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Grid by Example](https://gridbyexample.com/what/)
* [robohash](https://robohash.org/1?set=set2) - auto generated, unique images from text.
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### General Information

* `setState()` is an 'asynch' call
* `Synthetic Event` - When React intercepts a DOM
"fake event" not a DOM event.  Camel-case inside HTML is a clue: onChange, className, etc.

* `Functional Components` don't have access to internal state like Class based components.  Take prop's
and render HTML.
* `Class Components` has constructors, life-cycle events

> A good rule of thumb - Use arrow functions on any class methods you define and
aren't part of `render()`, `componentDidMount()`, etc.
