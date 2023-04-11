<template>
  <div>
    <div>
      <nav-bar />
    </div>
    <slot></slot>
  </div>
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
