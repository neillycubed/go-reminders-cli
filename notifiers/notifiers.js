const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.get("/health", (req, res) => res.status(200).send())
app.listen(port, () => console.log(`Server up and running on port: ${port}`))
