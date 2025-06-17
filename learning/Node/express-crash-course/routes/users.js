const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
    console.log(req.query.name)
  res.send("User List");
});
router.get("/new", (req, res) => {
  res.render("users/new", {firstName: "Test"})
});

router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({firstName: res.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("error")
        res.render("users/new", {firstName: res.body.firstName})
    }
  res.send("Hi")
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });
const users = [{ name: "Bob" }, { name: "Dan" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
