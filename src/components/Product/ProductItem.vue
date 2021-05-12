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
          type="number"
          :rules="rules"
          v-model="refill"
          placeholder="Enter amount to refill..."
        />
        <v-btn
          :disabled="!refill.length || refill <= 0"
          :loading="refillLoading"
          color="primary"
          @click="refillStock"
        >
          Refill
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          type="number"
          :rules="rules"
          v-model="purchase"
          placeholder="Enter amount to purchase..."
        />
        <v-btn
          :disabled="!purchase.length || purchase <= 0"
          :loading="purchaseLoading"
          color="primary"
          @click="buyProduct"
        >
          Purchase
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
      purchaseLoading: false,
      purchase: "",
      refill: "",
      error: "",
      show: false,
      rules: [(value) => (value && value >= 1) || "minimum is 1"],
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
    async buyProduct() {
      try {
        this.purchaseLoading = true;

        await this.purchaseProduct({
          id: this.item.id,
          amount: this.purchase,
        });

        await this.fetchProductItem(this.item.id);
      } catch (error) {
        this.error = error.response.data || "server error";
        this.show = true;
      } finally {
        this.purchaseLoading = false;
      }
    },
  },
};
</script>

<style></style>
