<template>
  <div class="post">
    <div class="title">{{ post.title }}</div>
    <div class="content">{{ post.body }}</div>
    <div class="icons">
      <img class="edit" src="../assets/edit.svg" @click="onEdit" />
      <img class="delete" src="../assets/delete.svg" @click="onDelete" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["post"],
  methods: {
    // Fire when delete icon is clicked
    // @arg The argument is a Post Object send to Vuex Store
    onDelete() {
      this.$store.dispatch("deletePost", this.post);
    },
    // Fire when edit icon is clicked
    // @arg The argument is a Post Object sent to Vuex Store
    onEdit() {
      this.$store.dispatch("editPost", this.post);
    }
  }
};
</script>
<style scoped>
.post {
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid grey;
  background-color: FloralWhite;
  padding: 10px;
  margin-right: 18px;
  margin-top: 9px;
  box-shadow: 3px 3px 5px grey;
  width: 240px;
  float: left;
}
.title {
  font-weight: bold;
  margin-bottom: 5px;
}
.content {
  font-size: 25px;
}
.icons {
  margin-top: 5px;
  width: 100%;
}
.delete,
.edit {
  width: 24px;
  height: 24px;
  opacity: 0.6;
}
.delete {
  float: right;
}
</style>
