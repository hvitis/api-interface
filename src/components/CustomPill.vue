<template>
  <v-chip
    class="ma-1"
    small
    :color="`${color} darken-2`"
    label
    text-color="white"
  >
    <v-icon left v-if="icon"> {{ icon }} </v-icon>
    {{ title }}
  </v-chip>
</template>

<script>
export default {
  name: 'TableApi',
  props: {
    icon: {
      required: false,
      default: '',
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    isPresent: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  computed: {
    color() {
      return this.icon ? (this.isPresent ? 'green' : 'pink') : 'blue';
    },
  },
};
</script>
