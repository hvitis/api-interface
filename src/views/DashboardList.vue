<template>
  <TableApi :isQuerying="isQuerying">
    <v-card
      class="my-2"
      max-width="344"
      v-for="(item, index) of apis"
      :key="index"
    >
      <v-card-text>
        <div>{{ item.API }}</div>
        <p>{{ item.Description }}</p>
        <div class="text--primary">
          well meaning and kindly.<br />
          "a benevolent smile"
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
      </v-card-actions>
    </v-card>
  </TableApi>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TableApi from '@/components/TableApi.vue';

export default {
  components: { TableApi },
  computed: {
    ...mapGetters({
      apis: 'apis',
      isQuerying: 'isQuerying',
    }),
  },
  mounted() {
    let title = 'geo';
    let category = '';
    this.fetchApi({ title, category });
  },
  methods: mapActions(['fetchApi']),
};
</script>
