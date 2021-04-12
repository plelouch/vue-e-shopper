<template>
  <form @submit.prevent="save">
    <input type="text" placeholder="Zip / Postal Code *" />
    <select>
      <option>-- Country --</option>
      <option>United States</option>
      <option>Bangladesh</option>
      <option>UK</option>
      <option>India</option>
      <option>Pakistan</option>
      <option>Ucrane</option>
      <option>Canada</option>
      <option>Dubai</option>
    </select>
    <select>
      <option>-- State / Province / Region --</option>
      <option>United States</option>
      <option>Bangladesh</option>
      <option>UK</option>
      <option>India</option>
      <option>Pakistan</option>
      <option>Ucrane</option>
      <option>Canada</option>
      <option>Dubai</option>
    </select>
    <input type="password" placeholder="Confirm password" />
    <input type="text" placeholder="Phone *" />
    <input type="text" placeholder="Mobile Phone" />
    <input type="text" placeholder="Fax" />
  </form>
</template>

<script>
export default {
  name: "FormTwo",
  methods: {
    save() {},
  },
};
</script>

<style scoped></style>
