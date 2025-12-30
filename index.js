const express = require("express");
const finalData = require("./data.json");

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});

//insta PAGE
app.get("/instagram/:username", (req, res) => {
  const { username } = req.params;
  const data = finalData[username];
  console.log(data);
  // console.log(data);

  let totalPost = 0;
  for (let i = 0; i < data.posts.length; i++) {
    // totalPost = totalPost+1;
  }

  res.render("insta.ejs", { data });
});
