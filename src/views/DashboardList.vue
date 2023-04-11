<template>
  <div>
    <TableApi msg="Welcome" />
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
    }),
  },
  mounted() {
    console.log(this)
    this.fetchApi();
  },
  methods: mapActions(['fetchApi']),
};
</script>
