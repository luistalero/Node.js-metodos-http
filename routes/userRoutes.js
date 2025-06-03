const express = require('express')
const router = express.Router()
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    patchUser,
    deleteUser
} = require('../controllers/userController')

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.patch('/:id', patchUser)
router.delete('/:id', deleteUser)

module.exports = router