<template>
  <div>
    <product-item :item="productItem" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductDetail",
  components: {
    ProductItem: () =>
      import(
        /* webpackChunkName: "ProductDetail" */ "@/components/Product/ProductItem.vue"
      ),
  },
  computed: {
    ...mapGetters({
      productItem: "product/productItem",
    }),
  },
  async mounted() {
    await this.fetchProductItem(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchProductItem: "product/fetchProductItem",
    }),
  },
};
</script>
