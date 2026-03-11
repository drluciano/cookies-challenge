const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.get("/login/:username", function (req, res) {
  const username = req.params.username;

  var opts = {
    maxAge: 90000,
    httpOnly: true,
  };

  if (username) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.send("Please go to /login/[Username]");
  }

  res.cookie("username", username, opts);

  app;
});

app.listen(port, () => console.log(`Now listening on port ${port}.`));

//testing
