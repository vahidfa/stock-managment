<template>
  <v-snackbar :value="show" color="danger">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="danger"
        text
        v-bind="attrs"
        @click="$emit('update:show', $event.target.value)"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Server Error",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
