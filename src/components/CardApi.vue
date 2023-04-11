<template>
  <v-card class="my-2" max-width="344">
    <v-card-title>
      {{ item.API }}
    </v-card-title>
    <v-card-text>
      <p>{{ item.Description }}</p>
      <CustomPill
        :icon="!item.HTTPS ? 'mdi-key-alert' : 'mdi-shield-key'"
        title="HTTPS"
        :isPresent="item.HTTPS"
      ></CustomPill>
      <CustomPill
        :icon="item.Cors === 'yes' ? 'mdi-shield' : 'mdi-shield-alert'"
        title="CORS"
        :isPresent="item.Cors === 'yes'"
      ></CustomPill>
      <CustomPill
        :icon="!item.Auth ? 'mdi-lock' : 'mdi-lock-off'"
        title="Auth"
        :isPresent="!item.Auth"
      ></CustomPill>
      <CustomPill :title="item.Category"></CustomPill>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="indigo darken-3"> Learn More </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import CustomPill from './CustomPill.vue';

export default {
  name: 'TableApi',
  props: {
    item: Object,
  },
  components: { CustomPill },
};
</script>
