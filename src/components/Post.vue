<template>
  <div class="single-blog-post">
    <h3>{{ title }}</h3>
    <div class="post-meta">
      <ul>
        <li><i class="fa fa-user"></i> Mac Doe</li>
        <li><i class="fa fa-clock-o"></i> 1:33 pm</li>
        <li><i class="fa fa-calendar"></i> DEC 5, 2013</li>
      </ul>
      <span>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half-o"></i>
      </span>
    </div>
    <a href="">
      <img :src="image" alt="" />
    </a>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <router-link
      :to="{ name: 'blog.show', params: { id: 1 } }"
      class="btn btn-primary"
      >Read More</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["title", "image"],
};
</script>

<style scoped></style>
