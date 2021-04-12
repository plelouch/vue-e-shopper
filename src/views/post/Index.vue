<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <left-sidebar />
        </div>
        <div class="col-sm-9">
          <div class="blog-post-area">
            <h2 class="title text-center">Latest From our Blog</h2>
            <Post
              :title="'Girls Pink T Shirt arrived in store'"
              :image="'assets/images/blog/blog-one.jpg'"
            />
            <Post
              :title="'Girls Pink T Shirt arrived in store'"
              :image="'assets/images/blog/blog-two.jpg'"
            />
            <Post
              :title="'Girls Pink T Shirt arrived in store'"
              :image="'assets/images/blog/blog-three.jpg'"
            />
            <div class="pagination-area">
              <ul class="pagination">
                <li><a href="" class="active">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li>
                  <a href=""><i class="fa fa-angle-double-right"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Post from "../../components/Post";
import LeftSidebar from "@/components/LeftSidebar";
export default {
  name: "Index",
  components: { Post, LeftSidebar },
};
</script>

<style scoped></style>
