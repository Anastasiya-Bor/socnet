import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: 11 },
      { id: 2, message: "It is my first post", likeCount: 65 },
      { id: 3, message: "It is my second post", likeCount: 15 },
    ],
    newPostText: 'it-kamasutra'
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Maksim G" },
      { id: 3, name: "Ilon M" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
    ],
  },
  sidebar: {}
};

// window.state = state;

export let addPost = () => {
 
  let newPost = {
    id: 5, 
    message: state.profilePage.newPostText, 
    likeCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let upDateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;
  