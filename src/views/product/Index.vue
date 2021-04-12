<template>
  <div>
    <section id="advertisement">
      <div class="container">
        <img src="../../assets/images/shop/advertisement.jpg" alt="" />
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <left-sidebar />
          </div>

          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <h2 class="title text-center">Features Items</h2>
              <div class="col-sm-4">
                <Product
                  :image="'assets/images/home/product12.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product11.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product10.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product9.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                  :isNew="true"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product8.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                  :isSale="true"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product7.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>

              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product6.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>

              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product5.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>

              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product4.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>

              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product3.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>

              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product2.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>

              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product1.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>

              <ul class="pagination">
                <li class="active"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">&raquo;</a></li>
              </ul>
            </div>
            <!--features_items-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LeftSidebar from "@/components/LeftSidebar";
import Product from "@/components/Product";
export default {
  name: "Index",
  components: { LeftSidebar, Product },
};
</script>

<style scoped></style>
