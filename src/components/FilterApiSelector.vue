<template>
  <v-col cols="12" sm="6">
    <v-select
      v-model="selectedCategories"
      :items="categories"
      label="Select"
      multiple
      chips
      hint="Filter by categories"
      persistent-hint
    ></v-select>
  </v-col>
</template>

<script>
export default {
  watch: {
    selectedCategories(categories) {
      this.$emit('selectedCategories', categories);
    },
  },
  data() {
    return {
      selectedCategories: [],
      // For categories like "Science & Math" which have a space and an ampersand,
      // the query is simply the first word. Using "Science & Math"
      // as an example, the correct query would be category=science
      categories: [
        'Animals',
        'Anime',
        'Anti-Malware', // TODO: '-' ?
        'Art',
        'Authentication',
        'Blockchain',
        'Books',
        'Business',
        'Calendar',
        'Cloud', // Cloud Storage & File Sharing
        'Continuous', // Continuous Integration
        'Cryptocurrency',
        'Currency Exchange',
        'Data Validation',
        'Development',
        'Dictionaries',
        'Documents', // Documents & Productivity
        'Email',
        'Entertainment',
        'Environment',
        'Events',
        'Finance',
        'Food', // Food & Drink
        'Games', // Games & Comics
        'Geocoding',
        'Government',
        'Health',
        'Jobs',
        'Machine', // Machine Learning
        'Music',
        'News',
        'Open', // Open Data
        // TODO: Open Source Projects ?
        'Patent',
        'Personality',
        'Phone',
        'Photography',
        'Programming',
        'Science', // Science & Math
        'Security',
        'Shopping',
        'Social',
        'Sports', // Sports & Fitness
        'Test', // Test Data
        'Text', // Text Analysis
        'Tracking',
        'Transportation',
        'URL', // URL Shorteners
        'Vehicle',
        'Video',
        'Weather',
      ],
    };
  },
};
</script>
