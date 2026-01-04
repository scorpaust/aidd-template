# User Management API Documentation

## Overview

This API helps manage users within an application. It allows you to fetch user data via GET requests and create new users through POST requests. The mock data used here is for demonstration purposes only.

## Functions

### `defineEventHandler`

This is the main handler that routes incoming HTTP requests based on their method.

- **Functionality**: Determines the request method and routes to the appropriate function for handling GET or POST requests. Throws an error for unsupported methods.
- **Parameters**: 
  - `event` (object): Contains HTTP request details.
- **Returns**: Calls either `getUsers` or `createUser`, or returns an error for unsupported methods.

### `getUsers`

Fetches a list of users, with optional pagination and search capabilities.

- **Functionality**: Retrieves user data from a mock database. Supports basic searching based on name or email. Provides pagination.
- **Parameters**: 
  - `event` (object): HTTP request details containing query parameters.
  - **Query Parameters**:
    - `page` (number, optional): Determines the page of results. Default is 1.
    - `limit` (number, optional): Limits the number of users per page. Default is 10.
    - `search` (string, optional): Filters users by name or email.
- **Returns**: An object with:
  - `users`: Array of user objects.
  - `pagination`: Object containing `page` and `limit`.
  - `total`: Total number of users after filtering.

### `createUser`

Creates a new user from the request body data.

- **Functionality**: Adds a new user to the mock database using the provided name and email.
- **Parameters**: 
  - `event` (object): Contains request body data.
  - **Body Parameters**:
    - `name` (string, required): Name of the user.
    - `email` (string, required): Email of the user.
- **Returns**: An object with:
  - `user`: The newly created user object.
  - `message`: A success message.

### Error Handling

- **405 Method Not Allowed**: Triggered if the request method is not GET or POST.
- **400 Bad Request**: Returned if the `createUser` function receives incomplete data (missing name or email).

Feel free to reach out if you have any questions or need further clarification!