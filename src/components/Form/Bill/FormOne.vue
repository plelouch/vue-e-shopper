<template>
  <form @submit.prevent="save">
    <input type="text" placeholder="Company Name" />
    <input type="text" placeholder="Email*" />
    <input type="text" placeholder="Title" />
    <input type="text" placeholder="First Name *" />
    <input type="text" placeholder="Middle Name" />
    <input type="text" placeholder="Last Name *" />
    <input type="text" placeholder="Address 1 *" />
    <input type="text" placeholder="Address 2" />
  </form>
</template>

<script>
export default {
  name: "FormOne",
  methods: {
    save() {},
  },
};
</script>

<style scoped></style>
