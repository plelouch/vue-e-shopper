<template>
  <form @submit.prevent="save">
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email Address" />
    <span>
      <input type="checkbox" class="checkbox" />
      Keep me signed in
    </span>
    <button type="submit" class="btn btn-default">Login</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  methods: {
    save() {},
  },
};
</script>

<style scoped></style>
