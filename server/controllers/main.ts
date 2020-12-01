const root = (req, res) => {
  res.send('Welcome to Root')
}

const error = (req, res) => {
  res.send('Error')
}

const testRoute = (req, res) => {
  res.send({ message: 'test route' })
}
export { root, error, testRoute }
