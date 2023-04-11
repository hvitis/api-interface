<template>
  <dashboard-layout>
    <slot></slot>
  </dashboard-layout>
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
