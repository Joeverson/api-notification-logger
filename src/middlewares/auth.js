import db from '../db/connection'

export default async (req, res, next) => {
  console.log(await db.User)
  next()
}
