<template>
  <v-row dense class="d-flex flex-row mb-6 px-4">
    <v-sheet
      v-if="isQuerying"
      class="d-flex flex-row flex-wrap mx-auto justify-center"
    >
      <v-skeleton-loader
        v-for="(item, index) in 20"
        :key="index"
        type="card"
        class="ma-1 d-flex flex-column card-outter"
        width="255"
      ></v-skeleton-loader>
    </v-sheet>
    <v-sheet
      v-else
      class="d-flex flex-row flex-wrap mx-auto justify-center"
    >
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
