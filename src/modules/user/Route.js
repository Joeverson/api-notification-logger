import Express from 'express'
import User from './UserController'

const App = Express.Router()

App.route('/')
  .post(async (req, res) => {
    res.send(await User.get())
  })

App.route('/login')
  .post(async (req, res) => {
    res.send(await User.autenticate(req.body))
  })

App.route('/register')
  .post(async (req, res) => {
    try {
      const user = await User.register(req.body)

      res.send({
        data: user
      })
    } catch (err) {
      res.send({
        error: err
      })
    }
  })

App.route('/matta')
  .post(async (req, res) => {
    try {
      res.send(await User.mata(req.body))
    } catch (err) {
      res.send({
        error: err
      })
    }
  })

export default App
