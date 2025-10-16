const RegisterHandle = (
  e,
  name,
  email,
  flag,
  phoneNumber,
  password,
  confirmPassword,
  navigate
) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    return alert("password not same");
  }
  const phone = flag + phoneNumber;

  const inputData = {
    name: name,
    email: email,
    phone: phone,
    password: password,
  };
  let data = JSON.parse(localStorage.getItem("accounts")) || [];
  data = [...data, inputData];
  localStorage.setItem("accounts", JSON.stringify(data));

  alert("success register account");
  navigate("/login");
};

export default RegisterHandle;
