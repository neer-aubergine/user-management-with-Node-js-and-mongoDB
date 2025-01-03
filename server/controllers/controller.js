import { createUser , deleteUser , updateUser , getUser , getAllUsers , loginUser} from '../services/userServices.js';

export const userCreate = async (req, res) => {
        if (!req.body  || !req.body.name || !req.body.email || !req.body.gender || !req.body.password
        ) {
        console.log(req.body)
        res.status(400).send({ message: 'Content cannot be empty' });
        return;
    }

    try {
        const userData = {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            password: req.body.password
        };
        await createUser(userData);
        res.status(201).redirect('/add-user');
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a create operation"
        });
    }
};


export const userDelete = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await deleteUser(userId);
        if (!user) {
            res.status(404).send({ message: `User not found with id ${userId}` });
        } else {
            res.status(200).send({ message: 'User deleted successfully' });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Could not delete user with id " + userId
        });
    }
};


export const userUpdate = async (req, res) => {
    const userId = req.params.id;

    if (!req.body) {
        res.status(400).send({ message: 'Data to update cannot be empty' });
        return;
    }

    try {
        const user = await updateUser(userId, req.body);
        if (!user) {
            res.status(404).send({ message: `User not found with id ${userId}` });
        } else {
            res.status(200).send(user);
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Could not update user with id " + userId
        });
    }
};

export const userGet = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await getUser(userId);
        if (!user) {
            res.status(404).send({ message: `User not found with id ${userId}` });
        } else {
            res.status(200).send(user);
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Could not retrieve user with id " + userId
        });
    }
};


export const userGetAll = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users"
        });
    }
};

export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send({ message: 'Email and password are required' });
        return;
    }

    try {
        const user = await loginUser(email, password);
        res.status(200).send(user);
    } catch (err) {
        res.status(401).send({
            message: err.message || "Invalid credentials"
        });
    }
};