# TS Utils

TS Utils is a collection of TypeScript utility functions.

## Installation
```bash
npm install @didiermargarido/ts-utils
```

## Usage
The `ts-utils` package provides several utility functions:

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
