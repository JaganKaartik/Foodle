const homeController = (req, res) => {
  res.send('<h1>Welcome to Home</h1>')
}

const errorController = (req, res) => {
  res.send('<h1>Error Page</h1>')
}

export { homeController, errorController }
