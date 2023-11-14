<template>
    <div class="flex">
      <div class="lg:hidden">
        <GeneralMenuPhone />
      </div>
      <div class="hidden lg:block w-1/6">
        <GeneralMenu />
      </div>
      <div class="w-1/6">
        <ChatList />
      </div>
      <div class="w-4/6">
        <div class="chat">
          <ChatInfoPanel 
            class="chat-panel" 
          />
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
  import ChatInfoPanel from '@/components/chat/chatInfoPanel.vue'; 
  import { useUserStore } from '@/stores/users'
  import io from 'socket.io-client'
  import axios from 'axios';

  export default {
    components: {
      ChatInfoPanel,
    },
    data() {
      return {
        socket : null,
        roomId : '',
        selectedUser: this.getUserId(),
        messages: [
          { text: 'Hello!', sender: 'user' },
          { text: 'Hi there!', sender: 'friend' },
          { text: 'How are you?', sender: 'user' },
          { text: 'I\'m good, thanks!', sender: 'friend' },
          { text: 'What are you up to?', sender: 'friend' },
          { text: 'Just working on a project.', sender: 'user' },
        ],
        animate: false, 
      };
    },
    mounted() {
      this.socket = io('https://espacionebula.com:8000');
  
      this.socket.emit('join room', this.roomId);
  
      this.socket.on('chat message', (msg) => {
        this.messages.push(msg);
      });
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
      getUserId(){
        return useRoute().params.id;
      },
      async getHistory(){
        try {
          const _userId = localStorage.getItem("CupidConnectId");
          const token = localStorage.getItem("CupidConnectToken");
          const dataf = {
            userId: _userId,
            roomId: this.roomId,
          };
          const response = await axios.post(
            "https://espacionebula.com:8000/get-matches",
            dataf,
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
              },
              mode: "cors",
            }
          );
          const data = response.data;
          if (data.success) {
            return data;
          }
        } catch (error) {
        }
      },
      async getRoomId(){
        try {
          const _userId = localStorage.getItem("CupidConnectId");
          const token = localStorage.getItem("CupidConnectToken");
          
          const dataf = {
            userId1: _userId,
            userId2: this.selectedUser,
          };
          const response = await axios.post(
            "https://espacionebula.com:8000/get-match",
            dataf,
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
              },
              mode: "cors",
            }
          );
          const data = response.data;
          if (data.success) {
            return data.match._id;
          } else {
            console.log(
              "There was an error with the user : " + response.data.error
            );
          }
        } catch (error) {
        }
      }
    },
    created: async function () {
      this.roomId = await this.getRoomId();
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
  .w-fit {
    transition: opacity 0.5s ease-in-out;
  }
  
  .w-fit.user-message {
    animation: fadeInRight 0.5s ease-in-out;
  }
  
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
  