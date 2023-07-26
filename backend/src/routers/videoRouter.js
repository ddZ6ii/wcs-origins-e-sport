const express = require("express");

const videoController = require("../controllers/videoController");
const validateVideoInfo = require("../middlewares/validators/videoValidator");

const router = express.Router();

router.get("/", videoController.getAllWithFilters);
router.get("/premium", videoController.getAllPremium);
router.get("/freemium", videoController.getAllFreemium);
router.get("/:id", videoController.getById);

router.put("/:id", validateVideoInfo, videoController.editById);
router.delete("/:id", videoController.remove);
router.post("/", validateVideoInfo, videoController.post);

module.exports = router;
