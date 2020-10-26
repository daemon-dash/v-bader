<template>
  <div class="container">
    <div class="centered">
      <input
        v-model="title"
        type="text"
        class="title"
        placeholder="title"
      /><br />
      <textarea v-model="body" class="content" rows="3" placeholder="content">
      </textarea>
      <br />
      <div class="buttons">
        <!--
          trigered on click
          @event click
        -->
        <button @click="onEditDone" class="done">Done</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  /**
   * the values of title and body will be passed down to component
   * @binding {title} title is currentTitle in state
   * @binding {body} content text of current Post
   */
  props: ["post"],
  data() {
    return {
      title: this.post.title,
      body: this.post.body
    };
  },
  methods: {
    onEditDone() {
      if (this.title !== "" || this.body !== "") {
        this.$emit("editDone", {
          title: this.title,
          body: this.body
        });
      }

      this.title = "";
      this.body = "";
    }
  }
};
</script>
<style scoped>
.title,
.content {
  border: none;
  width: calc(100% - 20px);
  padding: 10px;
  display: inline-block;
}
.title {
  font-weight: bold;
}
.container {
  text-align: center;
  margin-top: 0;
}
.container .centered {
  display: inline-block;
  width: 80%;
  text-align: left;
  background-color: white;
  box-shadow: 3px 3px 5px grey;
}
.buttons {
  padding: 10px;
}
</style>
