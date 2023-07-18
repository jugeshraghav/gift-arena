export const loginService = async (email, password) =>
  await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

export const signUpService = async (signUpDetails) =>
  await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(signUpDetails),
  });
