<template>
  <header id="header">
    <!--header-->
    <header-top />
    <!--/header_top-->

    <header-middle />
    <!--/header-middle-->

    <header-bottom />
    <!--/header-bottom-->
  </header>
</template>

<script>
import HeaderTop from "./HeaderComponents/HeaderTop";
import HeaderMiddle from "./HeaderComponents/HeaderMiddle";
import HeaderBottom from "./HeaderComponents/HeaderBottom";
export default {
  name: "HelloWorld",
  components: { HeaderTop, HeaderMiddle, HeaderBottom },
};
</script>
