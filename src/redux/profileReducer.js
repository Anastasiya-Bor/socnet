const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 11 },
    { id: 2, message: "It is my first post", likeCount: 65 },
    { id: 3, message: "It is my second post", likeCount: 15 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      // state.newPostText = action.newText;
      // return state;

      return {
        ...state,
        newPostText: action.newText,
      };

    case ADD_POST:
      // let newPost = {
      //   id: 5,
      //   message: state.newPostText,
      //   likeCount: 0,
      // };
      // state.posts.push(newPost);
      // state.newPostText = "";
      // return state;

      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, message: state.newPostText, likeCount: 0 },
        ],
        newPostText: "",
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
