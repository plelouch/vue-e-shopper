<template>
  <div class="container text-center">
    <div class="logo-404">
      <router-link :to="{ name: 'homepage' }" replace
        ><img src="@/assets/images/home/logo.png" alt=""
      /></router-link>
    </div>
    <div class="content-404">
      <img src="@/assets/images/404/404.png" class="img-responsive" alt="" />
      <h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
      <p>
        Uh... So it looks like you brock something. The page you are looking for
        has up and Vanished.
      </p>
      <h2>
        <router-link :to="{ name: 'homepage' }" replace
          >Bring me back Home</router-link
        >
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped></style>
