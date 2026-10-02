import {getAllUsers as ServiceGetAll,
    getUserId,
    createUser,
    updateUser,
    deleteUserById,} from "../services/users.service.js"
import { sendSuccess } from "../utils/response.js"

// http://localhost:3002/users/
export const AllUsers = async (req, res) => {
        const users = await ServiceGetAll();
        sendSuccess(res, users)
}

// http://localhost:3002/users/1
export const getUserById = async (req, res) => {
        const user = await getUserId(req.params.id);
        sendSuccess(res, user)
}

// http://localhost:3002/users/
export const postUserCreate = async (req, res) => {
        const user = await createUser(req.body)
        sendSuccess(res, user, 201)
}

// http://localhost:3002/users/1
export const patchUserUpdate = async (req, res) => {
        const user = await updateUser(req.params.id,req.body)
        sendSuccess(res, user)
}

// http://localhost:3002/users/1
export const deleteUser = async (req, res,next) => {
        const user = await deleteUserById(req.params.id)
        sendSuccess(res, user)
}
