// // import { describe, test, expect } from "jest";
// import { mount } from "@vue/test-utils";
// import userDetails from "../services/userDetails"
// // describe("User Details test case", () => {
// //   test("Initial testing", () => {
// //     const wrapper = mount(userDetails);

// //     expect(wrapper.html()).toContain(0);
// //   });
// // });

// jest.mock()

import { mount } from "@vue/test-utils";
// import Home from "../views/home.vue";
// import userDetails from "../services/userDetails";
import methods from "../services/fetch";
// import flushPromises from "flush-promises";
// import Foo from "./Foo";
// import jest from "jest";

describe("User Details test case", () => {
  test("Initial testing", () => {
    // const wrapper = mount(userDetails);

    expect(methods.methods.search()).pageCount.toBe(24);
  });
});

// jest.mock("axios");

// it("fetches async when a button is clicked", async () => {
//   const wrapper = shallowMount(userDetails);
//   wrapper.find("button").trigger("click");
//   await flushPromises();
//   expect(wrapper.text()).toBe("value");
// });
