import seed from '../config/seed'

const { validationResult } = require('express-validator')
const Dishes = require('../models/dish')
const User = require('../models/user')

const addDish = (req, res) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
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
  } else {
    res.status(422).jsonp(errors.array())
  }
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
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    Dishes.find({ id: req.params.id })
      .then((data: JSON) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
  } else {
    res.status(422).jsonp(errors.array())
  }
}

const deleteDish = (req, res) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
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
  } else {
    res.status(422).jsonp(errors.array())
  }
}

const updateDish = (req, res) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
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
  } else {
    res.status(422).jsonp(errors.array())
  }
}

const getUserInfo = (req, res) => {
  User.find({ userId: req.params.userid })
    .then((data: JSON) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
}

const seedDatabase = (req, res) => {
  seed()
    .then(() => {
      res.send({ success: true })
    })
    .catch((err) => {
      res.send({ success: false })
    })
}

export {
  addDish,
  getAllDish,
  getDish,
  deleteDish,
  updateDish,
  getUserInfo,
  seedDatabase
}
