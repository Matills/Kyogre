<template>
  <div class="min-h-screen flex items-center justify-center bg-secondary">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <img src="@/assets/logo.svg" alt="Logo" class="mx-auto mb-6 h-36">
      <h1 class="text-3xl font-bold mb-4 text-primary text-center">Kyogre</h1>
      <h2 class="text-2xl font-bold mb-6 text-primary text-center">Iniciar Sesión</h2>
      
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-primary text-sm font-bold mb-2" for="userId">
            Nombre de usuario
          </label>
          <input 
            v-model="userId"
            :class="['w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2', 
            {'border-red-500': errorUserId}]"
            type="text" id="userId" placeholder="Ingresa tu nombre de usuario" required>
          <p v-if="errorUserId" class="text-red-500 text-sm mt-1">Nombre de usuario incorrecto.</p>
        </div>
        
        <div class="mb-6">
          <label class="block text-primary text-sm font-bold mb-2" for="password">
            Contraseña
          </label>
          <input 
            v-model="password"
            :class="['w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2', 
            {'border-red-500': errorPassword}]"
            type="password" id="password" placeholder="Tu contraseña" required>
          <p v-if="errorPassword" class="text-red-500 text-sm mt-1">Contraseña incorrecta.</p>
        </div>
        
        <button 
          class="w-full bg-accent text-white py-2 rounded-lg hover:bg-danger transition duration-300 ease-in-out">
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const userId = ref('');
    const password = ref('');
    const errorUserId = ref(false);
    const errorPassword = ref(false);
    const store = useStore();
    const router = useRouter();

    const handleLogin = () => {
      errorUserId.value = false;
      errorPassword.value = false;

      // Valida credenciales específicas
      if (userId.value === 'rubiolomatias01' && password.value === '123456') {
        store.dispatch('login', userId.value);
        router.push('/home');
      } else {
        if (userId.value !== 'rubiolomatias01') {
          errorUserId.value = true;
        }
        if (password.value !== '123456') {
          errorPassword.value = true;
        }
      }
    };

    return {
      userId,
      password,
      errorUserId,
      errorPassword,
      handleLogin,
    };
  }
}
</script>