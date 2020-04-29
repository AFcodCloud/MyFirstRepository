import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
  psd: [{ id: 1, message: "It's my first post!", likesCount: 0 }],
};

it("new post should be added", () => {
  //test data
  let action = addPost("ItCamasutra");
  //action
  let newState = profileReducer(state, action);

  //expectation
  expect(newState.psd.length).toBe(2);
});

it("message of new post should be correct", () => {
  //test data
  let action = addPost("ItCamasutra");
  //action
  let newState = profileReducer(state, action);

  //expectation
  expect(newState.psd[1].message).toBe("ItCamasutra");
});


it("post should be delete", () => {
  //test data
  let action = deletePost(1);
  //action
  let newState = profileReducer(state, action);

  //expectation
  expect(newState.psd.length).toBe(0);
});