import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import PostList from "../../src/components/PostList.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("PostList.vue", () => {
  let store;
  let postList;
  //let posts;

  beforeEach(() => {
    postList = [];
    store = new Vuex.Store({
      state: { postList },
    });
  });

  it("should expose store.noteList", () => {
    const wrapper = mount(PostList, {
      store,
      localVue,
      computed: { posts: () => [] },
    });

    expect(wrapper.vm.posts).toEqual(postList);
  });

  it("should iterate through postList", () => {
    const wrapper = mount(PostList, {
      store,
      localVue,
      computed: { posts: () => [{}, {}] },
    });

    const contents = wrapper.vm.posts;
    expect(contents.length).toBe(2);
  });

  it("should render posts inside postsList", () => {
    const wrapper = mount(PostList, {
      store,
      localVue,
      computed: {
        posts: () => [
          {
            title: "Post title",
            body: "Post content",
          },
        ],
      },
    });

    const title = "Post title";
    const content = "Post content";

    const titleEl = wrapper.find(".title");
    const contentEl = wrapper.find(".content");

    expect(titleEl.text()).toBe(title);
    expect(contentEl.text()).toBe(content);
  });
});
