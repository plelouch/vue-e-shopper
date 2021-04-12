<template>
  <form @submit.prevent="save">
    <input type="text" placeholder="Display Name" />
    <input type="text" placeholder="User Name" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm password" />
  </form>
</template>

<script>
export default {
  name: "UserForm",
  methods: {
    save() {},
  },
};
</script>

<style scoped></style>
