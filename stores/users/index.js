import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

  state: () => ({

    user: '',
    email: '',

  }),

  actions: {

    setuser(user) {
      this.user = user;
    },
    setEmail(email) {
      this.email = email;
    },

    logOutUser(){

      localStorage.removeItem('CupidConnectEmail');
      localStorage.removeItem('CupidConnectuser');
      localStorage.removeItem('CupidConnectToken');
      localStorage.removeItem('CupidConnectType');
      localStorage.removeItem('CupidConnectId');
      
    }
  },
})