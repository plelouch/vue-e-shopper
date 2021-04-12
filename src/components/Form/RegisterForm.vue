<template>
  <form @submit.prevent="save">
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email Address" />
    <input type="password" placeholder="Password" />
    <button type="submit" class="btn btn-default">Signup</button>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
  methods: {
    save() {},
  },
};
</script>

<style scoped></style>
