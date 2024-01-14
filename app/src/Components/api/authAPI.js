/*import { $authHost, $host } from ".";

const login = async (loginData) => {
    try {
        const response = await $host.post("/auth/login", loginData);

        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else if (error.request) {
            console.log("Server did not respond.");
        } else {
            console.log("Error while creating request");
        }
    }
};

const checkEmail = async (email) => {
    try {
        const response = await $host.post("/auth/registeration", { email });

        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else if (error.request) {
            console.log("Server did not respond.");
        } else {
            console.log("Error while creating request");
        }
    }
};

const registration = async (userData) => {
    try {
        const response = await $host.post("/auth/registration/user", userData);

        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else if (error.request) {
            console.log("Server did not respond.");
        } else {
            console.log("Error while creating request");
        }
    }
};

export { login, checkEmail, registration};*/
import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";

export const registration = async ({ email, password }) => {
      const { data } = await $host.post("api/users/registration", { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('isAuth', true);
      return jwtDecode(data.token);
  }
export const login = async (email, password) => {
    const { data } = await $host.post("api/users/login", { email, password } );
    localStorage.setItem('token', data.token);
    localStorage.setItem('isAuth', true);
    return jwtDecode(data.token);
}

export const check = async () => {
    const response = await $authHost.post('api/users/auth');
    localStorage.setItem('token', response.data);
    return response;
}