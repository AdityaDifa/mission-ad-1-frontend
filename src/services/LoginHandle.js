const alertUser = () => {
  return alert("Account not found");
};

const LoginHandle = (e, email, password) => {
  e.preventDefault();
  const accounts = localStorage.getItem("account");
  if (accounts == null) {
    return alertUser();
  }
  for (const acc of accounts) {
    if (acc.username === email && acc.password === password) {
      localStorage.setItem("isLoggedIn", true);
      return navigate("/");
    }
  }
  alertUser;
};
export default LoginHandle;
