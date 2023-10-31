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
          gender: 'Male',
          description: 'Adventurous soul seeking meaningful connections, a dog lover, foodie, and Netflix enthusiast.',
          interests: ['Hiking', 'Reading', 'Traveling'],
          profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
          images: ['https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
        },
        {
          id: 2,
          name: 'Aldo Lozano',
          userId: 'aldo.lozanov',
          age: 18,
          gender: 'Female',
          description: 'Foodie and movie enthusiast.',
          interests: ['Food', 'Movies', 'Cooking'],
          profilePicture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          images: ['https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
        },
        {
          id: 3,
          name: 'Emiliano Ruiz',
          userId: 'emiliano_ruiz',
          age: 29,
          gender: 'Binary',
          description: 'Foodie and movie enthusiast.',
          interests: ['Food', 'Movies', 'Cooking'],
          profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
          images: ['http://m.gettywallpapers.com/wp-content/uploads/2023/06/Cute-Anime-Girl-Profile-Picture.jpg', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
        },
        {
          id: 4,
          name: 'Nikki Perez',
          userId: 'nikki.perez23',
          age: 40,
          gender: 'Female',
          description: 'Foodie and movie enthusiast.',
          interests: ['Food', 'Movies', 'Cooking'],
          profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
          images: ['https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
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