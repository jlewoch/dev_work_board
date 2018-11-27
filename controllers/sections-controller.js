const knex = require('../db/knex/knex')

module.exports = {
  all: function (req, res) {
    knex('sections')
      .select('*')
      .then(data => res.status(200).json({ data, result: 'success' }))
      .catch(err => res.status(400).json(err))
  },

  create: function (req, res) {
    const { title, boardId } = req.body

    if (title === undefined || boardId === undefined) {
      res.status(400).json({
        result: 'error',
        msg: 'Please fill required details'
      })
    } else {
      knex('sections')
        .insert(req.body)
        .returning('id')
        .then(data => res.status(201).json({ data, result: 'success' }))
        .catch(err => res.status(400).json(err))
    }
  },

  get: function (req, res) {
    knex('sections')
      .select('*')
      .where({ id: req.params.id })
      .then(data => {
        res.status(200).json({ data, result: 'success' })
      })
      .catch(err => res.status(400).json(err))
  },

  update: function (req, res) {
    knex('sections')
      .update(req.body)
      .where({ id: req.params.id })
      .then(res.status(200).json({ result: 'success' }))
      .catch(err => res.status(400).json(err))
  },

  destroy: function (req, res) {
    knex('sections')
      .where({ id: req.params.id })
      .del()
      .then(res.status(200).json({ result: 'success' }))
      .catch(res.status(400).json)
  }
}
