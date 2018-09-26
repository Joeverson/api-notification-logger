import dbConnection from './connection'

export default {
  async run () {
    const model = await dbConnection

    this.user_types(model)
  },
  async user_types (model) {
    await model.User_types.create({ type: 'consultor' })
    await model.User_types.create({ type: 'supervisor' })
    await model.User_types.create({ type: 'regional' })
  }
}
