import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import PostEditor from "../../src/components/PostEditor.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("PostEditor.vue", () => {
  it("Shallow renders Post Editor", () => {
    const wrapper = shallowMount(PostEditor, {
      propsData: {
        post: {
          title: "Test Data",
          body: "Test body",
        },
      },
    });

    expect(wrapper.html()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
