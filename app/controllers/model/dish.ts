const DishSchema = require('../../models')

const getAllDish = (req, res) => {
  DishSchema.find({})
    .then((data: JSON) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getDish = (req, res) => {
  DishSchema.findById({ id: req.params.id })
    .then((data: JSON) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export { getAllDish, getDish }
