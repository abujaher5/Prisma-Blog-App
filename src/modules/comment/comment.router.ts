import express, { Router } from "express";
import { commentController } from "./comment.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.get("/author/:authorId", commentController.getCommentsByAuthor);

router.get("/", commentController.getAllComments);
router.get("/users", commentController.getAllUsers);
router.get("/:commentId", commentController.getCommentById);

router.post(
  "/",
  auth(UserRole.ADMIN, UserRole.USER),
  commentController.createComment,
);
router.patch(
  "/:commentId",
  auth(UserRole.USER, UserRole.ADMIN),
  commentController.updateComment,
);
router.patch(
  "/moderate/:commentId",
  auth(UserRole.ADMIN),
  commentController.moderateComment,
);

router.delete(
  "/:commentId",
  auth(UserRole.USER, UserRole.ADMIN),
  commentController.deleteComment,
);

export const commentRouter: Router = router;
