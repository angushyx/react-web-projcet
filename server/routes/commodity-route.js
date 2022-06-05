import express from "express";

const router = express.Router();
import auth from "../middleware/auth";

router.get("/", getAllItem);
router.patch("/:id/likeItem", auth, likeItem);
