import { defineStore } from 'pinia'

export const useIdentitiesStore = defineStore('identities', {

  state: () => ({
    identities: [],
  }),

  actions: {

    setIdentities(identities) {
      this.identities = identities;
    },
    getIdentities(){
        return this.identities
    },
    getIdentitiesById(id){
      return this.identities.find(identity => identity._id === id).name;
    }
  },
})