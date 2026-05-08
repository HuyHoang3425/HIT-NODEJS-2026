import { Router } from "express";
import { uploadController } from "../controllers/index.js";
import { uploadMemory, uploadImage } from "../middlewares/upload.middleware.js";

const uploadRouter = Router();

uploadRouter.post(
  "/",
  uploadMemory.single("avatar"),
  uploadImage,
  uploadController.uploadImage,
);

export default uploadRouter;
