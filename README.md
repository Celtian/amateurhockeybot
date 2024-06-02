<p align="center">
  <a href="https://github.com/Celtian/amateurhockeybot" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">AmateurHockeyBot</h1>
</p>

[![npm version](https://badge.fury.io/js/amateurhockeybot.svg)](https://badge.fury.io/js/amateurhockeybot)
[![Package License](https://img.shields.io/npm/l/amateurhockeybot.svg)](https://www.npmjs.com/amateurhockeybot)
[![NPM Downloads](https://img.shields.io/npm/dm/amateurhockeybot.svg)](https://www.npmjs.com/amateurhockeybot)
[![Build & Publish](https://github.com/celtian/amateurhockeybot/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/amateurhockeybot/actions)
[![codecov](https://codecov.io/gh/Celtian/amateurhockeybot/branch/master/graph/badge.svg?token=1IRUKIKM0D)](https://codecov.io/gh/celtian/amateurhockeybot/)
[![stars](https://badgen.net/github/stars/celtian/amateurhockeybot)](https://github.com/celtian/amateurhockeybot/)
[![forks](https://badgen.net/github/forks/celtian/amateurhockeybot)](https://github.com/celtian/amateurhockeybot/)
[![HitCount](http://hits.dwyl.com/celtian/amateurhockeybot.svg)](http://hits.dwyl.com/celtian/amateurhockeybot)

> Library for scraping hockey data from the internet

## 🛠️ Install

_Nodejs 12 or higher need to be installed first_

```terminal
npm install amateurhockeybot
```

or

```terminal
yarn add amateurhockeybot
```

## 🚀 Quick start

_Type this into your ts file._

```terminal
import { chhl, lnskutec } from 'amateurhockeybot';

console.log(lnskutec.matchListUrl('2925')); // show url

lnskutec.matchList('2925')
  .then(res => console.log(res));

console.log(lnskutec.matchUrl('62')); // show url

lnskutec.match('62')
  .then(res => console.log(res));

console.log(chhl.matchListUrl('1')); // show url

chhl.matchList('1')
  .then(res => console.log(res));

console.log(chhl.matchUrl('1')); // show url

chhl.match('1')
  .then(res => console.log(res));
```

## 🛠️ Sources

| Source       | Speed  | Stability |
| ------------ | ------ | --------- |
| **lnskutec** | 🏒🏒🏒 | 🏒🏒🏒    |
| **chhl**     | 🏒🏒🏒 | 🏒🏒🏒    |

## 🪪 License

Copyright &copy; 2022 - 2024 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
