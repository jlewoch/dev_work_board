const knex = require('../db/knex/knex')

module.exports = {
  all: function (req, res) {
    knex('tasks')
      .select('*')
      .then(async rows => {
        res.status(200).json({ data: { ...rows }, result: 'success' })
      })
      .catch(err => res.status(400).json(err))
  },

  create: function (req, res, next) {
    const { title, sectionId } = req.body
    if ((typeof title !== 'undefined', typeof sectionId !== 'undefined')) {
      knex('tasks')
        .insert(req.body)
        .returning('id')
        .then(data => res.status(200).json({ data, result: 'success' }))
        .catch(err => res.status(400).json(err))
    } else {
      res.status(400).json({
        result: 'error',
        msg: 'Please fill required details'
      })
    }
  },

  get: function (req, res) {
    knex('tasks')
      .select('*')
      .where({ id: req.params.id })
      .then(data => res.status(200).json({ data, result: 'success' }))
      .catch(err => res.status(400).json(err))
  },

  update: function (req, res) {
    console.log(req.params)

    knex('tasks')
      .update(req.body)
      .where({ id: req.params.id })
      .then(data => res.status(200).json({ result: 'success' }))
      .catch(err => res.status(400).json(err))
  },

  destroy: function (req, res) {
    knex('tasks')
      .where({ id: req.params.id })
      .del()
      .then(res.status(200).json({ result: 'success' }))
      .catch(res.status(400).json)
  }
}
