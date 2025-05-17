export const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

export const encodePassword = (password) => {
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
  let newPassword = "";
  for (let i = 0; i < password.length; i++) {
    newPassword += password[password.length - i - 1];
  }
  return newPassword + "encoded";
};

export const decodePassword = (encrypted) => {
  // decode the password
  // for example, "1drowssapencoded" => "password1"
  let password = encrypted.slice(0,-7);
  let newPassword = "";
  for (let i = 0; i < password.length; i++) {
    newPassword += password[password.length - i - 1];
  }
  return newPassword;
};

export const getUserByEmail = async (email) => {
  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }
  for (let user of users) {
    if (email === user.email) {
      return user;
    }
  }
  throw new Error("User not found");
};

export const verifyPassword = async (password, encrypted) => {
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
  if (encrypted && password === decodePassword(encrypted)) {
    return true;
  }
  throw new Error("Invalid password");
};

export const login = async (email, password) => {
  // login the user with email and password
  // should return the user and token if the login is successful
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
  // should return the error message if the login is unsuccessful
  // e.g. "User not found", "Invalid password"
  try {
    const user = await getUserByEmail(email);
    await verifyPassword(password, user.password);
    user.token = "token";
    delete user.password;
    return user;
  } catch (err) {
    return err.message;
  }
};
