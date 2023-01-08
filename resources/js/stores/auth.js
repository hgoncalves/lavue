import axios from 'axios';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({

    user: null,

    loginData: {
      email: '',
      password: '',
      remember: ''
    }
  }),

  getters:  {
    authenticated: (state) => state.user !== null
  },

  actions: {
    login (data) {
      return new Promise((resolve, reject) => {
        axios.get('/sanctum/csrf-cookie').then((response) => {
          if (response) {
            axios
              .post('/login', data)
              .then((response) => {
                resolve(response);

                setTimeout(() => {
                  this.loginData.email = '';
                  this.loginData.password = '';
                }, 1000);
              })
              .catch((err) => {
                handleError(err);
                reject(err);
              });
          }
        });
      });
    },

    async fetchUser () {
      await axios.get('/api/user', { withCredentials: true }).then((result) => {
        this.user = result.data;
      });
    },

    logout () {
      return new Promise((resolve, reject) => {
        axios
          .post('/auth/logout')
          .then((response) => {
            this.user = null;
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }
});
