const Dishes = require('../models/dish')

const addDish = (req, res) => {
  Dishes.find({}, { id: 1, _id: 0 })
    .limit(1)
    .sort({ $natural: -1 })
    .then((data: JSON) => {
      const newId = data[0].id + 1
      Dishes.create({
        id: newId,
        name: req.body.name,
        type: req.body.type,
        price: req.body.price
      })
        .then((resp: JSON) => {
          if (resp) {
            res.send({ success: true })
          } else {
            res.send({ success: false })
          }
        })
        .catch((err) => {
          res.send(err)
        })
    })
    .catch((err) => {
      res.send(err)
    })
}

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
  Dishes.find({ id: req.params.id })
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
        res.send({ success: true })
      } else {
        res.send({ success: false })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

const updateDish = (req, res) => {
  Dishes.findOneAndUpdate(
    { name: req.body.name },
    { price: req.body.price },
    { new: true }
  )
    .then((resp: JSON) => {
      if (resp) {
        res.send({ success: true })
      } else {
        res.send({ success: false })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export { addDish, getAllDish, getDish, deleteDish, updateDish }
