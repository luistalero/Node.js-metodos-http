const User = require('../models/User')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).json({ error: 'User not found' })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).json({ error: 'User not found' })

        await user.update(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' })
    }
}

exports.patchUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).json({ error: 'User not found' })

        await user.update(req.body, { fields: Object.keys(req.body) })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) return res.status(404).json({ error: 'User not found' })

        await user.destroy()
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}