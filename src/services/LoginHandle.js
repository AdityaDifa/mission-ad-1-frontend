const LoginHandle = (e, email, password, navigate) => {
  e.preventDefault();
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  const found = accounts.find(
    (acc) => acc.email === email && acc.password === password
  );
  if (found) {
    localStorage.setItem("isLogged", true);
    return navigate("/");
  }

  return alert("account not found");
};
export default LoginHandle;
