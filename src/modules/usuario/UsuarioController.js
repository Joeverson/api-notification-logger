import dbConnection from '../../db/connection'
import {
  password
} from '../../utils'
import userValidations from './Validations'
import jwt from 'jsonwebtoken'

export default {
  async autenticate(data) {
    /**
     * essa validaçaõ valida e retorna caso tenha um usuario
     */
    const user = await userValidations.exists(data)
    
    const token = jwt.sign({
      id: user.id,
      role: user['tipo_user.tipo']
    }, process.env.SECRET_KEY, {
      expiresIn: 86400 // expires in 24 hours
    })
    
    return {
      token,
      user
    }
  },

  /**
   * metodo responsavel por regitrar novos
   * usuarios no sistema
   */
  async register(data) {
    const model = await dbConnection

    // validations here
    userValidations.isRequired(data)
    await userValidations.notExistsEmail(data.email)

    // criptografando a senha
    data.senha = password.generate(data.senha)

    // insert
    const usuario = await model.Usuario.create(data)
    return usuario
  },

  async list() {
    const model = await dbConnection

    const usuario = await model.Usuario.findAll()

    return usuario
  },

  /**
   * Metodo responsavel por atualizar os dados do 
   * cliente
   * @param {int} id
   * @param {Object} data
   */
  async update(id, data) {
    const models = await dbConnection

    const usuario = await models.Usuario.update(
      data, {
        returning: true,
        where: {
          id
        }
      }
    )

    // retornar dados inseridos
    return usuario
  },
  /**
   * Metodo responsavel para poder 
   * deletar um cliente pelo id
   * 
   * @param {int} id 
   */
  async delete(id) {
    const models = await dbConnection

    const usuario = await models.Usuario.destroy({
      returning: true,
      where: {
        id
      }
    })

    // retornar dados inseridos
    return usuario
  }
}