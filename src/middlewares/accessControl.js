import acl from 'express-acl'

const pathConfigAcessControl = `${__dirname}/../utils/routes/accessControl.json`

acl.config({
  filename: pathConfigAcessControl,
  path: '/',
  denyCallback: (res) => {
    return res.status(403).json({
      status: 'Access Denied',
      success: false,
      message: 'You are not authorized to access this resource'
    })
  }
})

export default acl.authorize
