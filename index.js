const express = require("express");
const finalData = require("./data.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});

//insta PAGE
app.get("/instagram/:username", (req, res) => {
  const { username } = req.params;
  const data = finalData[username];

  if (!data) {
    return res.status(404).send("User not found");
  }

  res.render("insta.ejs", { data });
});
