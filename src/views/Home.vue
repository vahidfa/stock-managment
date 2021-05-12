<template>
  <product-list-card :items="productList" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    ProductListCard: () =>
      import(
        /* webpackChunkName: "home" */ "@/components/Product/ProductListCard.vue"
      ),
  },
  computed: {
    ...mapGetters({
      productList: "product/productList",
    }),
  },
  mounted() {
    this.fetchProductList();
  },
  methods: {
    ...mapActions({
      fetchProductList: "product/fetchProductList",
    }),
  },
};
</script>
