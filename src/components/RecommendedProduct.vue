<template>
  <div class="product-image-wrapper">
    <div class="single-products">
      <div class="productinfo text-center">
        <img :src="image" alt="" />
        <h2 v-money="price"></h2>
        <p>{{ name }}</p>
        <a href="#" class="btn btn-default add-to-cart"
          ><i class="fa fa-shopping-cart"></i>Add to cart</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendedProduct",
  props: ["image", "price", "name"],
};
</script>

<style scoped></style>
