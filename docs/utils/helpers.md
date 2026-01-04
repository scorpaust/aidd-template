# Documentation for `utils/helpers.js`

This module provides utility functions that can be used across your application. It includes functions for formatting currency, creating a debounce function, and validating email addresses.

## Functions

### 1. `formatCurrency(amount, currency = "USD", locale = "en-US")`

#### Description
Formats a numerical amount into a currency string based on the specified locale and currency type.

#### Parameters
- **`amount`**: `number`
  - The numerical value to be formatted as currency.
  - **Required**
  - **Example**: `1234.56`

- **`currency`**: `string`
  - The 3-letter ISO currency code that defines the currency format (default is `"USD"`).
  - **Optional**
  - **Example**: `"EUR"`, `"JPY"`

- **`locale`**: `string`
  - A string that contains a BCP 47 language tag, which defines the locale (default is `"en-US"`).
  - **Optional**
  - **Example**: `"fr-FR"`, `"de-DE"`

#### Returns
- **`string`**: The formatted currency string.
  
#### Usage Example
```javascript
const { formatCurrency } = require('./utils/helpers');

console.log(formatCurrency(1234.56)); // "$1,234.56"
console.log(formatCurrency(1234.56, 'EUR', 'fr-FR')); // "1 234,56 €"
```

---

### 2. `debounce(func, delay)`

#### Description
Creates a debounced version of the provided function, which delays invoking the function until after a specified delay has elapsed since the last time it was invoked.

#### Parameters
- **`func`**: `function`
  - The function to debounce.
  - **Required**
  
- **`delay`**: `number`
  - The number of milliseconds to delay.
  - **Required**
  - **Example**: `300`

#### Returns
- **`function`**: A new function that can be called. It will invoke the original function after the specified delay.

#### Usage Example
```javascript
const { debounce } = require('./utils/helpers');

const log = () => console.log('Function executed!');
const debouncedLog = debounce(log, 500);

debouncedLog(); // Will execute log after 500ms, if not called again within that time.
```

---

### 3. `isValidEmail(email)`

#### Description
Validates if the provided string is a syntactically correct email address based on a regular expression.

#### Parameters
- **`email`**: `string`
  - The email address to validate.
  - **Required**
  - **Example**: `"example@mail.com"`

#### Returns
- **`boolean`**: Returns `true` if the email is valid, otherwise returns `false`.

#### Usage Example
```javascript
const { isValidEmail } = require('./utils/helpers');

console.log(isValidEmail('example@mail.com')); // true
console.log(isValidEmail('invalid-email')); // false
```

---

## Exported Functions

The module exports the following functions:

```javascript
module.exports = { formatCurrency, debounce, isValidEmail };
```

---

This documentation provides a clear reference for developers looking to leverage the utility functions available in the `utils/helpers.js` module. Each function is designed to simplify common operations, enhance code readability, and improve maintainability.