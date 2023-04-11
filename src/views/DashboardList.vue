<template>
  <div>
    <TableApi :msg="`${isQuerying ? 'Loading...' : 'Available APIs' }`" />
    <div>{{ apis }}</div>
  </div>
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
    let category = 'animals';
    this.fetchApi({ title, category });
  },
  methods: mapActions(['fetchApi']),
};
</script>
