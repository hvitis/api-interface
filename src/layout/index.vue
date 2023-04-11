<template>
  <v-app>
    <nav-bar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { NavBar } from './components';
export default {
  name: 'DashboardLayout',
  components: {
    NavBar,
  },
};
</script>
