import HomePage from "./views/HomePage.vue";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/pokedex",
    component: () => import("./views/PokedexPage.vue")
  },
  {
    path: "/pokedex/:id",
    component: () => import("./views/PokemonPage.vue"),
  },
];
