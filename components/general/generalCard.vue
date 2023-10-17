<template>
  <div class="prospect-card card" 
    @mousedown="startDragging" 
    @touchstart="startDragging" 
    :style="cardStyle"
  >
    <div class="image-container">
      <div class="bg-transparent w-full h-full absolute"></div>
      <img
        :src="prospect.images[currentImageIndex]"
        alt="Profile Picture"
        class="profile-image"
      />
    </div>
    <div class="text-overlay">
      <h2 class="name">{{ prospect.name }}</h2>
      <p class="age">{{ prospect.age }}</p>
    </div>
  </div>
</template>

  <script>
  import { useUserStore } from '@/stores/users'

  export default {
    props: {
      prospect: Object,
      index: Number,
    },
    data() {
      return {
        startPoint: null,
        offsetX: 0,
        offsetY: 0,
        zIndex: 0,
        currentImageIndex: 0,
      };
    },
    computed: {
      cardStyle() {
        let rotation = 0;
        rotation = this.index * 5;
        return {
          transform: `rotate(${rotation}deg) translateX(${rotation * 2.5}px)`,
          backdropFilter: `blur(${rotation * 5}px)`,
      };
    },
    },
    methods: {
      resetRotation() {
        const cards = document.querySelectorAll('.prospect-card');
        cards.forEach((card, idx) => {
          if (idx !== this.index) {
            card.style.transition = 'transform 1s';
            if (idx >= 1 && idx <= 2) {
              rotation = idx + 2;
            }
            card.computed.cardStyle();
          }
        });
      },
      startDragging(event) {
        if (this.isTouchDevice()) {
          event.preventDefault();
          const touch = event.changedTouches[0];
          if (!touch) {
            return;
          }
          this.startPoint = { x: touch.clientX, y: touch.clientY };
          document.addEventListener('touchmove', this.handleTouchMove);
          this.$el.style.transition = 'transform 0s';
        } else {
          const { clientX, clientY } = event;
          this.startPoint = { x: clientX, y: clientY };
          document.addEventListener('mousemove', this.handleMouseMove);
          this.$el.style.transition = 'transform 0s';
        }
  
        document.addEventListener('mouseup', this.handleMoveUp);
        document.addEventListener('touchend', this.handleTouchEnd);
        document.addEventListener('cancel', this.handleTouchEnd);
      },
  
      handleMove(x, y) {
        this.offsetX = x - this.startPoint.x;
        this.offsetY = y - this.startPoint.y;
        const rotate = this.offsetX * 0.1;
        this.$el.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px) rotate(${rotate}deg)`;
  
        if (Math.abs(this.offsetX) > this.$el.clientWidth * 0.1) {
          this.dismiss(this.offsetX > 0 ? 1 : -1);
        }
      },
  
      handleMouseMove(event) {
        event.preventDefault();
        if (!this.startPoint) return;
        const { clientX, clientY } = event;
        this.handleMove(clientX, clientY);
      },
  
      handleMoveUp() {
        this.startPoint = null;
        document.removeEventListener('mousemove', this.handleMouseMove);
        this.$el.style.transform = '';
      },
  
      handleTouchMove(event) {
        if (!this.startPoint) return;
        const touch = event.changedTouches[0];
        if (!touch) {
          return;
        }
        const { clientX, clientY } = touch;
        this.handleMove(clientX, clientY);
      },
  
      handleTouchEnd() {
        this.startPoint = null;
        document.removeEventListener('touchmove', this.handleTouchMove);
        this.$el.style.transform = '';
      },
  
      dismiss(direction) {
          if(direction== 1){
            useUserStore().likeProspectById(this.prospect.id)
          }else if(direction == -1){
            useUserStore().dislikeProspectById(this.prospect.id)
          }
          this.startPoint = null;
          document.removeEventListener('mouseup', this.handleMoveUp);
          document.removeEventListener('mousemove', this.handleMouseMove);
          document.removeEventListener('touchend', this.handleTouchEnd);
          document.removeEventListener('touchmove', this.handleTouchMove);
          this.$el.style.transition = 'transform 0.7s';
          this.$el.style.transform = `translate(${direction * window.innerWidth}px, ${this.offsetY}px) rotate(${90 * direction}deg)`;
          this.$el.addEventListener('transitionend', this.handleTransitionEnd);
      },
      handleTransitionEnd() {
        this.$el.style.transition = 'transform 0s';
        this.$el.style.transform = 'translate(0, 0)'; 
        this.$el.removeEventListener('transitionend', this.handleTransitionEnd);
        this.$emit('dismissed');
      },
      isTouchDevice() {
        return (
          'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: absolute; /* Changed to absolute positioning */
  cursor: pointer;
  user-select: none;
  transition: transform 0.5s; /* Added transition for smooth movement */
}
.prospect-card {
  width: 550px;
  height: 680px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  color: white;
}
@media screen and (max-width: 1024px) {
  .prospect-card {
    width: 350px;
    height: 480px;
  }
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.text-overlay {
  position: absolute;
  bottom: 0; /* Position at the bottom */
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%);
  border-radius: 0 0 10px 10px;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content:space-between;
}
  
  .name {
    font-size: 24px;
    margin: 0;
  }
  
  .age {
    font-size: 16px;
    margin: 5px 0;
  }
  
  .description {
    font-size: 16px;
    margin: 5px 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  
  .banner {
    height: 30px; /* Adjust the banner height as needed */
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #000 100%);
    border-radius: 0 0 10px 10px;
  }
  </style>
  