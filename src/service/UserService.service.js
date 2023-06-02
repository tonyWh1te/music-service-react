import axios from 'axios';

class UserService {
  #BASE_URL = 'http://127.0.0.1:8000/users';

  #postData = async (data, url) => {
    try {
      const response = await axios.post(url, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });

      return { data: response.data, message: 'Succes!' };
    } catch (error) {
      // if (!error?.response) {
      //   throw new Error('No Server Response');
      // } else if (error.response?.status === 409) {
      //   throw new Error('Email Taken');
      // } else {
      //   throw new Error('Registration Failed');
      // }

      console.log(error);

      if (!error?.response) {
        throw new Error('No Server Response');
      } else if (error.response?.data.errors) {
        throw new Error(error.response.data.errors);
      } else {
        throw new Error(error.response.statusText);
      }
    }
  };

  #transformUser = (user) => ({
    name: user.name,
    last_name: 'none',
    email: user.email,
    password: user.password,
    date_of_birth: new Date(user.date).toISOString(),
    sex: user.gender,
    type_of_subscription: 3,
  });

  registerUser = async (user) => {
    const result = await this.#postData(this.#transformUser(user), `${this.#BASE_URL}/reg_user/`);

    return result;
  };

  loginUser = async (user) => {
    const result = await this.#postData(user, `${this.#BASE_URL}/login/`);

    return { data: result.data.data, message: result.message };
  };
}

export default UserService;
