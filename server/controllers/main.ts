const root = (req, res) => {
  res.send('Welcome to Root')
}

const error = (req, res) => {
  res.send('Error 404')
}

const healthCheck = (req, res) => {
  res.status(200)
  res.send('Health Check! -- Server Health : OK')
}

export { root, error, healthCheck }
