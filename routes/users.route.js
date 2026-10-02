import express from "express";
import { AllUsers,getUserById,postUserCreate,patchUserUpdate,deleteUser } from "../controllers/users.controller.js";
import {validateCreateUser,validateCreateIdUser} from "../middleware/user.validetion.js"
import {asyncHandler} from "../middleware/asyncHandler.js"
const router = express.Router();

router.get("/",asyncHandler(AllUsers))
router.get("/:id",validateCreateIdUser,asyncHandler(getUserById))
router.post("/",validateCreateUser,asyncHandler(postUserCreate))
router.patch("/:id",validateCreateIdUser,validateCreateUser, asyncHandler(patchUserUpdate))
router.delete("/:id",validateCreateIdUser, asyncHandler(deleteUser))
export default router;