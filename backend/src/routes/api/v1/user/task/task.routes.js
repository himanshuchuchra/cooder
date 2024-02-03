// Import Section
import express from "express";
import cardRouter from "./card.routes.js";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getSingleTask,
  updateTask,
} from "../../../../../controllers/api/v1/index.js";

// Configuration Section
const router = express.Router({ mergeParams: true });

// Middleware Section
router.use("/:taskid/cards", cardRouter);

// Authenticated Routes Section
router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:taskid")
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask);

// Export Section
export default router;