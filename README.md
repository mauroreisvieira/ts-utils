# TS Utils

TS Utils is a collection of TypeScript utility functions.

[![GitHub Tag](https://img.shields.io/github/release/didiermargarido/ts-utils.svg?style=for-the-badge)](https://github.com/didiermargarido/ts-utils/releases)
[![GitHub issues](https://img.shields.io/github/issues/didiermargarido/ts-utils.svg?style=for-the-badge)](https://github.com/didiermargarido/ts-utils/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/didiermargarido/ts-utils/blob/master/LICENSE)

## Installation
```bash
npm install @didiermargarido/ts-utils
```

## Usage
List of available utilities below:

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

**Didier Margarido**

[github/didiermargarido](https://github.com/didiermargarido)