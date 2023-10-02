<template>
    <div class="flex">
      <div  class="w-1/6">
        <GeneralMenu />
      </div>
      <div class="w-1/5">
        <ChatList />
      </div>
      <div class="w-4/5">
        <div class="chat">
          <ChatInfoPanel :user="selectedUser" class="chat-panel"/>
          <div ref="chatHistory" class="chat-history">
            <ChatBubble
              v-for="(message, index) in messages"
              :key="index"
              :message="message"
              class="w-fit"
              :user-message="message.sender === 'user'"
              :animate="animate"
            />
          </div>
          <ChatInput @new-message="addMessage" class="chat-input"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ChatInfoPanel from '@/components/chat/chatInfoPanel.vue'; // Adjust the import path as needed
  
  export default {
    components: {
      ChatInfoPanel,
    },
    data() {
      return {
        selectedUser: {
            name: 'John Doe',
            userId: useRoute().params.id,
            profilePicture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1696040619~exp=1696041219~hmac=e9cfe20d0ea8a143729cd601e736143cca6f474428a759006efafeb09e8aea6f',
            age: 30,
        }, // Initialize an empty object for the selected user
        messages: [
          { text: 'Hello!', sender: 'user' },
          { text: 'Hi there!', sender: 'friend' },
          { text: 'How are you?', sender: 'user' },
          { text: 'I\'m good, thanks!', sender: 'friend' },
          { text: 'What are you up to?', sender: 'friend' },
          { text: 'Just working on a project.', sender: 'user' },
        ],
        animate: false, // Initial state for animation
      };
    },
    methods: {
      addMessage(newMessage) {
        this.messages.push({
          text: newMessage,
          sender: 'user',
        });
  
        this.animate = true;
  
        this.$nextTick(() => {
          this.scrollToBottom();
        });
  
        setTimeout(() => {
          this.animate = false;
        }, 500);
      },
      scrollToBottom() {
        const chatHistory = this.$refs.chatHistory;
        chatHistory.scrollTop = chatHistory.scrollHeight;
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-list{
    max-height: 100vh;
  }
  .chat-input{
    max-height: 8%;
  }
  .chat-panel{
    height: 12%;
  }
  .chat {
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    border-left: 1px solid #686262;
    overflow: hidden;
  }
  
  .chat-history {
    padding: 16px;
    min-height: 80%;
    max-height: 80%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  
  /* Define the animation */
  .w-fit {
    transition: opacity 0.5s ease-in-out;
  }
  
  /* Add animation for user messages */
  .w-fit.user-message {
    animation: fadeInRight 0.5s ease-in-out;
  }
  
  /* Add animation for friend messages */
  .w-fit.friend-message {
    animation: fadeInLeft 0.5s ease-in-out;
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  </style>
  