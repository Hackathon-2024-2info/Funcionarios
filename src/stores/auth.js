import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const user = ref({
    nome: 'Edson',
    is_admin: false
  });

  function toggleAdmin() {
    user.value.is_admin = !user.value.is_admin
  }

  return { user, toggleAdmin };
});