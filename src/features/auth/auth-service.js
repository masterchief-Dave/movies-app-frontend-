const createUser = async (user) => {
  const response = await fetch(`http://localhost:8000/api/v1/users/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log(data);
  return data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const login = async (userData) => {
  const response = await fetch("http://localhost:8000/api/v1/users/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};

export const authService = {
  createUser,
  logout,
  login,
};
