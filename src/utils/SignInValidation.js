const SignInValidation = (users, email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (email == "" || !isEmailValid) {
    return "Invalid Email";
  }
  if (password == "" || !isPassValid) {
    return "Invalid Password";
  }
  const user = users?.find(
    (user) => user.email === email && user.password === password
  );

  if (user == undefined) {
    return "Incorrect Email or Password";
  } else {
    localStorage.setItem('userDetails', JSON.stringify(user));
    return 'acceptLogin';
  }
};

export default SignInValidation;
