import _ from 'lodash'
import statement from '../db/connection'
import jwt from 'jsonwebtoken'

/** listagem de rotas que são livres do auth */
const freeRoutes = [
  '/user/login'
]

export default async (req, res, next) => {
  try {
    if (_.isEmpty(freeRoutes.filter(path => path === req.path))) {
      const db = await statement
      const token = req.headers['x-access-token']

      if (_.isUndefined(token)) {
        res.status(401).send({
          auth: false,
          message: 'No token provider!'
        })
      } else {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
          if (err) {
            res.status(500).send({
              auth: false,
              message: 'Failed to authenticate token.'
            })
          }

          const user = await db.User.find(decoded.id)
          req.body.user = user
        })
      }
    }
    next()
  } catch (err) {
    throw err
  }
}
