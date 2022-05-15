let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer; 
  },


  // addPost() {
  //   let newPost = {
  //     id: 5, 
  //     message: this._state.profilePage.newPostText, 
  //     likeCount: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
    
  // },
  // upDateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5, 
        message: this._state.profilePage.newPostText, 
        likeCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;


window.store = store;

  