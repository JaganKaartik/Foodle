const root = (req, res) => {
  res.send('Welcome to Root')
}

const error = (req, res) => {
  res.send('Error')
}

export { root, error }
