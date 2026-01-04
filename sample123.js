function processUserData(userData) {
  // Added null check to fix potential bug
  if (!userData || !userData.email) {
    throw new Error("Invalid user data provided");
  }

  const email = userData.email.toLowerCase();

  const users = getAllUsers();
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }

  // Using parameterized query to prevent SQL injection
  const query = `SELECT * FROM users WHERE email = ?`;
  return database.query(query, [email]);
}
