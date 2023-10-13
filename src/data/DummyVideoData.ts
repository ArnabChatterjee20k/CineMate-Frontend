export default generateVideoData()

function generateVideoData() {
  const arr = [];
  for (let index = 0; index < 50; index++) {
    arr.push({
      id: Date.now(),
      title: "LoremIpsum",
      views: "18k",
      timestamp: "18 hours ago",
      author: "Arnab",
      thumbnail:
        "https://i.ytimg.com/vi/vxoZn5Hp4Cw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBc4TuDxa5fuetFrmmrGXj4NPRkyQ",
      videoURL: "",
      profilepicURL:
        "https://yt3.ggpht.com/ytc/AOPolaSMQO9wAO_A9kfnqFVBMi3ICs9OcxDcALZqZjkN=s88-c-k-c0x00ffffff-no-rj",
    });
  }
  return arr;
}
