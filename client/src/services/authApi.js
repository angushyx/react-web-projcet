import axios from "axios";
const APL_URL = "http://localhost:8080/api/users";

class AuthService {
  signup(name, email, password, role, confirmPassword) {
    return axios.post(APL_URL + "/signup", {
      name,
      email,
      password,
      role,
      confirmPassword,
    });
  }
}

export default new AuthService();
