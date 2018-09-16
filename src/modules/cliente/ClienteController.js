import dbConnection from '../../db/connection'
import ClientesValidations from './Validations'


export default {
  /**
   * Método responsavel por cadastrar o cliente
   * a variavel data refere-se aos dados qa serem populados 
   * no sistema
   * 
   * @param {Object} data 
   */
  async adicionar(data) {
    const models = await dbConnection
    // TODO - criar as validações para os dados de entrada do cliente

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
  }
}
