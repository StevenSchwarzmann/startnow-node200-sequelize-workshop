const express = require("express");
const router = express.Router();
const db = require("../db/models");

router.get("/", (req, res) => {
  db.Blog.findAll().then(blog => {
    blog
      ? res.status(200).json(blog)
      : res.status(404).send("Opps! Something went wrong, no authors found");
  });
});

router.get("/featured", (req, res) => {
    db.Blog.findAll({
      where: { featured: true }
    }).then(blog => {
      console.log("Featured blogs displayed");
      blog
        ? res.status(200).json(blog)
        : res.status(404).send("Uh oh! Featured blogs not found..");
    }).catch(err => console.log(err)) 
  });

router.get("/:id", (req, res) => {
  db.Blog.findById(req.params.id).then(blog => {
    blog
      ? res.status(200).send(blog)
      : res.status(404).send("Opps! Could not find a blog with that ID");
  });
});

router.post("/", (req, res) => {
  req.body.authorId = req.query.authorId;
  db.Blog.create(req.body).then(blog => {
    blog
      ? res.status(201).json(blog)
      : res.status(404).send("Something went wrong creating the blog");
  });
});

router.put("/:id", (req, res) => {
  db.Blog.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(blog => {
    blog
      ? res.status(204).json(blog)
      : res.status(404).send("Uh oh! Blog not updated");
  });
});

router.delete("/:id", (req, res) => {
  db.Blog.destroy({
    where: {
      id: req.params.id
    }
  }).then(blog => {
    blog
      ? res.status(200).send("Blog Deleted")
      : res
          .status(404)
          .send("Uh oh! Something went wrong and blog did not get delete");
  });
});

module.exports = router;
