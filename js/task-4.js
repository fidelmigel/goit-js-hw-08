const loginForm = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email.length === 0 || password.length === 0) {
    alert("All form fields must be filled in");
  } else {
    console.log({ email, password });
    form.reset();
  }
};

loginForm.addEventListener("submit", handleSubmit);
