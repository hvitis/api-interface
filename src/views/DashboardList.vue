<template>
  <TableApi :isQuerying="isQuerying">
    <CardApi v-for="(item, index) of apis" :key="index" :item="item" />
  </TableApi>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TableApi from '@/components/TableApi.vue';
import CardApi from '@/components/CardApi.vue';

export default {
  components: { TableApi, CardApi },
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
