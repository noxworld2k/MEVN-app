<template>
  <router-view />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const message = ref('');

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/');
    message.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>
