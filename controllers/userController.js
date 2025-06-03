import User from '../models/User.js'

export async function getAllUsers (req, res) {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export async function getUserById (req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export async function createUser (req, res) {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' })
  }
}

export async function updateUser (req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })

    await user.update(req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' })
  }
}

export async function patchUser (req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })

    await user.update(req.body, { fields: Object.keys(req.body) })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' })
  }
}

export async function deleteUser (req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })

    await user.destroy()
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
