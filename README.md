# TS Utils
[![npm](https://img.shields.io/npm/dt/@didiermargarido/ts-utils.svg?style=for-the-badge)](https://www.npmjs.com/package/hello-week)
[![GitHub Tag](https://img.shields.io/github/release/didiermargarido/tsutils.svg?style=for-the-badge)](https://github.com/didiermargarido/ts-utils/releases)
[![GitHub issues](https://img.shields.io/github/issues/didiermargarido/ts-utils.svg?style=for-the-badge)](https://github.com/didiermargarido/ts-utils/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/didiermargarido/ts-utils/blob/master/LICENSE)

TS Utils is a versatile collection of TypeScript utility functions designed to simplify your development tasks.\
It provides a range of helpful functions for various common scenarios.

## Installation
To incorporate TS Utils into your TypeScript projects, you can use either `npm` or `yarn`` package manager.\
Choose the one you're most comfortable with:

### Using NPM
```bash
npm install @didiermargarido/ts-utils
```

### Using Yarn
```bash
yarn add @didiermargarido/ts-utils
```

## Usage
TS Utils provides a comprehensive set of utility functions that can streamline various aspects of your TypeScript projects.\ 
Here's a detailed guide on how to use some of the key utility functions available in TS Utils:

### isDefined
Method to check if value is defined.

```js
// Util
import { isDefined } from "@didiermargarido/ts-utils";

// Output: true
isDefined("DM");
isDefined(10);
isDefined([]);

// Output: false
isDefined(null);
isDefined(undefined); 
```

### isEmpty
Method to check if value is empty.

```js
// Util
import { isEmpty } from "@didiermargarido/ts-utils";

// Output: true
isEmpty("");
isEmpty([]);
isEmpty({});
isEmpty(null);
isEmpty(undefined);

// Output: false
isEmpty("DM");
isEmpty({ key: "Demo" }); 
```

## Author
**Didier Margarido**\
[github/didiermargarido](https://github.com/didiermargarido)

## License
**TS Utils** is open-sourced software licensed under the [MIT license](LICENSE)