import express, { Router } from "express";
import { postController } from "./post.controller";

import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.get("/", postController.getAllPosts);

// router.post("/", auth(UserRole.ADMIN), postController.createPost);
router.post("/", postController.createPost);

export const postRouter: Router = router;
