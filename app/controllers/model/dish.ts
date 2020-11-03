/* eslint-disable object-curly-newline */
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

const deleteDish = (req, res) => {
  DishSchema.findOneAndRemove({ id: req.params.id })
    .then((data: JSON) => {
      if (data) {
        res.send({ message: 'Successfully Deleted Record' })
      } else {
        res.send({ message: 'Error Wrong ID' })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

const updateDish = (req, res) => {}

export { getAllDish, getDish, deleteDish, updateDish }
