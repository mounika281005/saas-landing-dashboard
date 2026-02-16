export const login = () => {
  localStorage.setItem("token", "fake_token");
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return typeof window !== "undefined" && localStorage.getItem("token");
};
