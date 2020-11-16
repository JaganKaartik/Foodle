const root = (req, res) => {
  res.send('<h1>Root Page</h1>')
}

const developer = (req, res) => {
  res.send('<h1>Developer Section</h1>')
}

const error = (req, res) => {
  res.send('<h1>Error Page</h1>')
}

export { root, developer, error }
