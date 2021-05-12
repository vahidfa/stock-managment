<template>
  <v-container>
    <v-row>
      <h1>{{ item.name }}</h1>
    </v-row>

    <v-row>
      <span>stock: {{ item.stock }}</span>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="refill"
          placeholder="Enter amount to refill..."
        />
        <v-btn :loading="refillLoading" color="primary" @click="refillStock">
          Refill
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="buy" placeholder="Enter amount to buy..." />
        <v-btn :loading="buyLoading" color="primary" @click="purchase">
          Buy
        </v-btn>
      </v-col>
    </v-row>

    <toast :show.sync="show" :text="error" />
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {
    Toast: () =>
      import(
        /* webpackChunkName: "ProductItem" */ "@/components/Common/Toast.vue"
      ),
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      refillLoading: false,
      buyLoading: false,
      buy: "",
      refill: "",
      error: "",
      show: false,
    };
  },
  methods: {
    ...mapActions({
      updateProductStock: "product/updateProductStock",
      purchaseProduct: "product/purchaseProduct",
      fetchProductItem: "product/fetchProductItem",
    }),
    async refillStock() {
      try {
        this.refillLoading = true;

        await this.updateProductStock({
          id: this.item.id,
          amount: this.refill,
        });

        await this.fetchProductItem(this.item.id);
      } catch (error) {
        this.error = error.response.data || "server error";
        this.show = true;
      } finally {
        this.refillLoading = false;
      }
    },
    async purchase() {
      try {
        this.buyLoading = true;

        await this.purchaseProduct({
          id: this.item.id,
          amount: this.buy,
        });

        await this.fetchProductItem(this.item.id);
      } catch (error) {
        this.error = error.response.data || "server error";
        this.show = true;
      } finally {
        this.buyLoading = false;
      }
    },
  },
};
</script>

<style></style>
