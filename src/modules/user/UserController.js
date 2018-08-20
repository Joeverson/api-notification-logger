import dbConnection from '../../db/connection'
import { cryptPass } from '../../utils'
import userValidations from './Validations'

export default {
  async autenticate (data) {
    const db = await dbConnection

    const user = await db.User.findOne({
      where: {
        email: data.email,
        password: cryptPass(data.password)
      }
    })

    return user
  },

  /**
   * metodo responsavel por regitrar novos
   * usuarios no sistema
   */
  async register (data) {
    const db = await dbConnection

    try {
      // validations here
      userValidations.isRequired(data)

      // insert
      const [err, user] = await db.User.create(data)

      return {
        err,
        user
      }
    } catch (err) {
      throw err
    }
  }
}
