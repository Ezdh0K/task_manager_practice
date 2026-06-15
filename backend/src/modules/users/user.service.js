const userModel = require('./user.model');

exports.createUser = async (userData) => {
    if (!userData.user_name || !userData.user_email || !userData.password_hash ||)
    {
        throw new Error("Поля имени, почты и пароля обязательны для заполнения!");
    }
    if (userData.user_email > 100) {
        throw new Error("Почта должна содержать не более 100 символов!");
    }

    return userModel.createUser(userData);
};

exports.getUserByEmail = async (userData) => {
    if (!userData.user_email) {
        throw new Error("Нету пользователя с такой почтой!");
    }

    return userModel.getUserByEmail(userData);
};

exports.updateUser = async (userData) => {
    const { user_id, new_user_name, new_user_email, new_user_password } = userData;
    if (!new_user_name || !new_user_email || !new_user_password)
    {
        throw new Error("Поля имени, почты и пароля обзательны для заполнения!");
    }
    if (!user_id) {
        throw new Error("Такого пользователя не существует!");
    }
    if (user_email.length > 100) {
        throw new Error("Почта может содержать не более 100 символов!");
    }
    if (user_name.length > 50) {
        throw new Error("Имя может содержать не более 50 символов!");
    }

    return userModel.putUser(userData);
};

exports.deleteUser = async (userData) => {
    if (!userData.user_id) {
        throw new Error("Нет такого пользователя!");
    }

    return userModel.deleteUser(userData);
};