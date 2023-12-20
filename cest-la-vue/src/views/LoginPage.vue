<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');

const login = () => {
console.log('login', email.value);
 router.push('/user')
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" v-model="email"/>
    <button @click="login">Continue with email</button>
  </main>
</template>

<style></style>
