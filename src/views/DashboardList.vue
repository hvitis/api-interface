<template>
  <div>
    <v-row class="d-flex flex-row mb-1 mt-2">
      <v-text-field
        class="mx-2"
        placeholder="Search by Title"
        name="name"
        label=""
        id="id"
        outlined
        v-model="title"
      ></v-text-field>
      <!-- Insert Filter selector here -->
    </v-row>
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
import debounce from 'lodash/debounce';

export default {
  components: { TableApi, CardApi },
  data() {
    return {
      currentPage: 1,
      title: '',
      category: '',
    };
  },
  watch: {
    currentPage(currentPage) {
      this.getPaginatedResults({ currentPage });
    },
    title(q) {
      this.queryByTitle(q);
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
    this.fetchApi({ title: this.title, category: this.category });
  },
  methods: {
    ...mapActions(['fetchApi', 'getPaginatedResults']),
    queryByTitle: debounce(function (event) {
      this.fetchApi({ title: event, category: this.category });
    }, 800),
  },
};
</script>
