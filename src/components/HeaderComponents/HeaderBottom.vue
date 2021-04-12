<template>
  <div class="header-bottom">
    <!--header-bottom-->
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="mainmenu pull-left">
            <ul class="nav navbar-nav collapse navbar-collapse">
              <li>
                <router-link :to="{ name: 'homepage' }" replace
                  >Home</router-link
                >
              </li>
              <li class="dropdown">
                <a href="#">Shop<i class="fa fa-angle-down"></i></a>
                <ul role="menu" class="sub-menu">
                  <li>
                    <router-link :to="{ name: 'product.index' }" replace
                      >Products</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'product.show', params: { id: 1 } }"
                      replace
                      >Product Details</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'checkout' }" replace
                      >Checkout</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'cart' }" replace
                      >Cart</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'login' }" replace
                      >Login</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#">Blog<i class="fa fa-angle-down"></i></a>
                <ul role="menu" class="sub-menu">
                  <li>
                    <router-link :to="{ name: 'blog.index' }" replace
                      >Blog List</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'blog.show', params: { id: 1 } }"
                      replace
                      >Blog Single</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{ name: 'not-found' }" replace
                  >404</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'contact' }" replace
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="search_box pull-right">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBottom",
};
</script>

<style scoped></style>
