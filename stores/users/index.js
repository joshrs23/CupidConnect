import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

  state: () => ({

    user: '',

  }),

  actions: {

    setuser(user) {
      this.user = user;
    },

    logOutUser(){

      localStorage.removeItem('CupidConnectuser');
      localStorage.removeItem('CupidConnectToken');
      localStorage.removeItem('CupidConnectType');
      localStorage.removeItem('CupidConnectId');
      
    }
  },
})