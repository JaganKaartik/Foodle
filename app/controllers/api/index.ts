/* eslint-disable object-curly-newline */
const Dishes = require('../../models')

const getAllDish = (req, res) => {
  Dishes.find({})
    .then((data: JSON) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
}

const getDish = (req, res) => {
  Dishes.findById({ id: req.params.id })
    .then((data: JSON) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
}

const deleteDish = (req, res) => {
  Dishes.findOneAndRemove({ id: req.params.id })
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

const updateDish = (req, res) => {
  Dishes.findByIdAndUpdate(
    req.params.id,
    { $set: { price: req.payload.price } },
    { new: true }
  )
    .then((resp: JSON) => {
      if (resp) {
        res.send({ message: 'Record Updated Successfully' })
      } else {
        res.send({ message: 'Error Wrong ID' })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export { getAllDish, getDish, deleteDish, updateDish }
