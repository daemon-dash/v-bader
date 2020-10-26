<template>
  <div class="container">
    <post v-for="(post, i) in posts" :post="post" :key="i" />
    <div class="clear" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Post from "./Post";

export default {
  /**
   * the values of title and body will be passed down to component
   * @requires Post.vue
   * @binding {posts} list of posts fetched from api + ones created by user
   */
  components: {
    Post
  },
  computed: mapState({
    posts: "postsList"
  })
};
</script>
<style scoped>
.container {
  display: flex;
  margin-top: 30px;
  width: 100%;
  flex-wrap: wrap;
  padding: 40px;
}
.clear {
  clear: both;
}
</style>
