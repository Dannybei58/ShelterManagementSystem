import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_REMOTE_API
});

export default {

  getUsers() {
    return http.get('/users')
  },
  
  firstLogin(user) {
    return http.put('/firstLogin', user)
  }
}