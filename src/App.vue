<template>
  <div class="app">
    <div class="header">Badder Rutter Post App</div>
    <div class="body">
      <post-editor :post="$store.state.currentPost" @editDone="onAddDone" />
      <post-list />
    </div>
    <div class="overlay" v-if="$store.state.editPost">
      <post-editor
        class="post-editor"
        @editDone="onEditDone"
        :post="$store.state.editPost"
      />
    </div>
  </div>
</template>

<script>
import PostList from "./components/PostList";
import PostEditor from "./components/PostEditor";

export default {
  /**
   * @requires ./PostList.vue
   * @requires ./PostEditor.vue
   */
  name: "App",
  beforeMount() {
    this.$store.dispatch("loadPosts");
  },
  components: {
    PostList,
    PostEditor
  },
  methods: {
    /**
     * Gets called when the user clicks on the Donebutton
     * Methods are passed down to PostEditor component
     */
    onAddDone(post) {
      this.$store.dispatch("addPost", post);
    },
    onEditDone(post) {
      this.$store.dispatch("updatePost", post);
    }
  }
};
</script>

<style>
.app {
  font-family: "Times New Roman", Times, serif;
}
.header {
  padding: 10px;
  font-size: 25px;
  background-color: #ffa7c4;
  margin-bottom: 5px;
}

.body {
  padding: 5px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(229, 229, 229, 0.75);
}
.post-editor {
  position: absolute;
  width: 100%;
  top: 20%;
}
</style>
