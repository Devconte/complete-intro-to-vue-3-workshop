<script setup>
import BaseCounter from "./components/base-counter.vue";
import UserCard from "./components/user-card.vue";
import { useCount } from "@/composables/countStore";
import { ref, watch } from "vue";

const colorPreference = ref("black");
const countStore = useCount();
watch(countStore.globalCount, (newVal) => {
  console.log("globalCount changed to", newVal);
});
</script>

<template>
  <div class="wrapper">
    <router-link to="/">Home</router-link> |
    <router-link to="/pokedex">Pokedex</router-link>
    <h2>{{ countStore.globalCount }}</h2>
    <h2>{{ colorPreference }}</h2>
    <input type="color" v-model="colorPreference" />
    <BaseCounter />
    <UserCard :user="{ name: 'Ben', food: 'Ramen' }" />
  
  </div>
</template>

<style>
html {
  background-color: papayawhip;
}

.wrapper {
  background-color: v-bind(colorPreference);
}

.button {
  border: 10px solid red !important;
}
</style>
