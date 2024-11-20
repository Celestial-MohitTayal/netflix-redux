const SignUpValidation = (users, name, email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (name == "") {
    return "Invalid Name";
  }
  if (email == "" || !isEmailValid) {
    return "Invalid Email";
  }
  if (password == "" || !isPassValid) {
    return "Invalid Password";
  }

  const user = users?.find((user) => user.email === email);

  if (user == undefined) {
    const currUser = {
      name: name,
      email: email,
      password: password,
    };
    users.push(currUser);
    localStorage.setItem("users", JSON.stringify(users));
    return;
  } else {
    return "User Exists!";
  }
};

export default SignUpValidation;
