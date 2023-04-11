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

      <filter-api-selector
        @selectedCategories="queryByCategory"
        max-width="500"
      ></filter-api-selector>
    </v-row>
    <table-api :isQuerying="isQuerying" v-if="selectedApis">
      <custom-card
        v-for="(item, index) of selectedApis"
        :key="index"
        :item="item"
      />
      <v-container>
        <v-row>
          <v-pagination
            v-if="selectedApis"
            v-model="currentPage"
            class="my-4"
            :length="pagesAvailable"
          ></v-pagination>
        </v-row>
      </v-container>
    </table-api>
    <div v-else>
      <v-alert shaped dark color="info">
        There is no APIs for the given query. Try changing the search parameters.
      </v-alert>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TableApi from '@/components/TableApi.vue';
import CustomCard from '@/components/CustomCard.vue';
import debounce from 'lodash/debounce';
import FilterApiSelector from '@/components/FilterApiSelector.vue';

export default {
  components: { TableApi, CustomCard, FilterApiSelector },
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
    queryByCategory: debounce(function (event) {
      this.category = event;
      this.fetchApi({ title: this.title, category: this.category });
    }, 1200),
  },
};
</script>
