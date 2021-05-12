import {
  FETCH_PRODUCT_STOCK_BY_ID,
  REFILL_PRODUCT_STOCK,
  PURCHASE_PRODUCT,
  FETCH_PRODUCT_ITEM,
  FETCH_PRODUCT_LIST,
} from "@/helpers/product-api";

export default (vm) => ({
  async fetchProductList({ commit }) {
    const response = await vm.$api.get(FETCH_PRODUCT_LIST);
    commit("setProductList", response.data.slice(0, 12));
  },

  async fetchProductItem({ commit }, id) {
    const response = await vm.$api.get(FETCH_PRODUCT_ITEM(id));
    commit("setProductItem", response.data);
  },

  async fetchStockById({ commit }, id) {
    const response = await vm.$api.get(FETCH_PRODUCT_STOCK_BY_ID(id));
    commit("setProductStock", response.data);
  },

  async updateProductStock(_, payload) {
    await vm.$api.put(REFILL_PRODUCT_STOCK(payload));
  },

  async purchaseProduct(_, payload) {
    await vm.$api.put(PURCHASE_PRODUCT(payload));
  },
});
