import {mountDB} from '../connection'

mountDB.then( models => {
  console.log(models)  

  process.exit(0)
})