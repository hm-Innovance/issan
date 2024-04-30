import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Chapter from "../models/chapter.model.js";

const createChapter = asyncHandler(async (req, res, next) => {
  const {chapter, chairman, secretary} = req.body
  if(!chapter || !chairman || !secretary){
    return res.status(400).json({status: false, message:"All fields are required!"})
  };
  const savedChapter = await Chapter.create(req.body);
  if(!savedChapter) return res.status(500).json({status: false, message:"Something went wrong"})
  return res.status(201).json(new ApiResponse(201, savedChapter, "Chapter saved successfully!"));
});

export {
    createChapter
}