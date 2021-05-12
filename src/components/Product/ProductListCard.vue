<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, index) in items" :key="index" cols="12" md="4">
        <v-card>
          <v-card-title class="text-h5">
            {{ item.name }}
          </v-card-title>

          <v-card-subtitle>stock: {{ item.stock }}</v-card-subtitle>
          <v-card-actions>
            <v-btn :to="`/detail/${item.id}`" outlined> More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProductListCard",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
