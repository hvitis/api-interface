<template>
  <div>
    <TableApi :isQuerying="isQuerying">
      <CardApi
        v-for="(item, index) of selectedApis"
        :key="index"
        :item="item"
      />
    </TableApi>
    <v-pagination
      v-model="currentPage"
      class="my-4"
      :length="pagesAvailable"
    ></v-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TableApi from '@/components/TableApi.vue';
import CardApi from '@/components/CardApi.vue';

export default {
  components: { TableApi, CardApi },
  data() {
    return {
      currentPage: 1,
    };
  },
  watch: {
    currentPage(currentPage) {
      this.getPaginatedResults({ currentPage });
    },
  },
  computed: {
    ...mapGetters({
      isQuerying: 'isQuerying',
      selectedApis: 'selectedApis',
      pagesAvailable: 'pagesAvailable',
    }),
  },
  mounted() {
    let title = '';
    let category = '';
    this.fetchApi({ title, category });
  },
  methods: mapActions(['fetchApi', 'getPaginatedResults']),
};
</script>
