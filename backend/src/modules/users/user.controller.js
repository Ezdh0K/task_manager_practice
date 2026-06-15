const userService = require('./user.service');

exports.createUser = async (req, res, next) => {
    try {
        const { user_name, user_email, password_hash } = req.body;
        const user = await userService.createUser(user_name, user_email, password_hash);

        res.status(201).json(user);
    } catch (err) {
        next(err)
    }
};

exports.getUserByEmail = async (req, res, next) => {
    try {
        const { user_email } = req.body;
        const user = userService.getUserByEmail(user_email);

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const { new_user_name, new_user_email, new_user_password } = req.body;
        const { user_id } = req.params;
        const user = await userService.updateUser(user_id, new_user_name, new_user_email, new_user_password);

        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        await userService.deleteUser(user_id);

        res.status(204).send();
    } catch (err) {
        next(err);
    }
};