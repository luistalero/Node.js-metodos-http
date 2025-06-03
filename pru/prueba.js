// const express = require('express')
// const app = express()
// const PORT = 3000

// app.use(express.json())

// let users = [
//     {id: 1, name: 'Luis'},
//     {id: 2, name: 'Catalina'},
// ]

// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.get('/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id))
//     if (!user) return res.status(404).send('User not found')
//     res.json(user)
// })

// app.post('/users', (req, res) => {
//     const user = {
//         id: users.length + 1,
//         name: req.body.name
//     }
//     users.push(user)
//     res.status(201).json(user)
// })  

// app.put('/users/:id', (req, res) => {
//     const user = users.find(u => u.id === parseInt(req.params.id))
//     if (!user) return res.status(404).send('User not found')

//     if (req.body.name) user.name = req.body.name
//     res.json(user)
// })

// app.delete('/users/:id', (req, res) => {
//     const userIndex = users.findIndex(u => u.id === parseInt(req.params.id))
//     if (userIndex === -1) return res.status(404).send('User not found')

//     const deletedUser = users.splice(userIndex, 1)
//     res.json(deletedUser)
// })

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`)
// })