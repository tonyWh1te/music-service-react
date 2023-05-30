import axios from 'axios';

class UserService {
  #REGISTER_URL = 'http://localhost:3001/users';

  #postData = async (data, url = this.#REGISTER_URL) => {
    try {
      const response = await axios.post(url, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' }, withCredentials: true });

      return { data: response.data, message: 'Succes!' };
    } catch (error) {
      if (!error?.response) {
        throw new Error('No Server Response');
      } else if (error.response?.status === 409) {
        throw new Error('Email Taken');
      } else {
        throw new Error('Registration Failed');
      }
    }
  };

  registerUser = async (user) => {
    const result = await this.#postData(user);

    return result;
  };
}

export default UserService;
