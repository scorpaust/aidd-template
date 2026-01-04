# API Users Documentation

This document provides comprehensive documentation for the functions defined in `api/users.js`. This module provides functionalities for user management, including creating, retrieving, and updating user records.

## Functions

### 1. `createUser`

Creates a new user in the system.

#### **Description**
The `createUser` function is responsible for creating a user by accepting user data, validating mandatory fields, and initializing user properties. If validation passes and the email does not already exist, it saves the user to the database.

#### **Parameters**
- **`userData`** (object): An object containing user details.
  - **`name`** (string): Full name of the user. *Required.*
  - **`email`** (string): Email address of the user. *Required.*
  - **`role`** (string): Role of the user. Defaults to `"user"` if not provided.

#### **Returns**
- A promise that resolves with the created user object from the database.

#### **Usage Example**
```javascript
const user = await createUser({
  name: "John Doe",
  email: "johndoe@example.com",
  role: "admin"
});
console.log(user);
```

### 2. `getUserById`

Retrieves a user by their unique identifier.

#### **Description**
The `getUserById` function fetches a user from the database using their ID. It validates the presence of the ID, retrieves the user, and throws an error if the user cannot be found.

#### **Parameters**
- **`id`** (string): The unique identifier of the user. *Required.*

#### **Returns**
- A promise that resolves with an object containing the user's details:
  - **`id`** (string): Unique user identifier.
  - **`name`** (string): The user's full name.
  - **`email`** (string): The user's email address.
  - **`role`** (string): The user's role.
  - **`createdAt`** (Date): Timestamp of when the user was created.

#### **Usage Example**
```javascript
try {
  const user = await getUserById("12345");
  console.log(user);
} catch (error) {
  console.error(error.message);
}
```