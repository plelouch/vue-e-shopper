<template>
  <div class="header-middle">
    <!--header-middle-->
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="logo pull-left">
            <router-link :to="{ name: 'homepage' }" replace>
              <img src="@/assets/images/home/logo.png" alt="" />
            </router-link>
          </div>
          <div class="btn-group pull-right">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-default dropdown-toggle usa"
                data-toggle="dropdown"
              >
                USA
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#">Canada</a></li>
                <li><a href="#">UK</a></li>
              </ul>
            </div>

            <div class="btn-group">
              <button
                type="button"
                class="btn btn-default dropdown-toggle usa"
                data-toggle="dropdown"
              >
                DOLLAR
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#">Canadian Dollar</a></li>
                <li><a href="#">Pound</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="shop-menu pull-right">
            <ul class="nav navbar-nav">
              <li>
                <a href="#"><i class="fa fa-user"></i> Account</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-star"></i> Wishlist</a>
              </li>
              <li>
                <router-link :to="{ name: 'checkout' }" replace
                  ><i class="fa fa-crosshairs"></i> Checkout</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'cart' }" replace
                  ><i class="fa fa-shopping-cart"></i> Cart</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'login' }" replace
                  ><i class="fa fa-lock"></i> Login</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMiddle",
};
</script>

<style scoped></style>
