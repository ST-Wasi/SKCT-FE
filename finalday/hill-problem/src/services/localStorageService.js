export const savePostInLocalStorage = (key, value) => {
  // value : { }
  try {
    let savedPosts = localStorage.getItem("posts"); // '[{}]'
    let parsedSavedPost;
    if (savedPosts) {
      parsedSavedPost = JSON.parse(savedPosts); // [{ }]
      parsedSavedPost.push(value);

      let stringedData = JSON.stringify(parsedSavedPost);
      localStorage.setItem(key, stringedData);
    } else {
      let dataToSave = JSON.stringify([value]);
      localStorage.setItem(key, dataToSave);
    }
    return {
      message: "Saved",
    };
  } catch (error) {
    return {
      message: "Error Occured While Saving in Local Storage",
      error: error,
    };
  }
};

export const getAllPostFromLocal = () => {
  try {
    const dataFromLocal = localStorage.getItem("posts");
    return JSON.parse(dataFromLocal);
  } catch (error) {
    return {
      message: "Error Occured While Getting all the post from local",
      error: error,
    };
  }
};
