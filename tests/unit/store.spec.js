import store from "../../src/store";

describe("BaderRutter main store", () => {
  it("should have a list of posts", () => {
    expect(Array.isArray(store.state.postsList)).toBe(true);
  });

  it("should have currentPost property", () => {
    const { state } = store;
    expect(state.currentPost.title).not.toBe(undefined);
    expect(state.currentPost.body).not.toBe(undefined);
  });
});
