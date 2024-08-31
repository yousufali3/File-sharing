import { request, response } from "express";
import File from "../models/file.js";
import path from "path";
import { sendEmail } from "../utils/mailer.js";
export const uploadImage = async (request, response) => {
  const op = request.file.path;
  const fileobj = {
    path: op,
    name: request.file.originalname,
  };
  console.log(request.file);
  try {
    const file = await File.create(fileobj);
    response
      .status(200)
      .json({ path: `http://localhost:3000/api/file/${file._id}` });
  } catch (error) {
    response.status(600).json({ error: error.message });
  }
};

export const downloadImage = async (request, response) => {
  console.log(request.params.fileId);

  try {
    const file = await File.findById(request.params.fileId);
    if (!file) {
      return response.status(404).json({ error: "File not found" });
    }
    file.downloadContent++;
    await file.save();
    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ error: error.message });
  }
};
