<template>
  <div>
    <Slider />
    <!--/slider-->
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
                  :image="'../assets/images/home/product1.jpg'"
                  :price="5000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product2.jpg'"
                  :price="6000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product3.jpg'"
                  :price="9000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product4.jpg'"
                  :price="8000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product5.jpg'"
                  :price="4000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>
              <div class="col-sm-4">
                <Product
                  :image="'../assets/images/home/product6.jpg'"
                  :price="10000"
                  :name="'Easy Polo Black Edition'"
                />
              </div>
            </div>
            <!--features_items-->

            <div class="category-tab">
              <!--category-tab-->
              <div class="col-sm-12">
                <ul class="nav nav-tabs">
                  <li class="active">
                    <a href="#tshirt" data-toggle="tab">T-Shirt</a>
                  </li>
                  <li><a href="#blazers" data-toggle="tab">Blazers</a></li>
                  <li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
                  <li><a href="#kids" data-toggle="tab">Kids</a></li>
                  <li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane fade active in" id="tshirt">
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery1.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery2.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery3.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery4.jpg'"
                    />
                  </div>
                </div>

                <div class="tab-pane fade" id="blazers">
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery4.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery3.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery2.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery1.jpg'"
                    />
                  </div>
                </div>

                <div class="tab-pane fade" id="sunglass">
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery3.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery4.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery1.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery2.jpg'"
                    />
                  </div>
                </div>

                <div class="tab-pane fade" id="kids">
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery1.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery2.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery3.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery4.jpg'"
                    />
                  </div>
                </div>

                <div class="tab-pane fade" id="poloshirt">
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery2.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery4.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery3.jpg'"
                    />
                  </div>
                  <div class="col-sm-3">
                    <recommended-product
                      :name="'Easy Polo Black Edition'"
                      :price="5000"
                      :image="'assets/images/home/gallery1.jpg'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--/category-tab-->

            <div class="recommended_items">
              <!--recommended_items-->
              <h2 class="title text-center">recommended items</h2>

              <div
                id="recommended-item-carousel"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="item active">
                    <div class="col-sm-4">
                      <recommended-product
                        :name="'Easy Polo Black Edition'"
                        :price="5000"
                        :image="'assets/images/home/recommend1.jpg'"
                      />
                    </div>
                    <div class="col-sm-4">
                      <recommended-product
                        :name="'Easy Polo Black Edition'"
                        :price="5000"
                        :image="'assets/images/home/recommend2.jpg'"
                      />
                    </div>
                    <div class="col-sm-4">
                      <recommended-product
                        :name="'Easy Polo Black Edition'"
                        :price="5000"
                        :image="'assets/images/home/recommend3.jpg'"
                      />
                    </div>
                  </div>
                  <div class="item">
                    <div class="col-sm-4">
                      <recommended-product
                        :name="'Easy Polo Black Edition'"
                        :price="5000"
                        :image="'assets/images/home/recommend1.jpg'"
                      />
                    </div>
                    <div class="col-sm-4">
                      <recommended-product
                        :name="'Easy Polo Black Edition'"
                        :price="5000"
                        :image="'assets/images/home/recommend2.jpg'"
                      />
                    </div>
                    <div class="col-sm-4">
                      <recommended-product
                        :name="'Easy Polo Black Edition'"
                        :price="5000"
                        :image="'assets/images/home/recommend3.jpg'"
                      />
                    </div>
                  </div>
                </div>
                <a
                  class="left recommended-item-control"
                  href="#recommended-item-carousel"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  class="right recommended-item-control"
                  href="#recommended-item-carousel"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <!--/recommended_items-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider";
import LeftSidebar from "@/components/LeftSidebar";
import Product from "@/components/Product";
import RecommendedProduct from "@/components/RecommendedProduct";

export default {
  name: "Home",
  components: { Slider, LeftSidebar, Product, RecommendedProduct },
};
</script>
