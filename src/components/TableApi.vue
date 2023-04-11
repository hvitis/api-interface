<template>
  <v-row dense class="d-flex flex-row mb-6">
    <v-sheet v-if="isQuerying" color="grey lighten-4" class="pa-3">
      <v-skeleton-loader
        v-for="item in 20"
        :key="item"
        class="ma-1 d-flex flex-column card-outter" max-width="255"
        type="card"
      ></v-skeleton-loader>
    </v-sheet>
    <v-sheet v-else color="grey-lighten-2" class="d-flex flex-row flex-wrap">
      <slot></slot>
    </v-sheet>
  </v-row>
</template>

<script>
export default {
  name: 'TableApi',
  props: {
    isQuerying: Boolean,
  },
};
</script>
