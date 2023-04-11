<template>
  <v-row dense class="d-flex flex-row mb-6">
      <v-sheet v-if="isQuerying" color="grey lighten-4" class="pa-3">
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
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
