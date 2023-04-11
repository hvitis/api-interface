<template>
  <v-card class="ma-1 d-flex flex-column card-outter" max-width="255">
    <v-card-title>
      {{ item.API }}
    </v-card-title>
    <v-card-text>
      <p>{{ item.Description }}</p>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-text>
      <custom-pill
        :icon="!item.HTTPS ? 'mdi-key-alert' : 'mdi-shield-key'"
        title="HTTPS"
        :isPresent="item.HTTPS"
      ></custom-pill>
      <custom-pill
        :icon="item.Cors === 'yes' ? 'mdi-shield' : 'mdi-shield-alert'"
        title="CORS"
        :isPresent="item.Cors === 'yes'"
      ></custom-pill>
      <custom-pill
        :icon="!item.Auth ? 'mdi-lock' : 'mdi-lock-off'"
        title="Auth"
        :isPresent="!item.Auth"
      ></custom-pill>
      <custom-pill :title="item.Category"></custom-pill>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="blue darken-2" :href="item.Link"> Learn More </v-btn>
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
