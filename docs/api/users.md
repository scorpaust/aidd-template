# API Users Documentation

This document provides comprehensive documentation for the functions defined in `api/users.js`. This module provides functionalities for user management, including creating, retrieving, and updating user records.

## Functions

### 1. `createUser`

Creates a new user in the system.

#### **Description**
This function creates a user by accepting user data and options. It validates the input for the required email field and initializes user properties before saving to the database. If specified, it also sends a welcome email to the user.

#### **Parameters**

- `userData` (Object): An object containing user details.
  - `email` (String): **Required**. The user's email address.
  - `name` (String): **Optional**. The user's name. Defaults to "Anonymous" if not provided.

- `options` (Object): An optional object for additional settings.
  - `autoActivate` (Boolean): **Optional**. Indicates if the user should be activated upon creation. Defaults to `false`.
  - `preferences` (Object): **Optional**. User-specific preferences. Defaults to an empty object if not provided.
  - `sendWelcomeEmail` (Boolean): **Optional**. If `true`, a welcome email will be sent to the user. Defaults to `false`.

#### **Returns**
- (Object): The created user object, containing the user ID, email, name, creation date, active status, and preferences.

#### **Throws**
- (Error): If `userData` or `userData.email` is not provided.

#### **Usage Example**
```javascript
const { createUser } = require('./api/users');

const userData = {
  email: "User@example.com",
  name: "John Doe"
};

const options = {
  autoActivate: true,
  sendWelcomeEmail: true,
  preferences: { newsletters: true }
};

try {
  const newUser = createUser(userData, options);
  console.log(newUser);
} catch (error) {
  console.error(error.message);
}
```

---

### 2. `getUserById`

Retrieves a user from the database based on their ID.

#### **Description**
This function fetches a user by their unique ID. It throws an error if the ID is not provided or if no user is found with the given ID.

#### **Parameters**

- `id` (String): **Required**. The ID of the user to retrieve.

#### **Returns**
- (Object): The user object containing user details.

#### **Throws**
- (Error): If `id` is not provided or if the user is not found.

#### **Usage Example**
```javascript
const { getUserById } = require('./api/users');

try {
  const user = getUserById('12345');
  console.log(user);
} catch (error) {
  console.error(error.message);
}
```

---

### 3. `updateUser`

Updates an existing user's information.

#### **Description**
This function updates the details of a user identified by their ID. The new details are merged with the existing user data. 

#### **Parameters**

- `id` (String): **Required**. The ID of the user to update.
- `updates` (Object): An object containing the updates to be applied to the user. All fields in the existing user object can be updated.

#### **Returns**
- (Object): The updated user object with updated information.

#### **Throws**
- (Error): If the user with the specified ID does not exist.

#### **Usage Example**
```javascript
const { updateUser } = require('./api/users');

const updates = {
  name: "Jane Doe"
};

try {
  const updatedUser = updateUser('12345', updates);
  console.log(updatedUser);
} catch (error) {
  console.error(error.message);
}
```

---

## Mock Services

### Database Service
This mock service simulates the behavior of a database for saving and retrieving user data.

- `save(table, data)`: Logs the data being saved to the specified table.
- `findById(table, id)`: Returns a mock user object based on the provided ID.

### Email Service
This mock service simulates sending welcome emails to users.

- `sendWelcome(email, name)`: Logs a message indicating that a welcome email is sent to the specified email address.

---

## Conclusion
This module provides a straightforward interface for user management with validation and error handling. The documented functions can be used independently or together to effectively manage users in the application. Use the provided examples to quickly integrate these functions into your codebase.