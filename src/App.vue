<template>
  <v-app>
    <dashboard-layout>
      <v-main>
        <router-view />
        <slot></slot>
      </v-main>
    </dashboard-layout>
  </v-app>
</template>

<script>
import DashboardLayout from '@/layout';
export default {
  name: 'App',
  components: {
    DashboardLayout,
  },
};
</script>
