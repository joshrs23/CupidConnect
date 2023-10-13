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

    likeProspectById(id){
      console.log(id + " Is liked");
    },
    dislikeProspectById(id){
      console.log(id + " Is not liked");
    },
    getUserById(){

    },
    
    getArrayOfProspects(){
      var prospects = [
        {
          id: 1,
          name: 'John Doe',
          age: 28,
          description: 'I love hiking and reading books.',
          interests: ['Hiking', 'Reading', 'Traveling'],
          image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
        },
        {
          id: 2,
          name: 'Aldo Lozano',
          age: 18,
          description: 'Foodie and movie enthusiast.',
          interests: ['Food', 'Movies', 'Cooking'],
          image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
        },
        {
          id: 3,
          name: 'Emiliano Ruiz',
          age: 29,
          description: 'Foodie and movie enthusiast.',
          interests: ['Food', 'Movies', 'Cooking'],
          image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
        },
        {
          id: 4,
          name: 'Nikki Perez',
          age: 40,
          description: 'Foodie and movie enthusiast.',
          interests: ['Food', 'Movies', 'Cooking'],
          image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
        },
      ]
      return prospects
    }, 
    getArrayOfChatHistoryProspects(){

    },
    getChatHistory(){

    },
    getArrayOfLikedProspects(){

    }, 
    getArrayOfProspectsWhoLikedUser(){

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