<template>
  <div>
  <h1>Editar Perfil</h1>
  <input type="file" @change="uploadPhoto" />
  <div v-for="(photo, index) in user._pictures" :key="index">
  <img :src="photo" alt="Foto de perfil" />
  <button @click="deletePhoto(index)">Eliminar</button>
  </div>
  </div>
  </template>
   
  <script>
  export default {
    data() {
      return {
        user: {
          // Datos de usuario, incluyendo _pictures
        },
      };
    },
    methods: {
      async uploadPhoto(event) {
        try {
          const file = event.target.files[0];
          const formData = new FormData();
          formData.append('photo', file);
   
          // Envía la foto al servidor
          const response = await this.$axios.post('/api/uploadPhoto', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
   
          if (response.data.success) {
            // Actualiza las fotos del usuario
            this.user._pictures.push(response.data.photoUrl);
          } else {
            // Muestra un mensaje de error si la carga falla
            console.error('Error al cargar la foto');
          }
        } catch (error) {
          console.error('Error al cargar la foto', error);
        }
      },
   
      async deletePhoto(index) {
        try {
          // Envía el índice de la foto al servidor para eliminarla
          const response = await this.$axios.post('/api/deletePhoto', { index });
   
          if (response.data.success) {
            // Elimina la foto del usuario
            this.user._pictures.splice(index, 1);
          } else {
            // Muestra un mensaje de error si la eliminación falla
            console.error('Error al eliminar la foto');
          }
        } catch (error) {
          console.error('Error al eliminar la foto', error);
        }
      },
    },
  };
  </script>