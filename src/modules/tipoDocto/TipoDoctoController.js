import dbConnection from '../../db/connection'
import userValidations from './Validations'

export default {
  async list() {
    const model = await dbConnection

    const tipoDocto = await model.TipoDocto.findAll()

    return tipoDocto
  },

  /**
   * Metodo responsavel por atualizar os dados do 
   * cliente
   * @param {int} id
   * @param {Object} data
   */
  async update(id, data) {
    const models = await dbConnection

    const tipoDocto = await models.Usuario.update(
      data, {
        returning: true,
        where: {
          id
        }
      }
    )

    // retornar dados inseridos
    return tipoDocto
  },
  /**
   * Metodo responsavel para poder 
   * deletar um cliente pelo id
   * 
   * @param {int} id 
   */
  async delete(id) {
    const models = await dbConnection

    const tipoDocto = await models.Usuario.destroy({
      returning: true,
      where: {
        id
      }
    })

    // retornar dados inseridos
    return tipoDocto
  }
}