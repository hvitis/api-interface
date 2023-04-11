<template>
  <v-row dense>
    <v-col v-for="n in 8" :key="n" cols="3">
      <v-sheet v-if="isQuerying" color="grey lighten-4" class="pa-3">
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-sheet>
      <v-sheet v-else color="grey-lighten-2">
        <slot></slot>
      </v-sheet>
    </v-col>
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
