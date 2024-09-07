const router = require("express").Router();
const Comment = require("../models/Comment");

router
  .get("/", async (req, res) => {
    try {
      const comm = await Comment.find();
      res.status(200).json(comm);
    } catch (error) {
      res.status(500);
      return;
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      try {
        await comment.delete();
        res.status(200).json("Comment deleted successfully");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });


module.exports = router;
