import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await postMessage.find();
    console.log(postMessage);

    res.status(200), json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = (req, res) => {
  const body = req.body;
  try {
  } catch (error) {}
};
