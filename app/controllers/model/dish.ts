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

export = getAllDish
