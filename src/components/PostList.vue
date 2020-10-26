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
