const root = (req, res) => {
  res.render('pages/index')
}

const developer = (req, res) => {
  res.render('pages/developer')
}

const error = (req, res) => {
  res.render('pages/error')
}

export { root, developer, error }
