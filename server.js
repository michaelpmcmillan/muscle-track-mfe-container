const express = require("express");
const PORT = process.env.PORT || 80;

express()
  .use(express.static(__dirname))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "." });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
