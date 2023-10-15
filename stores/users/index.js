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
    getUserById(userId){
      var prospects = this.getArrayOfProspects();
      const user = prospects.find((prospect) => prospect.userId === userId);

      if (user) {
        return user;
      } else {
        return "User not found";
      }
    },
    
    getArrayOfProspects(){
      var prospects = [
        {
          id: 1,
          name: 'John Doe',
          userId: 'john_doe123',
          age: 28,
          description: 'I love hiking and reading books.',
          interests: ['Hiking', 'Reading', 'Traveling'],
          profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
          images: ['https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
        },
        {
          id: 2,
          name: 'Aldo Lozano',
          userId: 'aldo.lozanov',
          age: 18,
          description: 'Foodie and movie enthusiast.',
          interests: ['Food', 'Movies', 'Cooking'],
          profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
          images: ['https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
        },
        {
          id: 3,
          name: 'Emiliano Ruiz',
          userId: 'emiliano_ruiz',
          age: 29,
          description: 'Foodie and movie enthusiast.',
          interests: ['Food', 'Movies', 'Cooking'],
          profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
          images: ['https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
        },
        {
          id: 4,
          name: 'Nikki Perez',
          userId: 'nikki.perez23',
          age: 40,
          description: 'Foodie and movie enthusiast.',
          interests: ['Food', 'Movies', 'Cooking'],
          profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
          images: ['https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
        },
      ]
      return prospects
    }, 
    getArrayOfChatHistoryProspects(){
      var prospects = this.getArrayOfProspects();
      return prospects;
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