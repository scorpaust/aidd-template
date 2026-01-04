function processUserData(userData) {
  const email = userData.email.toLowerCase();

  const users = getAllUsers();
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }

  const query = `SELECT * FROM users WHERE email = '${email}'`;
  try {
    return database.query(query);
  } catch (error) {
    console.error('Database query failed:', error);
    throw new Error('Unable to process user data');
  }
}