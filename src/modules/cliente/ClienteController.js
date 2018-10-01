import dbConnection from '../../db/connection'
import ClientesValidations from './Validations'
import ValidationException from '../../utils/exceptions/ValidationsExceptions';


export default {
  /**
   * Método responsavel por cadastrar o cliente
   * a variavel data refere-se aos dados qa serem populados 
   * no sistema
   * 
   * @param {Object} data 
   */
  async add(data) {
    const models = await dbConnection
    // TODO - criar as validações para os dados de entrada do cliente

    // adicionando o id do usuario que esta adicionando    
    const cliente = await models.Cliente.create(data)
    return cliente
  },
  /**
   * Listagem de clientes 
   */
  async list() {
    const models = await dbConnection
    
    const cliente = await models.Cliente.all()
    // retornar dados inseridos
    return cliente
  },
  /**
   * Metodo responsavel por atualizar os dados do 
   * cliente
   * @param {int} id
   * @param {Object} data
   */
  async update(id, data) {
    const models = await dbConnection

    const cliente = await models.Cliente.update(
      data, 
      { 
        returning: true,
        where: { id } 
      }
    )

    // retornar dados inseridos
    return cliente
  },
  /**
   * find byid
   * @param {Integer} id 
   */
  async find(id) {
    const models = await dbConnection

    const cliente = await models.Cliente.findById(id)

    // retornar dados inseridos
    return cliente
  },
  /**
   * Metodo responsavel para poder 
   * deletar um cliente pelo id
   * 
   * @param {int} id 
   */
  async delete(id) {
    const models = await dbConnection

    const cliente = await models.Cliente.destroy({
      returning: true,
      where: {
        id
      }
    })

    // retornar dados inseridos
    return cliente
  }
}
