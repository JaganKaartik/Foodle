const homeController = (req, res) => {
  res.send('<h1>Welcome to Home -- No Auth Route -- Pls Login to continue</h1>')
}

const errorController = (req, res) => {
  res.send('<h1>Error Page</h1>')
}

export { homeController, errorController }
