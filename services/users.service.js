import User from "../modules/users.module.js";

async function getAllUsers() {
    const users = await User.findAll();
    return users;
}

async function getUserId(id) {
    const user = await User.findByPk(id);

    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

async function createUser({name, age}) {
    const user = await User.create({name, age});
    return user;
}


async function updateUser(id,updates) {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error("User not found");
    }
    await user.update(updates);
    return user;
}

async function deleteUserById(id) {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error("User not found");
    }
    await user.destroy();
    return user;
}

export {
    getAllUsers,
    getUserId,
    createUser,
    updateUser,
    deleteUserById,
}
