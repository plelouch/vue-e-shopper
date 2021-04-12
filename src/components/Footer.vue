<template>
  <footer id="footer">
    <!--Footer-->
    <footer-top />

    <footer-widget />

    <footer-bottom />
  </footer>
</template>

<script>
import FooterTop from "./FooterComponents/FooterTop";
import FooterBottom from "./FooterComponents/FooterBottom";
import FooterWidget from "./FooterComponents/FooterWidget";

export default {
  name: "Footer",
  components: { FooterTop, FooterWidget, FooterBottom },
};
</script>

<style scoped></style>
