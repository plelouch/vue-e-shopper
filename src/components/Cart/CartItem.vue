<template>
  <tr>
    <td class="cart_product">
      <a href=""><img :src="image" alt="" /></a>
    </td>
    <td class="cart_description">
      <h4><a href="">Colorblock Scuba</a></h4>
      <p>Web ID: 1089772</p>
    </td>
    <td class="cart_price">
      <p v-money="price">$59</p>
    </td>
    <td class="cart_quantity">
      <div class="cart_quantity_button">
        <a class="cart_quantity_up" href="javascript:void" @click="addQuantity">
          +
        </a>
        <input
          class="cart_quantity_input"
          type="text"
          name="quantity"
          v-model="quantity"
          autocomplete="off"
          size="2"
        />
        <a
          class="cart_quantity_down"
          href="javascript:void"
          @click="removeQuantity"
        >
          -
        </a>
      </div>
    </td>
    <td class="cart_total">
      <p class="cart_total_price" v-money="total">$59</p>
    </td>
    <td class="cart_delete">
      <a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartItem",
  props: ["price", "image"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    addQuantity() {
      return this.quantity++;
    },
    removeQuantity() {
      return this.quantity--;
    },
  },
  computed: {
    total() {
      return this.price * this.quantity;
    },
  },
};
</script>

<style scoped></style>
