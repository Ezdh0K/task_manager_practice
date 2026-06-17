const bcrypt = require('bcryptjs');
const User = require('../users/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config({
    quiet: true
});

const generateAccessToken = (id, roles) => {
    const payload = {
        id, roles
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" } );
}

exports.registration = async (req, res) => {
    try {
        const { user_name, user_email, password, role } = req.body;
        if (!user_email || !password || !user_name) return res.status(400).json({ error: 'Поля имени, почты и пароля обязательны для заполнения!' });

        const existing = await User.getUserByEmail({user_email});
        if (existing) return res.status(409).json({ error: 'user already exists' });

        const password_hash = await bcrypt.hash(password, 10);
        const user = await User.createUser({ user_name, user_email, password_hash, role });

        return res.json({ message: 'Пользователь успешно зарегистрирован' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Ошибка регистрации!' });
    }
};

exports.login = async (req, res) => {
    try {
        const { user_email, password, role } = req.body;
        if (!user_email || !password) return res.status(400).json({ error: 'Поля почты и пароля обязательны для заполнения!' });

        const user = await User.getUserByEmail({user_email});
        if (!user)
            {
                console.log('user not found');
                return res.status(401).json({ error: 'user not found' });
            }

        const valid = await bcrypt.compare(password, user.password_hash);
        if (!valid)
            {
                console.log('Пароль неверный!');
                return res.status(401).json({ error: 'Пароль неверный!' });
            }
        
        const token = generateAccessToken(user.user_id, user.role);

        return res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Ошибка логина!' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.json(users);
    } catch (err) {}
};