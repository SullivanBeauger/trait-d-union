const packageInfo = require('../../../package')
const createApiStatus = require('../feature/api-status')

module.exports = (app) => {
  const getApiStatus = createApiStatus(packageInfo)
  app.get('/api/v0/status', (req, res) => {
    res.send(getApiStatus())
  })
}
