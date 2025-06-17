const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.set("view engine", "ejs");
// app.use(logger)

// app.get("/", logger, (req, res) => {
//   console.log("Here");
//   res.render("index", { text: "World" });
// res.download("server.js")
// res.status(500).json({message: "Error"})
// });

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
