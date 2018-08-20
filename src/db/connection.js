import Sequelize from 'sequelize'
import env from 'dotenv'
import {
  URI_DB_MODELS
} from '../utils/constants'
import directory from '../utils/directory'
/**
 * pegando as informações do arquivo .env
 * e as registrando
 */

env.config()

// objeto de banco de dados
const db = {
  instance: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    pool: {
      max: 6,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }),
  schema: {},
  /**
   * inicialização do banco de dados,
   * processamento dos modelos e associações
   */
  async statement () {
    const schemaDB = {
      User: {},
      User_types: {}
    }

    /**
     * varrendo todos os arquivos de modelos
     * para geralos automaticamente
     */
    const files = await directory.readDir(URI_DB_MODELS)
    // invertendo a lista de arquivos, pois ele é listado por ordem de criação
    files.sort((a, b) => {
      return a < b
    })
    /**
     * fazendo o import de todos os models
     * da aplicação e as colocando no esquema
     * de dados
     */

    files.forEach(file => {
      schemaDB[file.split('.')[0]] = (this.instance.import(`${__dirname}/models/${file}`))
    })

    /**
     * fazendo a associção das tabelas
     * no esquema de dados do ORM
     */
    Object.keys(schemaDB).forEach(modelName => {
      if (schemaDB[modelName].associate) {
        schemaDB[modelName].associate(schemaDB)
      }
    })

    schemaDB.sequelize = this.instance

    return schemaDB
  },
  /**
   * drop all db
   */
  drop () {
    this.instance.drop()
    return this
  },
  /**
   * load novos models
   */
  load () {
    this.instance.sync()
    return this
  },
  /**
   * zera tudo e cria novamente
   */
  loadForce () {
    this.instance.sync({force: true})
    return this
  }
}

export default db.loadForce().statement()
