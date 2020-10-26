import Vuex from "vuex";
import Vue from "vue";

//import of api Functions
import { getPosts } from "../api/PostDataService";

Vue.use(Vuex);

const mutations = {
  UPDATE_POST(state, payload) {
    const index = state.editIndex;
    if (index >= 0) {
      state.editPost = null;
      state.postsList.splice(index, 1, payload);
      state.editIndex = -1;
    }
  },

  ADD_POST(state, payload) {
    state.postsList.push(payload);
  },

  LOAD_POSTS(state, payload) {
    state.postsList = payload.slice(0, 10);
  },

  DELETE_POST(state, payload) {
    const index = state.postsList.indexOf(payload);
    if (index > 0) {
      state.postsList.splice(index, 1);
    }
  },

  EDIT_POST(state, payload) {
    const index = state.postsList.indexOf(payload);
    if (index >= 0) {
      state.editIndex = index;
      state.editPost = state.postsList[index];
    }
  },
};

const actions = {
  async loadPosts(context) {
    const posts = await getPosts();
    context.commit("LOAD_POSTS", posts);
  },

  updatePost(context, updatedPost) {
    context.commit("UPDATE_POST", updatedPost);
  },

  addPost(context, newPost) {
    context.commit("ADD_POST", newPost);
  },

  deletePost(context, post) {
    context.commit("DELETE_POST", post);
  },

  editPost(context, post) {
    context.commit("EDIT_POST", post);
  },
};

const state = {
  postsList: [],
  currentPost: {
    title: "",
    body: "",
  },
  editPost: null,
  editIndex: -1,
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;
